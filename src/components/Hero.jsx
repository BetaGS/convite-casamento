import weddingData from "../data/weddingData";
import useCountdown from "../utils/useCountdown";
import { formatDateLong, formatWeekday } from "../utils/calendar";
import Reveal from "./Reveal";
import Ornament from "./Ornament";
import "../styles/Hero.css";

export default function Hero() {
  const { couple, date, utcOffset, ceremony, heroPhoto, message } = weddingData;
  const left = useCountdown(`${date}T${ceremony.time}:00${utcOffset}`);

  const units = [
    ["Dias", left.days],
    ["Horas", left.hours],
    ["Minutos", left.minutes],
    ["Segundos", left.seconds],
  ];

  return (
    <header className="hero">
      <img
        className="hero__bg"
        src={heroPhoto}
        alt={`${couple.groom} e ${couple.bride}`}
        fetchPriority="high"
        onError={(e) => (e.currentTarget.style.visibility = "hidden")}
      />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__frame frame" aria-hidden="true" />

      <div className="hero__content">
        {/* Topo: sobre o céu da foto */}
        <div className="hero__top">
          <Reveal delay={200}><p className="label">Save the date</p></Reveal>

          <Reveal delay={350}>
            <h1 className="hero__names">
              <span>{couple.groom}</span>
              <span className="hero__amp">&amp;</span>
              <span>{couple.bride}</span>
            </h1>
          </Reveal>

          <Reveal delay={500}>
            <p className="hero__weekday label">{formatWeekday(date)}</p>
            <p className="hero__date">{formatDateLong(date)}</p>
          </Reveal>
        </div>

        {/* Base: mensagem e contagem regressiva, abaixo do casal */}
        <div className="hero__bottom">
          <Reveal delay={750}>
            <Ornament />
            <p className="hero__msg">{message}</p>
          </Reveal>

          <Reveal delay={900}>
            {left.done ? (
              <p className="hero__today">É hoje.</p>
            ) : (
              <div className="hero__countdown" role="timer" aria-label="Contagem regressiva para o casamento">
                {units.map(([label, value]) => (
                  <div className="hero__unit" key={label}>
                    <strong>{String(value).padStart(2, "0")}</strong>
                    <span className="label">{label}</span>
                  </div>
                ))}
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </header>
  );
}
