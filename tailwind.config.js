// tailwind.config.js
module.exports = {
	content: [
		"./assets/css/src/main.css",
		"./*.html"
	],
	theme: {
		extend: {
			fontFamily: {
				'open-sans': ["'Open Sans'", 'sans-serif'],
				'press-start': ["'Press Start 2P'", 'sans-serif']
			},
			colors: {
				'purple-darker': '#0b021a',
				'purple-dark': '#19063a',
				'purple-medium': '#27226d',
				'purple-light': '#36308d',
				'purple-lighter': '#5e53ff',
				'blue-dark': '#002042',
				'green-light': '#aff12d',
				'green-medium': '#97d816',
				'green-dark': '#699513',
				'wine': '#423756'
			},
			zIndex: {
				'1': '1',
				'2': '2',
				'3': '3',
				'4': '4',
				'5': '5',
				'6': '6',
				'7': '7',
				'8': '8',
				'9': '9',
			},
		}
	},
	variants: {
		extend: {},
	},
	plugins: [],
}