const pad = (n) => String(n).padStart(2, "0");

const parseDate = (date) => date.split("-").map(Number);

export function formatDateLong(date) {
  const [y, m, d] = parseDate(date);
  return new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(y, m - 1, d)));
}

export function formatWeekday(date) {
  const [y, m, d] = parseDate(date);
  return new Intl.DateTimeFormat("pt-BR", { weekday: "long", timeZone: "UTC" }).format(
    new Date(Date.UTC(y, m - 1, d))
  );
}

// Horário "flutuante" (sem Z); o fuso vai no parâmetro ctz do Google Agenda
function stamp(date, time, addHours = 0) {
  const [y, m, d] = parseDate(date);
  const [hh, mm] = time.split(":").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d, hh, mm + Math.round(addHours * 60)));
  return (
    `${dt.getUTCFullYear()}${pad(dt.getUTCMonth() + 1)}${pad(dt.getUTCDate())}` +
    `T${pad(dt.getUTCHours())}${pad(dt.getUTCMinutes())}00`
  );
}

export function googleCalendarUrl({ title, date, time, durationHours, location, details, timeZone }) {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${stamp(date, time)}/${stamp(date, time, durationHours)}`,
    details,
    location,
    ctz: timeZone,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

// "2027-01-16" -> "16 · 01 · 2027"
export function formatDateDots(date) {
  return date.split("-").reverse().join(" · ");
}
