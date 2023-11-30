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
            'custom-blue-500': '#3b82f6',
            lightblack: '#141414',
         },
         screens: {
            phones: '375px',
         },
         fontSize: {
            xxs: '0.625rem',
            '4xl': ['2.35rem', '2.6rem'],
         },
         gridTemplateColumns: {
            'gallery-lg': 'repeat(auto-fit, minmax(275px, 1fr))',
            'gallery-lg-single-img': 'repeat(auto-fit, minmax(275px, 350px))',
            'gallery-sm': '1fr',
            'slider-lg': '100px  1fr 100px',
         },
      },
   },

   plugins: [],
};
export default config;
