# Weather Forecast App

The Pokédex is an electronic device in the Pokémon world that serves as an encyclopedia for Pokémon species. It provides information about different Pokémon, including their types, abilities, and habitats. Each Pokémon is assigned a unique identification number, and the database is organized in a systematic order.

## Features

- **Get pokemons info**: Get Pokemon info and details such as its type, weight, heigh, etc.

## Project Structure

The project is built using **Vite**, **React**, and **TypeScript**, and includes several key features:

- **Testing**: Implemented using **Vitest** and **React Testing Library**.
- **Environment Variables**: Manage sensitive data with environment variables.
- **Linting**: Ensured code quality with **ESLint**.

### Directory Structure

- public/
- src/
  - assets/
  - components/
    - ComponentName/
      - index.tsx
      - index.test.tsx
      - style.css
  - utils/
        hooks/
        - useHookName.ts
        - useHookName.test.ts
    utils-file.ts
  - styles/
- cypress/e2e/\*.cy.ts
- config files (ts, vite, eslint, jest)
- .gitignore
- index.html
- package.json
- github/workflows/deploy.yml
- .env

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/weather-forecast-app.git
   cd weather-forecast-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Scripts

- **Start the development server**: `npm run dev`
- **Build the project**: `npm run build`
- **Lint the code**: `npm run lint`
- **Preview the built project**: `npm run preview`
- **Run tests**: `npm run test`
- **Run tests with coverage**: `npm run test:ci`
- **Run end to end tests GUI mode**: `npm run cy:e2e`

## Configuration

The ESLint configuration is set up to include React-specific rules and TypeScript support. You can customize the ESLint settings in `eslint.config.js` according to your needs.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
