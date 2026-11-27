import weddingData from "../data/weddingData";
import Reveal from "./Reveal";
import Ornament from "./Ornament";
import "../styles/RSVP.css";

export default function RSVP() {
  const { whatsappNumber, message, buttonLabel, deadline } = weddingData.rsvp;

  // wa.me exige só dígitos; a mensagem já vai codificada para a URL
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <section className="band--dark" id="rsvp">
      <div className="section section--narrow">
        <Reveal><h2 className="section__title">Confirme sua presença</h2></Reveal>
        <Ornament />

        <Reveal className="rsvp">
          <p className="rsvp__notice">
            Convite individual e intransferível. Por favor, confirme sua presença até {deadline}.
          </p>

          <a className="btn rsvp__btn" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
            </svg>
            {buttonLabel}
          </a>
        </Reveal>
      </div>
    </section>
  );
}