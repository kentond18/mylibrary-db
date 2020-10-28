module.exports = {
	purge: [
		"src/**/*.js",
		"src/**/*.jsx",
		"src/**/*.ts",
		"src/**/*.tsx",
		"public/**/*.html",
	],
	theme: {
		extend: {},
		screens: {
			sm: "576px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "992px",
			// => @media (min-width: 1024px) { ... }

			xl: "1200px",
			// => @media (min-width: 1280px) { ... }
		},
	},
	variants: {},
	plugins: [],
};
