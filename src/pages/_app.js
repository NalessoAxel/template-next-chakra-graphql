import { ChakraProvider } from '@chakra-ui/react';

import PropTypes from 'prop-types';

import LocomotiveScroll from '_comps/LocomotiveScroll';

import theme from '_comps/Theme';

import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<LocomotiveScroll>
				<Component {...pageProps} />
			</LocomotiveScroll>
		</ChakraProvider>
	);
}

App.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};
