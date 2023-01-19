import { Grid, forwardRef } from '@chakra-ui/react';

const Container = forwardRef((props, ref) => (
	<Grid
		ref={ref}
		templateColumns="[full-start] minmax(calc(calc(100% - 1440px) / 2), 1fr) [main-start] repeat(24, [col-start] 1fr) [main-end] minmax(calc(calc(100% - 1440px) / 2), 1fr) [full-end]"
		// eslint-disable-next-line react/jsx-props-no-spreading
		{...props}
	>
		{props.children}
	</Grid>
));

export default Container;
