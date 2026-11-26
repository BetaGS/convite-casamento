import { useState } from "react";
import weddingData from "../data/weddingData";
import Reveal from "./Reveal";
import Ornament from "./Ornament";
import "../styles/Gift.css";

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    // Plano B para navegadores sem Clipboard API (HTTP ou webviews antigas)
    const el = document.createElement("textarea");
    el.value = text;
    el.style.position = "fixed";
    el.style.opacity = "0";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  }
}

export default function Gift() {
  const { text, pixKey, pixHolder, listUrl } = weddingData.gift;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await copyText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="band--white" id="presentes">
      <div className="section section--narrow gift">
        <Reveal><h2 className="section__title">Presentes</h2></Reveal>
        <Ornament />
        <Reveal className="gift__inner">
          <p className="gift__text">{text}</p>

          <div className="gift__box frame">
            <p className="label">PIX em nome de {pixHolder}</p>
            <code className="gift__key">{pixKey}</code>
            <button type="button" className="btn" onClick={handleCopy} aria-live="polite">
              {copied ? "Chave copiada" : "Copiar chave PIX"}
            </button>
          </div>

          {listUrl && (
            <a className="btn btn--ghost" href={listUrl} target="_blank" rel="noopener noreferrer">Ver lista de presentes</a>
          )}
        </Reveal>
      </div>
    </section>
  );
}
