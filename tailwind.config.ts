import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#112C36", mist: "#F5F7F5", tide: "#0C6B7D", sea: "#DDF1EE", sage: "#6F948A" },
      boxShadow: { float: "0 24px 70px -25px rgba(15, 54, 62, .25)" },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        serif: ["var(--font-instrument)", "serif"],
      },
    },
  },
  plugins: [],
};
