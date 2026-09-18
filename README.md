# Draft Gap

A League of Legends team composition builder built with React, Vite, JavaScript, and plain CSS.

Draft Gap is in early development. The planned app will let users browse champions and build a team for Top, Jungle, Mid, ADC, and Support, with a simple summary of the team's composition.

## Planned Features

- Browse, search, and filter champion cards.
- Select a champion for each of the five roles.
- Remove or replace selected champions.
- View a simple team composition summary, including damage types and team strengths.

Player match history and champion mastery are possible future features outside the first version.

## How to Run Locally

You will need Node.js and npm installed.

1. Clone this repository and open a terminal in the repository's root folder.
2. Enter the app folder:

   ```sh
   cd DraftGap
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

4. Start the development server:

   ```sh
   npm run dev
   ```

5. Open the local URL printed in the terminal to view the app.

## Production Build

From the `DraftGap` folder, run:

```sh
npm run build
```

The build output is saved in `DraftGap/dist` relative to the repository root. To preview the production build locally, run `npm run preview` and open the URL printed in the terminal.

## Deployment

Live URL: pending deployment.

The planned Netlify settings are:

- Base directory: `DraftGap`
- Build command: `npm run build`
- Publish directory: `dist` (relative to the base directory)

## Champion Data and Images

Champion data and images come from Riot Games' public Data Dragon service. These public assets do not require an API key.

## License

Original project code is licensed under the [MIT License](LICENSE).
Third-party assets, including Riot Games' champion data and images and bundled fonts, remain subject to their respective licenses and terms.
