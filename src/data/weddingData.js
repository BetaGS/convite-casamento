// ============================================================
//  TUDO O QUE PRECISA SER EDITADO FICA NESTE ARQUIVO.
//  Itens marcados com [EDITAR] estão com valores de exemplo.
// ============================================================

const weddingData = {
  couple: {
    groom: "João Pedro",
    bride: "Karine",
    initials: "J & K",
  },

  // Data no formato AAAA-MM-DD (16/01/2027 é sábado) e fuso horário do local
  date: "2027-01-16",
  utcOffset: "-03:00",
  timeZone: "America/Sao_Paulo",

  // [EDITAR] Horários HH:MM e duração (em horas) usada no Google Agenda
  ceremony: {
    title: "Cerimônia",
    time: "16:30",
    durationHours: 1.5,
    description: "Pedimos que cheguem com 20 minutos de antecedência.",
  },
  reception: {
    title: "Recepção",
    time: "18:00",
    durationHours: 5,
    description: "Jantar, música e celebração.",
  },

  // [EDITAR] Local, endereço e coordenadas
  venue: {
    name: "Espaço Jardim das Oliveiras",
    address: "Rua das Flores, 123, Centro, Rio de Janeiro - RJ",
    lat: -22.9068,
    lng: -43.1729,
    mapsUrl: "", // opcional: cole o link do Google Maps para o botão "Abrir no Google Maps"
  },

  // [EDITAR] Traje
  dressCode: {
    title: "Traje",
    value: "Social completo",
    note: "Sugerimos tons sóbrios e escuros. Pedimos que evitem o branco.",
  },

  // Mensagem dos noivos (aparece no topo do site)
  message:
    "Com muito amor, queremos compartilhar com vocês a data em que celebraremos o início de uma nova etapa das nossas vidas. Reservem essa data para viver esse momento tão especial conosco.",

  // Foto de capa (hero): foto-11 tem espaço de céu acima do casal para o texto
  heroPhoto: "/images/foto-11.jpg",

  // Música de fundo (opcional). Use "" para esconder o botão. Arquivo em public/audio/
  music: "/audio/musica.mp3",

  // [EDITAR] Nossa história: texto, citação e linha do tempo
  story: {
    title: "Nossa história",
    photo: { src: "/images/foto-1.jpg", alt: "João Pedro e Karine" },
    paragraphs: [
      "Nos conhecemos em um dia comum, e nada nele parecia especial até a primeira conversa.",
      "De lá para cá, foram viagens, domingos em família e planos que viraram rotina. Agora queremos começar essa nova etapa com quem esteve conosco em cada capítulo.",
    ],
    quote: "O melhor lugar do mundo é ao lado de quem a gente ama.",
    timeline: [
      { when: "2019", text: "Nos conhecemos" },
      { when: "2022", text: "Fomos morar juntos" },
      { when: "2025", text: "O pedido" },
      { when: "2027", text: "O sim" },
    ],
  },

  // Fotos da galeria (retrato): foto-2.jpg até foto-10.jpg. Adicione ou remova à vontade.
  gallery: Array.from({ length: 9 }, (_, i) => ({
    src: `/images/foto-${i + 2}.jpg`,
    alt: `Foto ${i + 1} do ensaio de João Pedro e Karine`,
  })),

  // Envio do RSVP. mode: "whatsapp" | "api" | "sheets" | "console"
  rsvp: {
    mode: "whatsapp",
    whatsappNumber: "5521999999999", // [EDITAR] DDI + DDD + número, só dígitos
    endpoint: "", // usado nos modos "api" e "sheets"
    deadline: "15 de dezembro de 2026", // [EDITAR]
  },

  // Presentes
  gift: {
    text: "Sua presença é o nosso maior presente. Se desejar nos presentear, pode contribuir pelo PIX ou pela nossa lista.",
    pixKey: "joaopedro.karine@email.com", // [EDITAR]
    pixHolder: "João Pedro", // [EDITAR]
    listUrl: "", // [EDITAR] link da lista externa; vazio esconde o botão
  },
};

export default weddingData;
