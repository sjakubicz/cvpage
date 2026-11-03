# CVPage

Osobista strona z CV: doświadczenie, edukacja, publikacje, projekty.
React + TypeScript + Vite, Chakra UI, React Router. Czysto statyczna — bez backendu.

## Uruchomienie

```bash
nvm use        # Node 22 (z .nvmrc)
npm install
npm run dev
```

## Edycja treści

- Struktura CV (daty, linki, tagi, ikony i klucze tekstów): [`src/data/`](src/data/)
- Teksty CV po polsku i angielsku: [`src/i18n/content/`](src/i18n/content/)
- Teksty interfejsu: [`src/i18n/locales/`](src/i18n/locales/)

Wszystkie teksty idą przez react-i18next (`t()`), a dane trzymają tylko klucze, np. `name: 'content.projects.vrp.name'`.
- Plik PDF z CV: `public/cv.pdf` (wyświetlany na `/cv` z przyciskiem pobierania)

Formatowanie: `npm run format` (Prettier, wcięcie 4 spacje).

## Deploy na OVH

```bash
npm run build
```

Wgraj **zawartość** katalogu `dist/` (łącznie z ukrytym plikiem `.htaccess`) do katalogu `www/` na hostingu przez FTP.
`.htaccess` przekierowuje wszystkie ścieżki do `index.html`, więc odświeżenie np. `/publikacje` działa.
