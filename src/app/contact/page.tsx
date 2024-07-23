import Link from "next/link";
import "./contact.css";
import { FaLinkedin, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Contact() {
  const linkLinkedIn = "https://www.linkedin.com/in/jefferson-simplicio/";
  const linkGitHub = "https://github.com/JeffersonSimplicio";
  const linkRepo = "https://github.com/JeffersonSimplicio/pg_types_tierlist";

  return (
    <main className="contact-main">
      <h1 className="title-page">Contate-nos</h1>
      <p className="contact-message">
        Adoraríamos ouvir sua opinião! Se você tiver dúvidas, feedback ou
        sugestões, não hesite em entrar em contato conosco através do formulário
        de contato abaixo, ou pelos nossos perfis no LinkedIn e GitHub.
      </p>
      <form className="contact-form">
        <div className="mb-4">
          <label htmlFor="name" className="label-form">
            Nome
          </label>
          <input
            type="text"
            id="name"
            className="input-form"
            placeholder="Seu Nome"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="label-form">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            className="input-form"
            placeholder="Seu E-mail"
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
          />
        </div>
        <button type="submit" className="send-message">
          Enviar Mensagem
        </button>
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
