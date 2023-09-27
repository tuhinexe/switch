import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      
      colors:{
        'bgPrimary': '#0a1024',
        'primary': '#5442fc',
      },
      fontFamily:{
        'body': ['var(--font-poppins)'],
        'head': ['var(--font-play)'],
      }
    },
  },
  plugins: [],
}
export default config
