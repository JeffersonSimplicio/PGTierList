import Link from "next/link";
import { FaLinkedin, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FormFeedback } from "@/components";
import "./contact.css";

export default function Contact() {
  const LINK_LINKEDIN = "https://www.linkedin.com/in/jefferson-simplicio/";
  const LINK_GITHUB = "https://github.com/JeffersonSimplicio";
  const LINK_REPO = "https://github.com/JeffersonSimplicio/pg_types_tierlist";

  return (
    <main className="contact-main">
      <h1 className="title-page">Contate-nos</h1>
      <p className="contact-message">
        Adoraríamos ouvir sua opinião! Se você tiver dúvidas, feedback ou
        sugestões, não hesite em entrar em contato conosco através do formulário
        de contato abaixo, ou pelos nossos perfis no LinkedIn e GitHub.
      </p>
      <FormFeedback />
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
