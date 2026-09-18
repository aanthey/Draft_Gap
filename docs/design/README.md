# Royal Blue and Gold Design Setup

The app uses the **light** theme from the supplied `draft-gap-royal-light-and-night` kit.

## Where to Edit

- `DraftGap/src/styles/fonts.css` registers the bundled fonts: DM Sans for the interface and Lora for the main heading. Caveat remains available as an optional accent.
- `DraftGap/src/styles/tokens.css` imports the active palette. A CSS token is a named value, used like `color: var(--color-heading)`.
- `DraftGap/src/styles/light-tokens.css` contains the active ivory, royal blue, and gold palette.
- `DraftGap/src/styles/night-tokens.css` contains the alternate navy palette.
- `DraftGap/src/styles/theme.css` applies only font families and basic page, heading, and link colors. It sets no sizes, spacing, layout, or component decoration.
- `DraftGap/src/index.css` and `DraftGap/src/App.css` are your own stylesheets, restored to their contents before the kit replacement. Implement layout and component styling here as you learn.

## Assets

Both themes are included under `DraftGap/public/assets/themes/light` and `DraftGap/public/assets/themes/night`. Each has a header illustration, logo, favicon, role icons, UI icons, and champion placeholder. Browser URLs start with `/assets/themes/`, without `public`.

Champion images remain in `public/assets/champions`. The kit's original and simplified champion JSON files are in `public/data`. The fonts and their OFL license files are in `public/assets/fonts`.

The previous plum logo, icons, placeholder, and header illustration have been removed. Use the new theme paths for future components.

## Alternate Theme

A theme toggle is not implemented. To manually work on the night theme later:

1. Change the import in `tokens.css` from `light-tokens.css` to `night-tokens.css`. Import only one: both files define `:root`, so the last imported palette wins.
2. Change the logo URL in `App.jsx` and favicon URL in `index.html` from `/themes/light/` to `/themes/night/`.
3. Use matching night URLs for any role or UI icons you add.

The `--image-header` token provides the matching illustration URL for each palette. It is available for you to use when you style the hero; no illustration is currently applied by the theme setup.

## Design Notes

Use Lora for the hero heading and DM Sans for navigation, panel headings, controls, and body text. Blue buttons use `--color-on-primary` for their text in both themes. Gold badges use `--color-gold-text` on `--color-gold-surface`. Pair selection outlines with visible text or an indicator.

Asset origins and credits from the supplied kit are recorded in [asset-sources.json](asset-sources.json). Champion assets belong to Riot Games; bundled fonts retain their OFL licenses. The kit identifies its decorative headers as AI-generated artwork and its role icons as custom symbols.
