import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        plex: ['"IBM Plex Mono"', 'monospace'],
        press: ['"Press Start 2P"', 'cursive']
      }
    }
  },
  plugins: []
} satisfies Config