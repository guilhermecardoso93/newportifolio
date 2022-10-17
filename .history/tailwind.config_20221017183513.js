/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
  images: {
    domains: [
      "localhost",
      "2.gravatar.com",
      "0.gravatar.com",
      "secure.gravatar.com",
    ],
  },
};
