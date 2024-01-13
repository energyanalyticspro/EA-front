import type { Config } from 'tailwindcss'
const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
				primary: ['Roboto', ...fontFamily.sans],
        sans: ['var(--font-roboto)'],

			},
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
export default config
