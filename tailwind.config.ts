import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {extend: {
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      accent: 'var(--color-accent)',
      neutral: 'var(--color-neutral)',
      background: 'var(--color-background)',
      text: 'var(--color-text)',
    }
  }},
  plugins: [],
};
export default config;
