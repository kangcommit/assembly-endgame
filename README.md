# Word Guessing Game

A fun and interactive word guessing game built with React, TypeScript, and Tailwind CSS. Guess the hidden word by selecting letters before you run out of attempts!

## 🎮 Features

- **Random Word Selection**: Words are randomly selected from a extensive vocabulary list
- **Visual Feedback**: 
  - Confetti celebration on winning
  - Visual language chips showing wrong guesses
- **Interactive Keyboard**: Easy-to-use on-screen keyboard for letter selection
- **Game States**: Clear status indicators for win/loss conditions
- **New Game**: Start a fresh game at any time
- **Responsive Design**: Works on desktop and mobile devices

## 🛠️ Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Biome** - Linting and formatting

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm check` | Run linting and type checking |
| `pnpm check:fix` | Auto-fix linting issues |

## 🎯 How to Play

1. A random word is selected and displayed as blank letters
2. Click letters on the keyboard to guess
3. Correct guesses reveal the letter in the word
4. Wrong guesses add a language chip (like Hangman)
5. Win by guessing all letters before running out of attempts!
6. Click "New Game" to play again

## 📁 Project Structure

```
src/
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
├── components/          # React components
│   ├── ConfettiContainer.tsx
│   ├── GameStatus.tsx
│   ├── Header.tsx
│   ├── Keyboard.tsx
│   ├── LanguageChips.tsx
│   ├── NewGameButton.tsx
│   └── WordLetter.tsx
├── languages.ts         # Language configuration
├── utils.ts             # Utility functions
├── words.ts             # Word list
└── style.css            # Global styles
```

## 📄 License

MIT