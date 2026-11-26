import { useEffect, useRef } from "react";
import "../styles/Lightbox.css";

const pad = (n) => String(n).padStart(2, "0");

export default function Lightbox({ photos, index, onChange, onClose }) {
  const touchX = useRef(null);
  const total = photos.length;
  const go = (step) => onChange((index + step + total) % total);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % total);
      if (e.key === "ArrowLeft") onChange((index - 1 + total) % total);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, total, onChange, onClose]);

  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  const photo = photos[index];

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Galeria de fotos"
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={onTouchEnd}
    >
      <button type="button" className="lightbox__close" onClick={onClose} aria-label="Fechar">&times;</button>
      <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Foto anterior">‹</button>

      <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
        <img src={photo.src} alt={photo.alt} />
        <figcaption>{pad(index + 1)} / {pad(total)}</figcaption>
      </figure>

      <button type="button" className="lightbox__nav lightbox__nav--next" onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Próxima foto">›</button>
    </div>
  );
}
