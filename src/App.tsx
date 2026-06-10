import clsx from "clsx";
import React, { type JSX } from "react";
import Header from "./Header";
import { languages } from "./languages";

function App(): JSX.Element {
	const [currentWord, setCurrentWord] = React.useState<string>("react");

	const [guessedLetters, setGuessedLetters] = React.useState<string[]>([]);
	console.log(guessedLetters);
	const alphabet = "abcdefghijklmnopqrstuvwxyz";

	function addGuessedLetter(letter: string): void {
		setGuessedLetters((prevLetters) =>
			prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter],
		);
	}

	const languageElements = languages.map((language): JSX.Element => {
		const styles = {
			backgroundColor: language.backgroundColor,
			color: language.color,
		};
		return (
			<span
				key={language.name}
				style={styles}
				className="rounded-sm p-1 font-bold text-xs"
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
				onClick={() => addGuessedLetter(letter)}
				className={clsx(
					"flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm border border-[#D7D7D7] font-semibold text-[#1E1E1E] uppercase",
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

	return (
		<main className="flex flex-col items-center gap-9">
			<Header />
			<section className="mt-5 flex w-full max-w-87.5 flex-col items-center rounded-sm bg-[#10A95B] py-1.5">
				<h2 className="font-medium text-[#F9F4DA] text-xl">You Win!</h2>
				<p className="font-medium text-[#F9F4DA]">Well done! 🎉</p>
			</section>
			<section className="flex max-w-87.5 flex-wrap justify-center gap-0.5">
				{languageElements}
			</section>
			<section className="flex justify-center gap-0.5">
				{letterElements}
			</section>
			<section className="flex max-w-120 flex-wrap justify-center gap-2">
				{keyboardElement}
			</section>
			<button
				type="button"
				className="w-56.25 rounded-sm border border-[#D7D7D7] bg-[#11B5E5] py-2 font-semibold text-[#1E1E1E]"
			>
				New Game
			</button>
		</main>
	);
}

export default App;
