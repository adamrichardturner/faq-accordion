import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
      },
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
      boxShadow: {
        containerShadow: "0px 32px 56px 0px rgba(80, 0, 118, 0.10)",
      },
    },
  },
  plugins: [],
}
export default config
