import { useImperativeHandle, useRef, useState } from "react";
import weddingData from "../data/weddingData";
import "../styles/MusicButton.css";

// A música começa quando o convidado toca no envelope (o App chama controlRef.current.play()).
// Navegadores bloqueiam som automático sem um toque antes, por isso não dá para tocar ao abrir a página.
export default function MusicButton({ controlRef }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useImperativeHandle(controlRef, () => ({
    play: () => audioRef.current?.play()?.catch(() => {}), // arquivo ausente ou bloqueado: segue sem som
  }), []);

  if (!weddingData.music) return null;

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) audio.play().catch(() => {});
    else audio.pause();
  };

  return (
    <>
      {/* playing acompanha o estado real do áudio, então o botão já aparece ativo quando a música começa */}
      <audio
        ref={audioRef}
        src={weddingData.music}
        loop
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button
        type="button"
        className={`music ${playing ? "music--on" : ""}`}
        onClick={toggle}
        aria-label={playing ? "Pausar música" : "Tocar música"}
        aria-pressed={playing}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 18V6l10-2v12" />
          <circle cx="6.5" cy="18" r="2.5" />
          <circle cx="16.5" cy="16" r="2.5" />
          {!playing && <path d="M3 3l18 18" />}
        </svg>
      </button>
    </>
  );
}