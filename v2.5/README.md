# v2 Structure Notes

This folder is the active front-end runtime for the current site.

## Active Runtime

- `v2/app.js`: shared runtime for home and cases pages (language, routing, list/detail rendering)
- `v2/styles.css`: shared styles
- `v2/data/translations.js`: UI copy and i18n strings
- `v2/data/cases.js`: case data source
- `v2/data/sections.js`: shared section-level data (e.g. partners logos)

## Runtime Rule

- `v2/app.js` is the single runtime entry for interaction logic.
- Do not introduce parallel page runtimes for cases/home in separate folders.

## How to Add a New Case

1. Add a new key in `v2/data/cases.js` (e.g. `case_4`)
2. Include all language blocks: `en`, `zh-cn`, `zh-tw`
3. Include fields in each language block:
   - `tag`
   - `cardTitle`
   - `cardDesc`
   - `title`
   - `sub`
   - `challengeHtml`
   - `solutionHtml`
4. Add optional case result pill text in `v2/data/translations.js`:
   - `case_4_result`

## How to Update Partner Logos

Edit `v2/data/sections.js`:

- Placeholder mode: `{ name: 'Brand 01' }`
- Real logo mode: `{ name: 'Brand Name', logoSrc: './images/logo.svg' }`

The partners section renders automatically from this data.

The runtime logs warnings in console when required case fields are missing.
