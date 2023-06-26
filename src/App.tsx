import { Fragment, useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<Fragment>
			<h1>React.template</h1>
			<p>Base default on React + Vite</p>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div>
		</Fragment>
	);
}

export default App;
