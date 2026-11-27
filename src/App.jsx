import { useCallback, useEffect, useRef, useState } from "react";
import weddingData from "./data/weddingData";
import Envelope from "./components/Envelope";
import MusicButton from "./components/MusicButton";
import Hero from "./components/Hero";
import Events from "./components/Events";
import MapSection from "./components/MapSection";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";

export default function App() {
  const [opened, setOpened] = useState(false);
  const handleOpened = useCallback(() => setOpened(true), []);
  const musicRef = useRef(null);
  const startMusic = useCallback(() => musicRef.current?.play(), []);

  // Pré-carrega a foto principal enquanto o envelope está na tela
  useEffect(() => {
    new Image().src = weddingData.heroPhoto;
  }, []);

  // Trava a rolagem enquanto o envelope está na tela
  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  return (
    <>
      {!opened && <Envelope onOpened={handleOpened} onStart={startMusic} />}
      <MusicButton controlRef={musicRef} />
      {opened && (
        <>
          <main>
            <Hero />
            <Events />
            <MapSection />
            <RSVP />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}