"use client";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FormEvent, useState } from "react";
import "./contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const LINK_LINKEDIN = "https://www.linkedin.com/in/jefferson-simplicio/";
  const LINK_GITHUB = "https://github.com/JeffersonSimplicio";
  const LINK_REPO = "https://github.com/JeffersonSimplicio/pg_types_tierlist";

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
    <main className="contact-main">
      <h1 className="title-page">Contate-nos</h1>
      <p className="contact-message">
        Adoraríamos ouvir sua opinião! Se você tiver dúvidas, feedback ou
        sugestões, não hesite em entrar em contato conosco através do formulário
        de contato abaixo, ou pelos nossos perfis no LinkedIn e GitHub.
      </p>
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
          {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
        <ToastContainer position="bottom-right" />
      </form>
      <nav className="social-nav">
        <Link
          href={LINK_LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaLinkedin size={24} />
          <span>LinkedIn</span>
        </Link>
        <Link
          href={LINK_GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaGithub size={24} />
          <span>GitHub</span>
        </Link>
        <Link
          href={LINK_REPO}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaExternalLinkAlt size={24} />
          <span>Repositório de Projetos</span>
        </Link>
      </nav>
    </main>
  );
}
