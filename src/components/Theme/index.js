import { extendTheme } from '@chakra-ui/react';

// ? https://chakra-ui.com/docs/theming/theme#typography
const fonts = {};

// ? https://chakra-ui.com/docs/theming/theme#breakpoints
const breakpoints = ['576px', '768px', '992px', '1200px', '1440px'];
breakpoints.base = '0px';
breakpoints.sm = '576px';
breakpoints.md = '768px';
breakpoints.lg = '992px';
breakpoints.xl = '1200px';
breakpoints.xxl = '1440px';

// ? https://chakra-ui.com/docs/theming/theme#colors
const colors = {
	black: '#000',
	white: '#fff',
};

// ? https://chakra-ui.com/docs/theming/theme#spacing
const space = {};

// ? https://chakra-ui.com/docs/features/color-mode
const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

// ? I need to expose my variables to JS as well so I’m creating an object for it

const theme = extendTheme({
	fonts,
	breakpoints,
	colors,
	space,
	config,
	styles: {
		global: (props) => ({
			body: {
				position: 'static',
			},
			'.c-scrollbar': {
				display: 'block',
			},
			'.c-scrollbar_thumb': {
				width: '3px',
				borderRadius: 'none',
				opacity: 1,
			},
		}),
	},
	components: {},
});

export default theme;

// ? https://chakra-ui.com/docs/theming/customize-theme
