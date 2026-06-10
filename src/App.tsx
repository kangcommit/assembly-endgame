import type { JSX } from "react";
import Header from "./Header";

function App(): JSX.Element {
	return (
		<main>
			<Header />
			<section className="mt-5 mb-9 flex flex-col items-center rounded-sm bg-[#10A95B] py-1.5">
				<h2 className="font-medium text-[#F9F4DA] text-xl">You Win!</h2>
				<p className="font-medium text-[#F9F4DA]">Well done! 🎉</p>
			</section>
		</main>
	);
}

export default App;
