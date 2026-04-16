# Frontend Runtime Notes

This folder is the active front-end runtime for the current site.

## Active Runtime

- `assets/app.js`: shared runtime for home and cases pages (language, routing, list/detail rendering)
- `assets/styles.css`: shared styles
- `assets/data/translations.js`: UI copy and i18n strings
- `assets/data/cases.js`: case data source
- `assets/data/sections.js`: shared section-level data (e.g. partners logos)

## Runtime Rule

- `assets/app.js` is the single runtime entry for interaction logic.
- Do not introduce parallel page runtimes for cases/home in separate folders.

## How to Add a New Case

1. Add a new key in `assets/data/cases.js` (e.g. `case_4`)
2. Include all language blocks: `en`, `zh-cn`, `zh-tw`
3. Include fields in each language block:
   - `tag`
   - `cardTitle`
   - `cardDesc`
   - `title`
   - `sub`
   - `challengeHtml`
   - `solutionHtml`
4. Add optional case result pill text in `assets/data/translations.js`:
   - `case_4_result`

## How to Update Partner Logos

Edit `assets/data/sections.js`:

- Placeholder mode: `{ name: 'Brand 01' }`
- Real logo mode: `{ name: 'Brand Name', logoSrc: './images/logo.svg' }`

The partners section renders automatically from this data.

The runtime logs warnings in console when required case fields are missing.
