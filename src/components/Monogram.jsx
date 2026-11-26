import weddingData from "../data/weddingData";

// "J & K" com as letras sobrepostas levemente (efeito entrelaçado)
export default function Monogram({ className = "" }) {
  const [a, b] = weddingData.couple.initials.split("&").map((s) => s.trim());
  return (
    <span className={`mono ${className}`} aria-label={weddingData.couple.initials}>
      <span className="mono__l">{a}</span>
      <span className="mono__amp">&amp;</span>
      <span className="mono__l">{b}</span>
    </span>
  );
}
