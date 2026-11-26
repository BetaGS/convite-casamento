import weddingData from "../data/weddingData";

const { rsvp, couple } = weddingData;

export function buildWhatsAppMessage(d) {
  const lines = [
    `Olá! Confirmação de presença no casamento de ${couple.groom} e ${couple.bride}.`,
    "",
    `Nome: ${d.name}`,
    `Telefone: ${d.phone}`,
    `Presença: ${d.attending === "yes" ? "confirmada" : "não poderei comparecer"}`,
  ];
  if (d.message) lines.push("", `Mensagem: ${d.message}`);
  return lines.join("\n");
}

// Troque o "mode" em weddingData.js para alternar entre os destinos.
export async function submitRSVP(data) {
  switch (rsvp.mode) {
    case "whatsapp": {
      // Sem await antes do window.open, para o navegador não bloquear a nova aba
      const url = `https://wa.me/${rsvp.whatsappNumber}?text=${encodeURIComponent(buildWhatsAppMessage(data))}`;
      window.open(url, "_blank", "noopener");
      return { ok: true };
    }
    case "api": {
      const res = await fetch(rsvp.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Falha ao enviar");
      return { ok: true };
    }
    case "sheets": {
      // Google Apps Script publicado como Web App (doPost lendo e.postData.contents)
      await fetch(rsvp.endpoint, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(data),
      });
      return { ok: true };
    }
    default:
      console.log("RSVP:", data);
      return { ok: true };
  }
}
