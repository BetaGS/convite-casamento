import { useCallback, useEffect, useState } from "react";
import weddingData from "./data/weddingData";
import Envelope from "./components/Envelope";
import MusicButton from "./components/MusicButton";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import MapSection from "./components/MapSection";
import RSVP from "./components/RSVP";
import Gift from "./components/Gift";
import Footer from "./components/Footer";

export default function App() {
  const [opened, setOpened] = useState(false);
  const handleOpened = useCallback(() => setOpened(true), []);

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
      {!opened && <Envelope onOpened={handleOpened} />}
      <MusicButton />
      {opened && (
        <>
          <main>
            <Hero />
            <Story />
            <Gallery />
            <Events />
            <MapSection />
            <RSVP />
            <Gift />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
