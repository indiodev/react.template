import 'styled-components';
import type { Theme } from '~/models/Theme';

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
