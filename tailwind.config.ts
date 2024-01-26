import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          palePurple: "#8B6990",
          lightPurple: "#F8EEFF",
          darkPurple: "#301534",
        },
        secondary: {
          lightPink: "#F8EEFF",
          white: "#FFFFFF",
          pink: "#AD28EB",
        },
      },
    },
  },
  plugins: [],
}
export default config
