# Moduł Expert24

Strona firmowa zbudowana w Next.js dla `https://www.modulexpert24.pl`.

## Uruchomienie lokalne

1. Zainstaluj zależności: `npm ci`
2. Skopiuj `.env.example` do `.env.local` i uzupełnij `RESEND_API_KEY`.
3. Uruchom projekt: `npm run dev`

## Kontrola przed wdrożeniem

- `npm run lint`
- `npm run typecheck`
- `npm run build`
- albo wszystkie trzy: `npm run check`

## Wdrożenie na Vercel

Projekt wymaga zmiennej `RESEND_API_KEY` w środowiskach Production i Preview.
Identyfikator Google Ads oraz etykieta konwersji znajdują się w `src/lib/site.ts`.
Konwersja jest rejestrowana dopiero po poprawnym wysłaniu formularza.

Polityka prywatności nie została jeszcze dodana. Należy ją przygotować po
uzupełnieniu danych administratora i następnie podlinkować w stopce oraz
komunikacie o zgodzie.
