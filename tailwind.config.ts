import type { Config } from 'tailwindcss';

const config: Config = {
   content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
   theme: {
      extend: {
         colors: {
            metalic: '#9ca3af',
            lightGrey: '#5a5867',
            lightBlue: '#bfdbfe',
            yellow: '#facc13',
            white: '#f8f8f8',
            lightblack: '#141414',
         },
         screens: {
            phones: '375px',
         },
         fontSize: {
            xxs: '0.625rem',
         },
      },
   },
   plugins: [],
};
export default config;
