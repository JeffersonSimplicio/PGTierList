"use client";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FormEvent, useState } from "react";
import "./contact.css";

export default function Contact() {
  const linkLinkedIn = "https://www.linkedin.com/in/jefferson-simplicio/";
  const linkGitHub = "https://github.com/JeffersonSimplicio";
  const linkRepo = "https://github.com/JeffersonSimplicio/pg_types_tierlist";

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('Enviando...');

    try {
      const res = await fetch('/sendFeedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, message }),
      });

      if (res.ok) {
        setStatus('Mensagem enviada com sucesso!');
        setName('');
        setMessage('');
      } else {
        const errorData = await res.json();
        setStatus(`Erro ao enviar a mensagem: ${errorData.error}`);
      }
    } catch (error) {
      setStatus('Erro ao enviar a mensagem.');
    }
  }

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
          />
        </div>
        <button type="submit" className="send-message">
          Enviar Mensagem
        </button>
         {status && <p>{status}</p>} {/* Temporário */}
      </form>
      <nav className="social-nav">
        <Link
          href={linkLinkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaLinkedin size={24} />
          <span>LinkedIn</span>
        </Link>
        <Link
          href={linkGitHub}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaGithub size={24} />
          <span>GitHub</span>
        </Link>
        <Link
          href={linkRepo}
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
