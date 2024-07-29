import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { FormFeedback } from "./formFeedback";
import { vi } from "vitest";
import { toast } from "react-toastify";

vi.mock("react-toastify", () => ({
  ToastContainer: () => null,
  toast: {
    info: vi.fn(),
    success: vi.fn(),
    error: vi.fn(),
    dismiss: vi.fn(),
  },
}));

describe("FormFeedback Component", () => {
  beforeEach(() => {
    (toast.info as any).mockClear();
    (toast.success as any).mockClear();
    (toast.error as any).mockClear();
    (toast.dismiss as any).mockClear();
  });

  test("renders the form", () => {
    render(<FormFeedback />);
    expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mensagem/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Enviar Mensagem/i })
    ).toBeInTheDocument();
  });

  test("disables submit button when form is invalid", () => {
    render(<FormFeedback />);
    const submitButton = screen.getByRole("button", {
      name: /Enviar Mensagem/i,
    });

    expect(submitButton).toBeDisabled();

    fireEvent.change(screen.getByLabelText(/Nome/i), {
      target: { value: "Isabela Santos" },
    });

    expect(submitButton).toBeDisabled();

    fireEvent.change(screen.getByLabelText(/Mensagem/i), {
      target: { value: "Olá!" },
    });

    expect(submitButton).toBeEnabled();
  });

  test("displays success message on successful form submission", async () => {
    global.fetch = vi.fn(
      () =>
        Promise.resolve({
          ok: true,
        }) as any
    );

    render(<FormFeedback />);
    fireEvent.change(screen.getByLabelText(/Nome/i), {
      target: { value: "Isabela Santos" },
    });
    fireEvent.change(screen.getByLabelText(/Mensagem/i), {
      target: { value: "Olá!" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Enviar Mensagem/i }));

    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith(
        "Mensagem enviada com sucesso!"
      );
    });
  });

  test("displays error message on failed form submission", async () => {
    global.fetch = vi.fn(
      () =>
        Promise.resolve({
          ok: false,
          json: () => Promise.resolve({ error: "Something went wrong" }),
        }) as any
    );

    render(<FormFeedback />);
    fireEvent.change(screen.getByLabelText(/Nome/i), {
      target: { value: "Isabela Santos" },
    });
    fireEvent.change(screen.getByLabelText(/Mensagem/i), {
      target: { value: "Olá!" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Enviar Mensagem/i }));

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith(
        "Erro ao enviar a mensagem: Something went wrong"
      );
    });
  });

  test("displays error message on exception during form submission", async () => {
    global.fetch = vi.fn(
      () => Promise.reject(new Error("Network error")) as any
    );

    render(<FormFeedback />);
    fireEvent.change(screen.getByLabelText(/Nome/i), {
      target: { value: "Isabela Santos" },
    });
    fireEvent.change(screen.getByLabelText(/Mensagem/i), {
      target: { value: "Olá!" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Enviar Mensagem/i }));

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith("Erro ao enviar a mensagem.");
    });
  });
});
