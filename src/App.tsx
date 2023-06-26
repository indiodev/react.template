import { useState } from 'react';

export function App() {
	const [count, setCount] = useState(0);

	return (
		<section className="bg-[#ffffff] dark:bg-[#242424] h-screen w-screen flex flex-col items-center justify-center text-zinc-900 dark:text-zinc-100">
			<h1 className="text-[3.2em]">React.template</h1>
			<p>Base React template on Vite + Tailwind</p>
			<div className="py-4">
				<button
					className="rounded-xl bg-[#f9f9f9]  dark:bg-zinc-100 py-[0.6em] px-[1.2em] border border-transparent"
					onClick={() => setCount((count) => count + 1)}
				>
					count is {count}
				</button>
			</div>
		</section>
	);
}
