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
      process.env.WORDPRESS_API_URL.match(/(http(?:s)?:\/\/)(.*)/)[2], // Valid WP Image domain.
      "2.gravatar.com",
      "0.gravatar.com",
      "secure.gravatar.com",
    ],
  },
};
