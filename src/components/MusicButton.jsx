import { useRef, useState } from "react";
import weddingData from "../data/weddingData";
import "../styles/MusicButton.css";

export default function MusicButton() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  if (!weddingData.music) return null;

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false); // arquivo ausente ou bloqueado pelo navegador
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src={weddingData.music} loop preload="none" />
      <button
        type="button"
        className={`music ${playing ? "music--on" : ""}`}
        onClick={toggle}
        aria-label={playing ? "Pausar música" : "Tocar música"}
        aria-pressed={playing}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {playing ? (
            <>
              <path d="M9 18V6l10-2v12" />
              <circle cx="6.5" cy="18" r="2.5" />
              <circle cx="16.5" cy="16" r="2.5" />
            </>
          ) : (
            <>
              <path d="M9 18V6l10-2v12" />
              <circle cx="6.5" cy="18" r="2.5" />
              <circle cx="16.5" cy="16" r="2.5" />
              <path d="M3 3l18 18" />
            </>
          )}
        </svg>
      </button>
    </>
  );
}
