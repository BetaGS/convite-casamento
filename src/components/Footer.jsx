import weddingData from "../data/weddingData";
import { formatDateDots } from "../utils/calendar";
import Monogram from "./Monogram";
import Ornament from "./Ornament";
import "../styles/Footer.css";

export default function Footer() {
  const { couple, date } = weddingData;
  return (
    <footer className="footer">
      <Monogram className="footer__mono" />
      <Ornament />
      <p className="footer__names">{couple.groom} &amp; {couple.bride}</p>
      <p className="label">{formatDateDots(date)}</p>
    </footer>
  );
}
