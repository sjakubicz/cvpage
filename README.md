# CVPage

Osobista strona internetowa: CV, doświadczenie zawodowe, edukacja, publikacje i projekty. Strona jest w pełni statyczna i działa w przeglądarce, bez backendu i bez logowania. Obsługuje język polski (domyślny) i angielski oraz jasny i ciemny motyw.

## Podstrony

| Ścieżka          | Zawartość                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------ |
| `/`              | O mnie: zdjęcie, opis, linki do GitHuba i LinkedIna, kontakt, umiejętności i języki              |
| `/doswiadczenie` | Doświadczenie zawodowe z projektami i zakresem obowiązków                                        |
| `/edukacja`      | Studia z zakresem przedmiotów, projektami i mniejszymi zadaniami oraz publikacje z podglądem PDF |
| `/projekty`      | Projekty niezwiązane z pracą ani studiami                                                        |
| `/cv`            | Podgląd CV w PDF z możliwością pobrania                                                          |

## Technologie

- **React 19** i **TypeScript**, budowane przez **Vite**
- **Chakra UI 3** z motywem jasnym i ciemnym (`next-themes`)
- **React Router 7** z leniwym ładowaniem podglądu PDF
- **react-i18next** do tłumaczeń, z kluczami typowanymi w TypeScripcie
- **react-pdf** (pdf.js) do wyświetlania PDF bez ramki `iframe`
- **react-icons** i **country-flag-icons** do ikon i flag
- **Prettier** (wcięcie 4 spacje) i **oxlint**

## Struktura

```
src/
├── data/          struktura CV: daty, linki, tagi, ikony i klucze tekstów
├── i18n/
│   ├── content/   treść CV po polsku i angielsku
│   ├── locales/   teksty interfejsu po polsku i angielsku
│   └── types.ts   typy kluczy tłumaczeń
├── components/    komponenty, po jednym w pliku
├── pages/         podstrony
├── hooks/         hooki pomocnicze (język, formatowanie dat, szerokość elementu)
├── lib/           konfiguracja pdf.js i kodowanie danych kontaktowych
├── const.ts       stałe: nawigacja, języki, ikony, ścieżki plików
└── router.tsx     definicja tras
public/            zdjęcie, logo, favicon, CV w PDF i .htaccess
```

## Jak działa treść

Dane w `src/data` opisują tylko to, co nie zależy od języka. W miejscu tekstów trzymają klucze tłumaczeń, a same teksty leżą w `src/i18n/content`:

```ts
// src/data/studyProjects.ts
{ name: 'content.projects.vrp.name', tags: ['PyTorch', 'RL4CO'] }

// src/i18n/content/pl.ts
projects: { vrp: { name: 'Uczenie ze wzmocnieniem dla problemu marszrutyzacji (CVRP)' } }
```

Komponenty pobierają wszystkie teksty przez `t()` z `useTranslation`. Pola z tekstem mają typ `ContentKey`, więc nieistniejący klucz albo brakujące tłumaczenie angielskie kończy się błędem kompilacji.

## Szczegóły

- **Dane kontaktowe** są w kodzie zakodowane i odkodowują się dopiero po kliknięciu, żeby nie odczytały ich proste boty.
- **Zmiana języka nie przesuwa nagłówka:** każda pozycja menu rezerwuje szerokość dłuższej z dwóch wersji językowych.
- **Podgląd PDF** ładuje pdf.js dopiero po wejściu na `/cv` albo po rozwinięciu publikacji.
- **Strona błędu** pokazuje kod błędu (np. 404) w tym samym stylu co karty na stronie.
- **`.htaccess`** kieruje wszystkie ścieżki do `index.html`, dzięki czemu bezpośrednie wejście na podstronę działa na serwerze Apache.

## Uruchomienie

Wymaga Node.js 22 (wersja w `.nvmrc`).

```bash
npm install
npm run dev       # serwer deweloperski
npm run build     # build produkcyjny do dist/
npm run lint      # oxlint
npm run format    # Prettier
```
