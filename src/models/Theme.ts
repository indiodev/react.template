import { darkTheme } from '~/styles/themes/dark';
import { lightTheme } from '~/styles/themes/light';

export type ThemeType = typeof darkTheme | typeof lightTheme;

export type ThemeKeyType =
	| (typeof darkTheme)[keyof typeof darkTheme]
	| (typeof lightTheme)[keyof typeof lightTheme];
