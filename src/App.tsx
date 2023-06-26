import { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);

	return (
		<section className="dark:bg-zinc-900 h-screen w-screen flex flex-col items-center justify-center text-zinc-900 dark:text-zinc-100">
			<h1 className="text-[3.2em]">React.template</h1>
			<p>Base default on React + Vite</p>
			<div className="py-4">
				<button
					className="rounded-xl bg-[#1a1a1a] text-zinc-100 dark:text-[#1a1a1a] dark:bg-zinc-100 py-[0.6em] px-[1.2em] border border-transparent dark:hover:border-[#646cff]"
					onClick={() => setCount((count) => count + 1)}
				>
					count is {count}
				</button>
			</div>
		</section>
	);
}

export default App;
