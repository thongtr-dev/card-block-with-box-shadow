// This comes from https://github.com/WordPress/gutenberg/blob/trunk/packages/scripts/config/webpack.config.js
const defaultConfig = require("@wordpress/scripts/config/webpack.config");

// Modified config
module.exports = {
	// Since whatever object we export from this file will *replace* the default config, we need to
	// make sure to constantly pull in the default values from WordPress's config file
	...defaultConfig,

	// Point to your main file, wherever it is, which should now be TS
	entry: `./src/index.tsx`,

	// We need to add a new rule to process `.ts` and `.tsx` files with `ts-loader
	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,
			{
				// Notice that this regex matches both `.ts` and `.tsx`
				test: /\.tsx?$/,
				use: [
					{
						loader: "ts-loader",
						options: {
							// You can specify any custom config
							configFile: "tsconfig.json",

							// See note under "issues" for details
							// Speeds up by skipping type-checking. You can still use TSC for that.
							transpileOnly: true,
						},
					},
				],
			},
		],
	},
	// This merges the extensions setting with whatever WP has in their config, but also adds TS
	// extensions, and puts them first, to indicate preferred resolving over .js files
	// @see https://webpack.js.org/configuration/resolve/
	resolve: {
		extensions: [
			".ts",
			".tsx",
			...(defaultConfig.resolve
				? defaultConfig.resolve.extensions || [".js", ".jsx"]
				: []),
		],
	},
};
