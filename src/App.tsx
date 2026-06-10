import type { JSX } from "react";
import Header from "./Header";
import { languages } from "./languages";

function App(): JSX.Element {
	const languageElements = languages.map((language) => {
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

	return (
		<main>
			<Header />
			<section className="mt-5 mb-9 flex flex-col items-center rounded-sm bg-[#10A95B] py-1.5">
				<h2 className="font-medium text-[#F9F4DA] text-xl">You Win!</h2>
				<p className="font-medium text-[#F9F4DA]">Well done! 🎉</p>
			</section>
			<section className="flex max-w-87.5 flex-wrap justify-center gap-0.5">
				{languageElements}
			</section>
		</main>
	);
}

export default App;
