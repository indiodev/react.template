import { useState } from 'react';
import { ThemeProvider, styled } from 'styled-components';
import { useTheme } from './hooks/theme';
import { GlobalStyle } from './styles/global';

const AppContainer = styled.section`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		font-size: 3.2em;
	}

	button {
		margin-top: 1em;
		border-radius: 8px;
		border: 1px solid transparent;
		padding: 0.6em 1.2em;
		font-size: 1em;
		font-weight: 500;
		font-family: inherit;
		background-color: ${({ theme }) => theme['bg-button']};
		cursor: pointer;
		transition: border-color 0.25s;
		color: ${({ theme }) => theme['text-color']};
	}

	button:hover {
		border-color: ${({ theme }) => theme['purple']};
	}

	button:focus,
	button:focus-visible {
		outline: 4px auto -webkit-focus-ring-color;
	}
`;

export function App() {
	const [count, setCount] = useState(0);

	const { theme } = useTheme();

	return (
		<ThemeProvider theme={theme}>
			<AppContainer>
				<h1>React.template</h1>
				<p>Base React template on Vite + Styled-components</p>
				<div>
					<button onClick={() => setCount((count) => count + 1)}>
						count is {count}
					</button>
				</div>
			</AppContainer>
			<GlobalStyle />
		</ThemeProvider>
	);
}
