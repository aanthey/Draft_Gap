# Draft Gap
<img width="150" height="150" alt="draft-gap-mark" src="https://github.com/user-attachments/assets/281d4c60-e91f-4edf-b5ef-694b400efb34" /># Draft Gap
![Uploading<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M32 3 45 25 32 58 19 25Z" fill="#C6A04B"/><path d="m8 21 12 9 9 28-17-13Z" fill="#A98035"/><path d="m56 21-12 9-9 28 17-13Z" fill="#C6A04B"/><path d="M32 8v44M22 25h20" stroke="#FFF8EE" stroke-width="1.5"/></svg> draft-gap-mark.svg…]()

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

## Design

The interface uses the Royal Blue and Gold light theme, with DM Sans for the interface and Lora for the main heading. See the [design setup notes](docs/design/README.md) for styling files, asset paths, and the included alternate night palette.

## Champion Data and Images

Champion data and images come from Riot Games' public Data Dragon service. These public assets do not require an API key.

## License

Original project code is licensed under the [MIT License](LICENSE).
Third-party assets, including Riot Games' champion data and images and bundled fonts, remain subject to their respective licenses and terms.
