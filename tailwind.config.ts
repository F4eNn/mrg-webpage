import type { Config } from 'tailwindcss';


const config: Config = {
	content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				'metalic': '#9ca3af',
				'lightGrey': '#5a5867',
				'lightBlue': '#bfdbfe'
			}
		},
	},
	plugins: [],
};
export default config;
