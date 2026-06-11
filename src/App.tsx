import clsx from "clsx";
import React, { type JSX } from "react";
import Header from "./Header";
import { languages } from "./languages";
import { getFarewellText } from "./utils";

function App(): JSX.Element {
	const [currentWord, setCurrentWord] = React.useState<string>("react");
	const [guessedLetters, setGuessedLetters] = React.useState<string[]>([]);

	const wrongGuessCount = guessedLetters.filter(
		(letter: string): boolean => !currentWord.includes(letter),
	).length;
	const isGameWon = currentWord
		.split("")
		.every((letter) => guessedLetters.includes(letter));
	const isLost = wrongGuessCount >= languages.length - 1;
	const isGameOver = isGameWon || isLost;
	const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
	const isLastGuessIncorrect =
		lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

	const alphabet = "abcdefghijklmnopqrstuvwxyz";

	function addGuessedLetter(letter: string): void {
		setGuessedLetters((prevLetters) =>
			prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter],
		);
	}

	const languageElements = languages.map((language, index): JSX.Element => {
		const isLanguageLost = index < wrongGuessCount;

		const styles = {
			backgroundColor: language.backgroundColor,
			color: language.color,
		};

		return (
			<span
				key={language.name}
				style={styles}
				className={clsx(
					"relative rounded-sm p-1 font-bold text-xs",
					isLanguageLost &&
						"before:absolute before:inset-0 before:flex before:items-center before:justify-center before:rounded-[inherit] before:bg-black/70 before:content-['💀']",
				)}
			>
				{language.name}
			</span>
		);
	});

	const letterElements = currentWord.split("").map(
		(char, index): JSX.Element => (
			<span
				// TODO: Consider using a unique identifier for each letter instead of index for keys in production code
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				key={index}
				className="flex h-10 w-10 items-center justify-center border-b border-b-[#F9F4DA] bg-[#323232] font-bold text-[#F9F4DA] text-lg uppercase"
			>
				{guessedLetters.includes(char) ? char : ""}
			</span>
		),
	);

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

	function renderGameStatus(): JSX.Element {
		const sectionClass = clsx(
			"flex h-15 w-full max-w-87.5 flex-col items-center justify-center rounded-sm",
			isLastGuessIncorrect
				? "border border-[#323232] border-dashed bg-[#7A5EA7]"
				: !isGameOver
					? ""
					: isGameWon
						? "bg-[#10A95B]"
						: "bg-[#BA2A2A]",
		);

		const paragraphClassName = clsx(
			"font-medium text-[#F9F4DA]",
			isLastGuessIncorrect && "italic",
		);

		return (
			<section className={sectionClass}>
				{isGameOver ? (
					<>
						<h2 className="font-medium text-[#F9F4DA] text-xl">
							{isGameWon ? "You Win!" : "Game over!"}
						</h2>
						<p className={paragraphClassName}>
							{isGameWon
								? "Well done! 🎉"
								: "You lose! Better start learning Assembly 😭"}
						</p>
					</>
				) : isLastGuessIncorrect ? (
					<p className={paragraphClassName}>
						"{getFarewellText(lastGuessedLetter)}"
					</p>
				) : null}
			</section>
		);
	}

	return (
		<main className="flex flex-col items-center gap-9">
			<Header />
			{renderGameStatus()}
			<section className="flex max-w-87.5 flex-wrap justify-center gap-0.5">
				{languageElements}
			</section>
			<section className="flex justify-center gap-0.5">
				{letterElements}
			</section>
			<section className="flex max-w-120 flex-wrap justify-center gap-2">
				{keyboardElement}
			</section>
			{isGameOver && (
				<button
					type="button"
					className="w-56.25 rounded-sm border border-[#D7D7D7] bg-[#11B5E5] py-2 font-semibold text-[#1E1E1E]"
				>
					New Game
				</button>
			)}
		</main>
	);
}

export default App;
