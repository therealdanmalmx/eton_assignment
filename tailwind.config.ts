import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-image': 'url("https://images.ctfassets.net/371ugtyffwio/35dzFYS2N8lbrwzBEaOlUt/bf06c0a4e94b8aa62f28406ffefd258e/2880x1800_timeless_business_desktop_01.jpg?w=1080&q=85&fm=webp")',
      },
    },

  },
  plugins: [],
};
export default config;
