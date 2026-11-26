import weddingData from "../data/weddingData";
import Reveal from "./Reveal";
import Ornament from "./Ornament";
import "../styles/MapSection.css";

export default function MapSection() {
  const { name, address, lat, lng, mapsUrl } = weddingData.venue;
  const query = lat && lng ? `${lat},${lng}` : encodeURIComponent(address);

  const embedSrc = `https://maps.google.com/maps?q=${query}&z=16&output=embed`;
  const googleUrl = mapsUrl || `https://www.google.com/maps/search/?api=1&query=${query}`;
  const wazeUrl = lat && lng ? `https://waze.com/ul?ll=${lat},${lng}&navigate=yes` : `https://waze.com/ul?q=${query}&navigate=yes`;

  return (
    <section className="band--white" id="local">
      <div className="section section--narrow">
        <Reveal><h2 className="section__title">Como chegar</h2></Reveal>
        <Ornament />
        <Reveal>
          <p className="map__name">{name}</p>
          <p className="map__address">{address}</p>
          {/* O filtro em CSS deixa o mapa em tom neutro e suave, combinando com o site */}
          <iframe className="map__frame" title={`Mapa: ${name}`} src={embedSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          <div className="map__actions">
            <a className="btn" href={googleUrl} target="_blank" rel="noopener noreferrer">Abrir no Google Maps</a>
            <a className="btn btn--ghost" href={wazeUrl} target="_blank" rel="noopener noreferrer">Abrir no Waze</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
