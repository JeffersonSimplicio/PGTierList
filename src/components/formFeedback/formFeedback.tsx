"use client";
import "./formFeedback.css";
import { FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function FormFeedback() {
  const MAX_NAME_LENGTH = 100;
  const MAX_MESSAGE_LENGTH = 1000;

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!name.trim() || !message.trim()) {
      setIsSubmitting(false);
      return;
    }

    toast.info("Enviando...", { autoClose: false });

    try {
      const res = await fetch("/sendFeedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, message }),
      });

      if (res.ok) {
        toast.dismiss();
        toast.success("Mensagem enviada com sucesso!");
        setName("");
        setMessage("");
      } else {
        const errorData = await res.json();
        toast.dismiss();
        toast.error(`Erro ao enviar a mensagem: ${errorData.error}`);
      }
    } catch (error) {
      toast.dismiss();
      toast.error("Erro ao enviar a mensagem.");
    }

    setIsSubmitting(false);
  };

  const isFormInvalid = !name.trim() || !message.trim();

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="label-form">
          Nome
        </label>
        <input
          type="text"
          id="name"
          className="input-form"
          placeholder="Seu Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={MAX_NAME_LENGTH}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="label-form">
          Mensagem
        </label>
        <textarea
          id="message"
          className="input-form"
          rows={4}
          placeholder="Sua Mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={MAX_MESSAGE_LENGTH}
        />
      </div>
      <button
        type="submit"
        className="send-message"
        disabled={isFormInvalid || isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
      </button>
      <ToastContainer position="bottom-right" />
    </form>
  );
}
