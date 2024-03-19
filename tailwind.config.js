/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      animation: {
        spin: "spin 1s linear infinite"
      }
    }
  },
  plugins: []
};
