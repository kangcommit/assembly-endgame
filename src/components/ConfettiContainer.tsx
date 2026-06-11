import type { JSX } from "react";
import ReactConfetti from "react-confetti";

function ConfettiContainer({
	isGameWon,
}: {
	isGameWon: boolean;
}): JSX.Element | null {
	return isGameWon ? (
		<ReactConfetti recycle={false} numberOfPieces={1000} />
	) : null;
}

export default ConfettiContainer;
