import { useState } from "react";
import weddingData from "../data/weddingData";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";
import Ornament from "./Ornament";
import "../styles/Gallery.css";

// Para editar as fotos, altere o array "gallery" em src/data/weddingData.js
const PHOTOS = weddingData.gallery;

export default function Gallery() {
  const [current, setCurrent] = useState(null);

  return (
    <section className="band--dark" id="galeria">
      <div className="section">
        <Reveal><h2 className="section__title">Nossos momentos</h2></Reveal>
        <Ornament />

        <div className="gallery">
          {PHOTOS.map((photo, i) => (
            <button type="button" className="gallery__item" key={photo.src} onClick={() => setCurrent(i)} aria-label={`Ampliar foto ${i + 1}`}>
              <img src={photo.src} alt={photo.alt} loading="lazy" onError={(e) => (e.currentTarget.style.visibility = "hidden")} />
            </button>
          ))}
        </div>
      </div>

      {current !== null && (
        <Lightbox photos={PHOTOS} index={current} onChange={setCurrent} onClose={() => setCurrent(null)} />
      )}
    </section>
  );
}
