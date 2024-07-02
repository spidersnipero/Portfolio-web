import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "120": "120px",
        "190": "190px",
        "250": "250px",
      },
      height: {
        "120": "120px",
        "190": "190px",
        "250": "250px",
      },
      padding: {},
    },
  },
  plugins: [],
};
export default config;
