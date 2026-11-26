import { useState } from "react";
import weddingData from "../data/weddingData";
import { submitRSVP } from "../services/rsvpService";
import Reveal from "./Reveal";
import Ornament from "./Ornament";
import Monogram from "./Monogram";
import "../styles/RSVP.css";

const INITIAL = { name: "", phone: "", attending: "yes", message: "" };

function validate(f) {
  const errors = {};
  if (f.name.trim().length < 3) errors.name = "Informe seu nome completo.";
  if (f.phone.replace(/\D/g, "").length < 10) errors.phone = "Informe um telefone com DDD.";
  return errors;
}

export default function RSVP() {
  const { rsvp } = weddingData;
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  const set = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus("sending");
    try {
      await submitRSVP({ ...form, name: form.name.trim(), message: form.message.trim(), sentAt: new Date().toISOString() });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  const firstName = form.name.trim().split(" ")[0];

  return (
    <section className="band--dark" id="rsvp">
      <div className="section section--narrow">
        {status === "done" ? (
          <div className="rsvp-done frame" role="status">
            <Monogram className="rsvp-done__mono" />
            <h2 className="rsvp-done__title">
              {form.attending === "yes" ? "Presença confirmada" : "Recado recebido"}
            </h2>
            <Ornament />
            <p>
              {form.attending === "yes"
                ? `Obrigado, ${firstName}. Será uma honra celebrar com você.`
                : `Obrigado por avisar, ${firstName}. Sentiremos a sua falta.`}
            </p>
            <button type="button" className="btn btn--ghost" onClick={() => { setForm(INITIAL); setStatus("idle"); }}>
              Enviar outra resposta
            </button>
          </div>
        ) : (
          <>
            <Reveal><h2 className="section__title">Confirme sua presença</h2></Reveal>
            <Ornament />
            <Reveal>
              <p className="rsvp__notice">
                Convite individual e intransferível. Por favor, confirme sua presença até {rsvp.deadline}.
              </p>

              <form className="rsvp" onSubmit={handleSubmit} noValidate>
                <label className="field">
                  <span className="label">Nome completo</span>
                  <input type="text" value={form.name} onChange={set("name")} autoComplete="name" aria-invalid={!!errors.name} />
                  {errors.name && <em>{errors.name}</em>}
                </label>

                <label className="field">
                  <span className="label">Telefone / WhatsApp</span>
                  <input type="tel" inputMode="tel" placeholder="(21) 99999-9999" value={form.phone} onChange={set("phone")} autoComplete="tel" aria-invalid={!!errors.phone} />
                  {errors.phone && <em>{errors.phone}</em>}
                </label>

                <fieldset className="field">
                  <legend className="label">Confirmação</legend>
                  <div className="choice">
                    {[["yes", "Sim, estarei presente"], ["no", "Infelizmente não poderei comparecer"]].map(([value, text]) => (
                      <label key={value} className={`choice__opt ${form.attending === value ? "choice__opt--on" : ""}`}>
                        <input type="radio" name="attending" value={value} checked={form.attending === value} onChange={set("attending")} />
                        {text}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <label className="field">
                  <span className="label">Mensagem ou desejo especial (opcional)</span>
                  <textarea rows="3" value={form.message} onChange={set("message")} />
                </label>

                {status === "error" && <p className="rsvp__error" role="alert">Não foi possível enviar agora. Tente novamente em instantes.</p>}

                <button type="submit" className="btn" disabled={status === "sending"}>
                  {status === "sending" ? "Enviando" : "Confirmar presença"}
                </button>
              </form>
            </Reveal>
          </>
        )}
      </div>
    </section>
  );
}
