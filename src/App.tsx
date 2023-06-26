import type { ReactElement } from 'react';
import { useState } from 'react';

export function App(): ReactElement {
	const [count, setCount] = useState(0);

	return (
		<section className="bg-[#ffffff] dark:bg-[#242424] h-screen w-screen flex flex-col items-center justify-center text-[#213547] dark:text-[#ffffffde]">
			<h1 className="text-[3.2em]">React.template</h1>
			<p>Base React template on Vite + Tailwind</p>
			<div className="py-4">
				<button
					className="rounded-xl dark:bg-[#1a1a1a] py-[0.6em] px-[1.2em] border border-transparent hover:border-[#646cff] focus:outline-[4px]"
					onClick={(): void => setCount((count) => count + 1)}
				>
					count is {count}
				</button>
			</div>
		</section>
	);
}
