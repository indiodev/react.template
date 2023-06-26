import { useEffect, useState } from 'react';

import type { Theme } from '~/models/Theme';
import { darkTheme } from '~/styles/themes/dark';
import { lightTheme } from '~/styles/themes/light';

interface UseTheme {
	theme: Theme;
}

export function useTheme(): UseTheme {
	const [isDarkMode, setIsDarkMode] = useState(
		window.matchMedia('(prefers-color-scheme: dark)').matches,
	);

	const theme = isDarkMode ? darkTheme : lightTheme;

	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

		const handleChange = (event: MediaQueryListEvent): void =>
			setIsDarkMode(event.matches);

		mediaQuery.addEventListener('change', handleChange);

		return () => mediaQuery.removeEventListener('change', handleChange);
	}, []);

	return {
		theme,
	};
}
