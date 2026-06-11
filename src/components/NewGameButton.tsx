import type { JSX } from "react";

type NewGameButtonProps = {
	isGameOver: boolean;
	startNewGame: () => void;
};

function NewGameButton({
	isGameOver,
	startNewGame,
}: NewGameButtonProps): JSX.Element | null {
	return isGameOver ? (
		<button
			type="button"
			onClick={startNewGame}
			className="w-56.25 cursor-pointer rounded-sm border border-[#D7D7D7] bg-[#11B5E5] py-2 font-semibold text-[#1E1E1E]"
		>
			New Game
		</button>
	) : null;
}

export default NewGameButton;
