import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { CheckboxFilter } from "./checkboxFilter";
import { AppRouterContextProviderMock } from "@/tests";

const mockListOptions = {
  fire: "Fire",
  water: "Water",
  grass: "Grass",
};

describe("CheckboxFilter", () => {
  it("should render correctly", () => {
    const replace = vi.fn();
    render(
      <AppRouterContextProviderMock router={{ replace }}>
        <CheckboxFilter
          listOptions={mockListOptions}
          queryName="types"
          text="Filter by Type"
        />
      </AppRouterContextProviderMock>
    );

    const buttonFilter = screen.getByText("Filter by Type");
    expect(buttonFilter).toBeVisible();

    fireEvent.click(buttonFilter);

    const checkboxAll = screen.getByText("Todos");
    expect(checkboxAll).toBeVisible();

    Object.values(mockListOptions).forEach((option) => {
      expect(screen.getByText(option)).toBeVisible();
    });
  });

  it("should toggle dropdown on button click", () => {
    const replace = vi.fn();
    render(
      <AppRouterContextProviderMock router={{ replace }}>
        <CheckboxFilter
          listOptions={mockListOptions}
          queryName="types"
          text="Filter by Type"
        />
      </AppRouterContextProviderMock>
    );

    const buttonFilter = screen.getByText("Filter by Type");
    fireEvent.click(buttonFilter);

    expect(screen.getByText("Todos")).toBeVisible();
    Object.values(mockListOptions).forEach((option) => {
      expect(screen.getByText(option)).toBeVisible();
    });

    fireEvent.click(buttonFilter);

    expect(screen.queryByText("Todos")).not.toBeInTheDocument();
    Object.values(mockListOptions).forEach((option) => {
      expect(screen.queryByText(option)).not.toBeInTheDocument();
    });
  });

  it("should check and uncheck checkboxes correctly", () => {
    const replace = vi.fn();
    render(
      <AppRouterContextProviderMock router={{ replace }}>
        <CheckboxFilter
          listOptions={mockListOptions}
          queryName="types"
          text="Filter by Type"
        />
      </AppRouterContextProviderMock>
    );

    const buttonFilter = screen.getByText("Filter by Type");
    fireEvent.click(buttonFilter);

    const fireCheckbox = screen.getByLabelText("Fire");
    const waterCheckbox = screen.getByLabelText("Water");
    const allCheckbox = screen.getByLabelText("Todos");

    fireEvent.click(fireCheckbox);
    expect(fireCheckbox).toBeChecked();

    fireEvent.click(waterCheckbox);
    expect(waterCheckbox).toBeChecked();

    fireEvent.click(allCheckbox);
    expect(allCheckbox).toBeChecked();

    fireEvent.click(fireCheckbox);
    expect(fireCheckbox).not.toBeChecked();

    fireEvent.click(waterCheckbox);
    expect(waterCheckbox).not.toBeChecked();

    expect(allCheckbox).not.toBeChecked();
  });

  it("should update the URL with selected types", async () => {
    const replace = vi.fn();
    render(
      <AppRouterContextProviderMock router={{ replace }}>
        <CheckboxFilter
          listOptions={mockListOptions}
          queryName="types"
          text="Filter by Type"
        />
      </AppRouterContextProviderMock>
    );

    const buttonFilter = screen.getByText("Filter by Type");
    fireEvent.click(buttonFilter);
    const fireCheckbox = screen.getByLabelText("Fire");
    fireEvent.click(fireCheckbox);

    console.log(replace.mock.calls[2][0]);
    expect(replace.mock.calls[2][0]).toMatch(/types=fire/i);
    console.log(replace.mock.calls[2][0]);
  });
  it("should initialize with the correct state and handle 'Todos' checkbox correctly", () => {
    const replace = vi.fn();
    render(
      <AppRouterContextProviderMock router={{ replace }}>
        <CheckboxFilter
          listOptions={mockListOptions}
          queryName="types"
          text="Filter by Type"
        />
      </AppRouterContextProviderMock>
    );

    const buttonFilter = screen.getByText("Filter by Type");
    expect(screen.queryByText("Todos")).not.toBeInTheDocument();
    Object.values(mockListOptions).forEach((option) => {
      expect(screen.queryByLabelText(option)).not.toBeInTheDocument();
    });

    fireEvent.click(buttonFilter);
    const allCheckbox = screen.getByLabelText("Todos");
    expect(allCheckbox).toBeVisible();

    fireEvent.click(allCheckbox);
    Object.values(mockListOptions).forEach((option) => {
      expect(screen.getByLabelText(option)).toBeChecked();
    });

    fireEvent.click(allCheckbox);
    Object.values(mockListOptions).forEach((option) => {
      expect(screen.getByLabelText(option)).not.toBeChecked();
    });
  });
});
