# Button Does Nothing

## Overview
"Button Does Nothing" is a web game built with Vite, React, and Tailwind CSS. The game features a simple interface where users can interact with buttons that trigger various visual effects using GIFs. The project is designed to be mobile-friendly and responsive, ensuring a smooth experience across devices.

## Features
- Interactive buttons that trigger GIF animations.
- A variety of GIFs for visual effects, sourced from Giphy.
- Responsive design using Tailwind CSS.
- Smooth animations implemented with Framer Motion or CSS transitions.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd button-does-nothing
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the development server, run:
```
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to view the game.

## Project Structure

- `src/App.jsx`: Main application component.
- `src/main.jsx`: Entry point for the React application.
- `src/index.css`: Global styles and Tailwind CSS imports.
- `src/effects/gifList.js`: Contains the primary list of GIF URLs for effects.
- `src/effects/gifList2.js`: Additional list of GIF URLs for further effects.
- `src/components/EffectComponent.jsx`: Component for displaying GIFs with animations.
- `src/hooks/useEffectLogic.js`: Custom hooks for managing game effects.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.