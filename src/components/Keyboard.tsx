import clsx from "clsx";
import type { JSX } from "react";

type KeyboardProps = {
	guessedLetters: string[];
	currentWord: string;
	isGameOver: boolean;
	addGuessedLetter: (letter: string) => void;
};

function Keyboard({
	guessedLetters,
	currentWord,
	isGameOver,
	addGuessedLetter,
}: KeyboardProps): JSX.Element {
	const alphabet: string = "abcdefghijklmnopqrstuvwxyz";

	const keyboardElement: JSX.Element[] = alphabet
		.split("")
		.map((letter): JSX.Element => {
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

	return (
		<section className="flex max-w-120 flex-wrap justify-center gap-2">
			{keyboardElement}
		</section>
	);
}

export default Keyboard;
