# Fiber & Kraft

Welcome to Fiber & Kraft, an e-commerce platform designed for fiber enthusiasts looking to purchase custom blend wool and hand-dyed yarn. Our platform curates high-quality fiber products for spinning, knitting, and crocheting, sourced ethically from Midwest shepherds and milled locally in Minnesota. Each skein of yarn or bump of fiber can be traced back to its source, ensuring a connection between our products and their origins.

## Features

- **Ethically Sourced Materials**: Products made from wool sourced directly from local shepherds.
- **Local Production**: All materials are milled locally, ensuring quality and sustainability.
- **Accessibility and GDPR Compliance**: Our website meets WCAG 2.2 standards and is GDPR compliant, making it accessible to a wider audience.
- **Optimized for Mobile and Accessibility**: A minimal and aesthetically pleasing interface that's fully functional on mobile devices and accessible via screen readers.

## Prerequisites

Before you can run Fiber & Kraft locally, you'll need the following installed on your system:

- [Node.js](https://nodejs.org/) 24 LTS (24.19.0 pinned in `.nvmrc`)
- Local MongoDB listening on port 27017
- Optional: nvm to select the pinned runtime; Angular CLI is installed locally

## Installation

To set up Fiber & Kraft locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone git@github.com:angelajholden/fiberandkraft.git
   ```
2. Navigate to the project directory:
   ```bash
   cd fiber-and-kraft-fullstack
   ```
3. Install the required dependencies:
   ```bash
   nvm install
   nvm use
   npm ci
   ```

## Running the Application

Keep your local `.env` file at the repository root; it is ignored by Git.
Set `MONGO_URI=mongodb://127.0.0.1:27017/fiberandkraft`, retain your existing
`JWT_SECRET`, and use `PORT=3000` (or omit PORT for the default). Do not commit secrets.
Start MongoDB with your existing local service configuration.

```bash
npm run dev
```

This starts Angular at http://localhost:4200 and Express at http://localhost:3000.
Press Ctrl+C to stop both. You can also run `npm start` and `npm run server`
in separate terminals; `npm run backend` runs Express without nodemon.

## Verification before merging

```bash
git switch chore/modernize-angular-node
nvm install
nvm use
npm ci
npm run build
CHROME_BIN="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" npm test -- --watch=false --browsers=ChromeHeadless
npm run dev
```

The Chrome path above is for macOS; set `CHROME_BIN` to your Chrome executable
on other systems. The production build fetches Google Fonts and needs internet access.
In another terminal, check the API:

```bash
curl --fail http://localhost:3000/api/products
```

Open http://localhost:4200 and verify products, product details, cart quantities
and totals, checkout, registration/login, protected account/profile pages, and logout.
The automated suite checks the application shell; it does not cover all shopping
or authentication flows. Use your existing local test account for manual checks.

## Deployment

Fiber & Kraft is deployed on Heroku. For deploying your version, follow these steps:

1. Make sure you have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed.
2. Log in to your Heroku account:
   ```bash
   heroku login
   ```
3. Create a new Heroku app:
   ```bash
   heroku create
   ```
4. Push the code to Heroku:
   ```bash
   git push heroku main
   ```

## Contributing

We welcome contributions from the community. If you'd like to contribute to Fiber & Kraft, please fork the repository and submit a pull request.

## Design & Assets

The visual design and product assets for Fiber & Kraft are my original work unless otherwise noted.

- Product imagery, copy, and brand assets are provided for demonstration and educational purposes.
- Third-party frameworks, tools, fonts, and services retain their original licenses.

## License

Fiber & Kraft is licensed under the MIT License. See the LICENSE file in the project repository for more details.
## Modernization notes

The project uses Angular/CLI 22.2.0, TypeScript 6.0.3, and Node 24.19.0 LTS.
Angular was upgraded one major at a time with official migrations, with separate
verified commits for Angular 16 through 22. Existing NgModules, eager change
detection, Zone.js, and XHR HTTP behavior are retained explicitly by migrations.
Express remains on major version 4; backend source and the MongoDB connection
implementation are unchanged.

Remaining maintenance work:

- Sass `@import` is deprecated; migrate styles to `@use`/`@forward` separately.
- The existing Webpack browser and Karma builders are deprecated in Angular 22.
  Their optional build/test migrations were deferred to keep this upgrade focused.
- The September 30, 2026 audit reported 13 development dependency vulnerabilities
  (11 high, 1 moderate, 1 low); `npm audit --omit=dev` reported none.
  Address the development dependency advisories in a separate reviewed update.
- npm 11.17 may warn about dependency install scripts awaiting `allowScripts`
  review. The clean install, production build, and tests passed with these warnings.
- Automated tests cover the application shell, not shopping/authentication flows.
- Legacy deployment instructions above should be reviewed separately before production deployment.
