import weddingData from "../data/weddingData";
import { formatDateLong, googleCalendarUrl } from "../utils/calendar";
import Reveal from "./Reveal";
import Ornament from "./Ornament";
import "../styles/Events.css";

function EventCard({ event, delay }) {
  const { date, venue, couple, timeZone } = weddingData;
  const calendarUrl = googleCalendarUrl({
    title: `${event.title} | Casamento ${couple.groom} & ${couple.bride}`,
    date,
    time: event.time,
    durationHours: event.durationHours,
    location: `${venue.name}, ${venue.address}`,
    details: event.description,
    timeZone,
  });

  return (
    <Reveal delay={delay}>
      <article className="event frame">
        <h3 className="label">{event.title}</h3>
        <p className="event__time">{event.time.replace(":", "h")}</p>
        <p className="event__date">{formatDateLong(date)}</p>
        <p className="event__place">{venue.name}</p>
        <p className="event__desc">{event.description}</p>
        <a className="btn btn--ghost" href={calendarUrl} target="_blank" rel="noopener noreferrer">Salvar na Agenda</a>
      </article>
    </Reveal>
  );
}

export default function Events() {
  const { ceremony, dressCode } = weddingData;
  return (
    <section className="band--paper" id="programacao">
      <div className="section">
        <Reveal><h2 className="section__title">Programação</h2></Reveal>
        <Ornament />
        <div className="events">
          <EventCard event={ceremony} delay={0} />
          <Reveal delay={150}>
            <article className="event frame">
              <h3 className="label">{dressCode.title}</h3>
              <p className="event__time event__time--text">{dressCode.value}</p>
              <p className="event__desc">{dressCode.note}</p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
