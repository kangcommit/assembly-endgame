import React, { type JSX } from "react";
import ConfettiContainer from "./components/ConfettiContainer";
import GameStatus from "./components/GameStatus";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import LanguageChips from "./components/LanguageChips";
import WordLetter from "./components/WordLetter";
import { languages } from "./languages";
import { getRandomWord } from "./utils";

function App(): JSX.Element {
	// State values
	const [currentWord, setCurrentWord] = React.useState<string>(getRandomWord());
	const [guessedLetters, setGuessedLetters] = React.useState<string[]>([]);

	// Derived values
	const wrongGuessCount: number = guessedLetters.filter(
		(letter: string): boolean => !currentWord.includes(letter),
	).length;
	const isGameWon: boolean = currentWord
		.split("")
		.every((letter) => guessedLetters.includes(letter));
	const isGameLost: boolean = wrongGuessCount >= languages.length - 1;
	const isGameOver: boolean = isGameWon || isGameLost;
	const lastGuessedLetter: string = guessedLetters[guessedLetters.length - 1];
	const isLastGuessIncorrect: boolean | string =
		lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

	function addGuessedLetter(letter: string): void {
		setGuessedLetters((prevLetters) =>
			prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter],
		);
	}

	function startNewGame(): void {
		setCurrentWord(getRandomWord());
		setGuessedLetters([]);
	}

	return (
		<main className="flex flex-col items-center gap-9">
			<ConfettiContainer isGameWon={isGameWon} />
			<Header />

			<GameStatus
				isGameWon={isGameWon}
				isGameOver={isGameOver}
				isLastGuessIncorrect={isLastGuessIncorrect}
				wrongGuessCount={wrongGuessCount}
			/>

			<LanguageChips wrongGuessCount={wrongGuessCount} />

			<WordLetter
				currentWord={currentWord}
				guessedLetters={guessedLetters}
				isGameLost={isGameLost}
			/>

			<Keyboard
				guessedLetters={guessedLetters}
				currentWord={currentWord}
				isGameOver={isGameOver}
				addGuessedLetter={addGuessedLetter}
			/>

			{isGameOver && (
				<button
					type="button"
					onClick={startNewGame}
					className="w-56.25 cursor-pointer rounded-sm border border-[#D7D7D7] bg-[#11B5E5] py-2 font-semibold text-[#1E1E1E]"
				>
					New Game
				</button>
			)}
		</main>
	);
}

export default App;
