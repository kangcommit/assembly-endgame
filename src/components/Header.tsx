import type { JSX } from "react";

function Header(): JSX.Element {
	return (
		<header className="mt-18 flex flex-col items-center gap-1">
			<h1 className="font-medium text-[#F9F4DA] text-xl">Assembly: Endgame</h1>
			<p className="max-w-87.5 text-center font-medium text-[#8E8E8E] text-sm">
				Guess the word in under 8 attempts to keep the programming world safe
				from Assembly!
			</p>
		</header>
	);
}

export default Header;
