// ============================================================
//  TUDO O QUE PRECISA SER EDITADO FICA NESTE ARQUIVO.
//  Itens marcados com [EDITAR] estão com valores de exemplo.
// ============================================================

const weddingData = {
  couple: {
    groom: "João",
    bride: "Karine",
    initials: "J & K",
  },

  // Data no formato AAAA-MM-DD (16/01/2027 é sábado) e fuso horário do local
  date: "2027-01-16",
  utcOffset: "-03:00",
  timeZone: "America/Sao_Paulo",

 // [EDITAR] Horários HH:MM e duração (em horas) usada no Google Agenda
  ceremony: {
    title: "Rodízio & Buffet",
    time: "18:00",
    durationHours: 1.5,
    description: "Rodízio de carnes com serviço à mesa e buffet liberado, com repetição à vontade.",
  },

  // [EDITAR] Local, endereço e coordenadas
  venue: {
    name: "Rio Brasa",
    address: "Av. Borges de Medeiros, 829 – Lagoa. Rio de Janeiro – RJ",
    lat: -22.97976898898659,
    lng: -43.2163747764705,
    mapsUrl: "https://maps.app.goo.gl/GRLzX9nBZ76tkKfbA", // opcional: cole o link do Google Maps para o botão "Abrir no Google Maps"
  },

  // [EDITAR] Traje
  dressCode: {
    title: "Traje",
    value: "Dress code",
    note: "Para tornar este momento ainda mais harmonioso, pedimos que todos os convidados compareçam com traje social totalmente preto (All Black). Evite estampas e cores claras. O branco fica reservado exclusivamente para a noiva.",
  },

 // Mensagem dos noivos (aparece no topo do site)
  message:
    'Mateus 19:6: "Assim, eles já não são dois, mas sim uma só carne. Portanto, o que Deus uniu ninguém o separe."',
  // Foto de capa (hero): foto-11 tem espaço de céu acima do casal para o texto
  heroPhoto: "/images/foto-1.jpg",

  // Música de fundo (opcional). Use "" para esconder o botão. Arquivo em public/audio/
  music: "/audio/razaodaminhavida.mp3",



  // Fotos da galeria (retrato): foto-2.jpg até foto-10.jpg. Adicione ou remova à vontade.
  gallery: Array.from({ length: 9 }, (_, i) => ({
    src: `/images/foto-${i + 2}.jpg`,
    alt: `Foto ${i + 1} do ensaio de João e Karine`,
  })),

  // Confirmação de presença: botão que abre o WhatsApp dos noivos com a mensagem pronta
  rsvp: {
    whatsappNumber: "5521971214041", // [EDITAR] DDI + DDD + número, só dígitos
    message: "Olá! Gostaria de confirmar minha presença no casamento de João e Karine, no dia 16 de janeiro de 2027. Meu nome é [SEU NOME] ", // [EDITAR] o convidado completa com o nome
    buttonLabel: "Confirmar pelo WhatsApp",
    deadline: "20 de dezembro de 2026", // [EDITAR]
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