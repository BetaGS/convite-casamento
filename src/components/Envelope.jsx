import { useEffect, useState } from "react";
import weddingData from "../data/weddingData";
import { formatDateDots, formatDateLong } from "../utils/calendar";
import Monogram from "./Monogram";
import "../styles/Envelope.css";

// closed -> opening (selo se desfaz, aba abre, cartão sobe) -> leaving (cartão expande, tela some) -> onOpened()
export default function Envelope({ onOpened, onStart }) {
  const [stage, setStage] = useState("closed");
  const { couple, date } = weddingData;

  useEffect(() => {
    if (stage === "opening") {
      const t = setTimeout(() => setStage("leaving"), 2400);
      return () => clearTimeout(t);
    }
    if (stage === "leaving") {
      const t = setTimeout(onOpened, 1000);
      return () => clearTimeout(t);
    }
  }, [stage, onOpened]);

  return (
    <div className={`envelope-screen envelope-screen--${stage}`}>
      <button
        type="button"
        className={`env env--${stage}`}
        onClick={() => {
          if (stage !== "closed") return;
          onStart?.(); // inicia a música no próprio toque, único momento em que o navegador permite
          setStage("opening");
        }}
        aria-label="Abrir o convite"
      >
        <span className="env__body">
          <span className="env__back" />

          <span className="env__card frame" aria-hidden={stage === "closed"}>
            <Monogram className="env__card-mono" />
            <span className="env__card-names">{couple.groom} e {couple.bride}</span>
            <span className="env__card-date">{formatDateLong(date)}</span>
          </span>

          <span className="env__front" />
          {/* Tampa escura: garante que o cartão fique 100% oculto antes do clique */}
          <span className="env__fill" />

          {/* Filetes prata: costuras do envelope e margem interna */}
          <svg className="env__lines" viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden="true">
            <g fill="none" stroke="#C5A059" strokeOpacity="0.45" strokeWidth="1" vectorEffect="non-scaling-stroke">
              <rect x="9" y="9" width="382" height="282" vectorEffect="non-scaling-stroke" />
              <path d="M0 300 L200 168 L400 300" vectorEffect="non-scaling-stroke" />
            </g>
          </svg>

          <svg className="env__flap" viewBox="0 0 400 174" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="flapGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#232321" />
                <stop offset="1" stopColor="#171716" />
              </linearGradient>
            </defs>
            <polygon points="0,0 400,0 200,174" fill="url(#flapGrad)" stroke="#C5A059" strokeOpacity="0.45" vectorEffect="non-scaling-stroke" />
            <polygon points="18,0 382,0 200,152" fill="none" stroke="#C5A059" strokeOpacity="0.3" vectorEffect="non-scaling-stroke" />
          </svg>

          <span className="env__seal"><Monogram /></span>
        </span>
      </button>

      <div className="envelope-screen__foot">
        <p className="envelope-screen__date">{formatDateDots(date)}</p>
        <p className="envelope-screen__hint">Toque no selo para abrir o convite</p>
      </div>
    </div>
  );
}