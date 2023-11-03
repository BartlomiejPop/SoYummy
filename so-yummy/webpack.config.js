export default {
	entry: "./src/index.js",
	resolve: {
		fallback: {
			os: require.resolve("os-browserify/browser"),
			crypto: require.resolve("crypto-browserify"),
			jwa: require.resolve("jwa"),
		},
	},
};
