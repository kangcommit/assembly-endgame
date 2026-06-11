import clsx from "clsx";
import type { JSX } from "react";

type WordLetterProps = {
	currentWord: string;
	guessedLetters: string[];
	isGameLost: boolean;
};
function WordLetter({
	currentWord,
	guessedLetters,
	isGameLost,
}: WordLetterProps): JSX.Element {
	const letterElements: JSX.Element[] = currentWord
		.split("")
		.map((char: string, index: number): JSX.Element => {
			const isGuessed: boolean = guessedLetters.includes(char);
			const shouldRevealLetter: boolean = isGameLost || isGuessed;

			return (
				<span
					// TODO: Consider using a unique identifier for each letter instead of index for keys in production code
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={`${char}-${index}`}
					className={clsx(
						"flex h-10 w-10 items-center justify-center border-b border-b-[#F9F4DA] bg-[#323232] font-bold text-lg uppercase",
						!isGuessed ? "text-[#EC5D49]" : "text-[#F9F4DA]",
					)}
				>
					{shouldRevealLetter ? char : ""}
				</span>
			);
		});

	return (
		<section className="flex justify-center gap-0.5">{letterElements}</section>
	);
}

export default WordLetter;
