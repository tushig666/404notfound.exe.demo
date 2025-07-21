# Button Does Nothing (Retro Hacker Edition)

A strange and entertaining web game built with Vite + React + Tailwind CSS.

## Theme

- Retro hacker / old-school CRT computer style
- Glowing neon blue-on-black, scanlines, flicker, glitch effects
- Monospace font, responsive and mobile friendly

## How to Play

- Click the tempting button in the center of the screen.
- Each click triggers a random, weird, glitchy, or creepy effect!
- Effects include fake 404, system error stacks, creepy eye, distorted voice, static noise, blue screen, ASCII monster, fake terminal, lock freeze, and soul spinner.
- Every 10 clicks triggers a secret deeper glitch.
- Button has a 2-3s delay before feedback to feel broken.

## Features

- Animated transitions with Framer Motion
- Glitch scanlines, flicker, and static overlays
- Click count stored in localStorage
- All effects are separate React components for easy expansion

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customization

- Add new effects by creating components in `src/effects/` and adding them to the `effects` array in `App.jsx`.

---

Enjoy the chaos! 👾

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
