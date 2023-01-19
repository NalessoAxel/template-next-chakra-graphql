import { GridItem, forwardRef } from '@chakra-ui/react';

const Col = forwardRef((props, ref) => (
	// eslint-disable-next-line react/jsx-props-no-spreading

	<GridItem ref={ref} colStart={2} colEnd={[26, null, null, 26, null, null]} {...props}>
		{props.children}
	</GridItem>
));

export default Col;
