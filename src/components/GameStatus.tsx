import clsx from "clsx";
import type { JSX } from "react";
import { languages } from "../languages";
import { getFarewellText } from "../utils";

type GameStatusProps = {
	isGameWon: boolean;
	isGameOver: boolean;
	isLastGuessIncorrect: boolean | string;
	wrongGuessCount: number;
};

function GameStatus({
	isLastGuessIncorrect,
	isGameOver,
	isGameWon,
	wrongGuessCount,
}: GameStatusProps): JSX.Element {
	const sectionClass: string = clsx(
		"flex h-15 w-full max-w-87.5 flex-col items-center justify-center rounded-sm",
		isLastGuessIncorrect
			? "border border-[#323232] border-dashed bg-[#7A5EA7]"
			: !isGameOver
				? ""
				: isGameWon
					? "bg-[#10A95B]"
					: "bg-[#BA2A2A]",
	);

	const paragraphClassName: string = clsx(
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
					"{getFarewellText(languages[wrongGuessCount - 1].name)}"
				</p>
			) : null}
		</section>
	);
}

export default GameStatus;
