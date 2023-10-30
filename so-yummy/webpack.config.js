module.exports = {
	entry: "./src/index.js",
	resolve: {
		fallback: {
			os: require.resolve("os-browserify/browser"),
			crypto: false,
			jwa: require.resolve("jwa"),
		},
	},
};
