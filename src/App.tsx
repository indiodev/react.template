import { Fragment, useState } from 'react';

export function App() {
	const [count, setCount] = useState(0);

	return (
		<Fragment>
			<h1>React.template</h1>

			<p>Base default on React + Vite</p>

			<button
				onClick={() => setCount((count) => count + 1)}
				style={{ marginTop: '1em' }}
			>
				count is {count}
			</button>
		</Fragment>
	);
}
