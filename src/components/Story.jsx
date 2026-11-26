import weddingData from "../data/weddingData";
import Reveal from "./Reveal";
import Ornament from "./Ornament";
import "../styles/Story.css";

export default function Story() {
  const { title, photo, paragraphs, quote, timeline } = weddingData.story;
  return (
    <section className="band--white" id="historia">
      <div className="section section--narrow story">
        <Reveal><h2 className="section__title">{title}</h2></Reveal>
        <Ornament />

        {photo && (
          <Reveal className="story__photo frame">
            <img src={photo.src} alt={photo.alt} loading="lazy" onError={(e) => (e.currentTarget.style.visibility = "hidden")} />
          </Reveal>
        )}

        {paragraphs.map((p, i) => (
          <Reveal key={i}><p className="story__p">{p}</p></Reveal>
        ))}

        <Reveal><blockquote className="story__quote">“{quote}”</blockquote></Reveal>

        <ol className="timeline">
          {timeline.map((item) => (
            <Reveal as="li" className="timeline__item" key={item.when}>
              <span className="label">{item.when}</span>
              <span className="timeline__text">{item.text}</span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
