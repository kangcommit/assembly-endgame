import clsx from "clsx";
import React, { type JSX } from "react";
import ConfettiContainer from "./components/ConfettiContainer";
import GameStatus from "./components/GameStatus";
import Header from "./components/Header";
import LanguageChips from "./components/LanguageChips";
import WordLetter from "./components/WordLetter";
import { languages } from "./languages";
import { getRandomWord } from "./utils";

function App(): JSX.Element {
	const [currentWord, setCurrentWord] = React.useState<string>(getRandomWord());
	const [guessedLetters, setGuessedLetters] = React.useState<string[]>([]);

	const wrongGuessCount = guessedLetters.filter(
		(letter: string): boolean => !currentWord.includes(letter),
	).length;
	const isGameWon = currentWord
		.split("")
		.every((letter) => guessedLetters.includes(letter));
	const isGameLost = wrongGuessCount >= languages.length - 1;
	const isGameOver = isGameWon || isGameLost;
	const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
	const isLastGuessIncorrect: boolean | string =
		lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

	const alphabet = "abcdefghijklmnopqrstuvwxyz";

	function addGuessedLetter(letter: string): void {
		setGuessedLetters((prevLetters) =>
			prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter],
		);
	}

	const keyboardElement = alphabet.split("").map((letter): JSX.Element => {
		const isGuessed = guessedLetters.includes(letter);
		const isCorrect = isGuessed && currentWord.includes(letter);
		const isWrong = isGuessed && !currentWord.includes(letter);

		return (
			<button
				key={letter}
				type="button"
				disabled={isGameOver}
				onClick={() => addGuessedLetter(letter)}
				className={clsx(
					"flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm border border-[#D7D7D7] font-semibold text-[#1E1E1E] uppercase disabled:cursor-not-allowed disabled:opacity-50",
					isCorrect
						? "bg-[#10A95B]"
						: isWrong
							? "bg-[#EC5D49]"
							: "bg-[#FCBA29]",
				)}
			>
				{letter}
			</button>
		);
	});

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

			<section className="flex max-w-120 flex-wrap justify-center gap-2">
				{keyboardElement}
			</section>
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
