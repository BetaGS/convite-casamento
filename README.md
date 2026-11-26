# Convite de casamento (preto e branco editorial)

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera dist/ para publicar
```

1. Edite **src/data/weddingData.js** (horários, local, coordenadas, textos, PIX, WhatsApp, prazo do RSVP).
2. Coloque as fotos em **public/images/** (foto-1.jpg ... foto-11.jpg (11 = capa, 1 = nossa história, 2 a 10 = galeria)) e a música em **public/audio/musica.mp3**.
3. RSVP: troque `rsvp.mode` ("whatsapp", "api", "sheets" ou "console"); a lógica fica em `src/services/rsvpService.js`.
