import clsx from "clsx";
import type { JSX } from "react";
import { type Language, languages } from "../languages";

function LanguageChips({
	wrongGuessCount,
}: {
	wrongGuessCount: number;
}): JSX.Element {
	const languageElements: JSX.Element[] = languages.map(
		(language: Language, index: number): JSX.Element => {
			const isLanguageLost: boolean = index < wrongGuessCount;

			const styles: Omit<Language, "name"> = {
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
		},
	);

	return (
		<section className="flex max-w-87.5 flex-wrap justify-center gap-0.5">
			{languageElements}
		</section>
	);
}

export default LanguageChips;
