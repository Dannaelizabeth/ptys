import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'yellow':'#ffba08',
        'red-oscu':'#9d0208',
        'oscu':'#03071e'
      }
    },
  },
  plugins: [],
}
export default config
