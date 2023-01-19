const path = require('path');

module.exports = {
	presets: ['next/babel'],
	plugins: [
		[
			'babel-plugin-module-resolver',
			{
				root: ['./src'],
				alias: {
					_contexts: path.resolve(__dirname, './src/contexts'),
					_comps: path.resolve(__dirname, '/src/components'),
					_lib: path.resolve(__dirname, './src/lib'),
					_utils: path.resolve(__dirname, './src/components/Utils'),
					_config: path.resolve(__dirname, './src/config'),
					_hooks: path.resolve(__dirname, './src/hooks'),
				},
			},
		],
	],
};
