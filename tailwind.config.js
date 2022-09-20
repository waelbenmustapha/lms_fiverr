/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "mediamax-1440": { max: "1440px" },
      // => @media (max-width: 1440px) { ... }

      "mediamax-1279": { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      "mediamax-1079": { max: "1079px" },
      // => @media (max-width: 1079px) { ... }

      "mediamax-1023": { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      "mediamax-950": { max: "950px" },
      // => @media (max-width: 950px) { ... }

      "mediamax-900": { max: "900px" },
      // => @media (max-width: 900px) { ... }

      "mediamax-860": { max: "860px" },
      // => @media (max-width: 860px) { ... }

      "mediamax-767": { max: "767px" },
      // => @media (max-width: 767px) { ... }

      "mediamax-650": { max: "650px" },
      // => @media (max-width: 650px) { ... }

      "mediamax-550": { max: "550px" },
      // => @media (max-width: 550px) { ... }

      min767: "767px",
    },
    extend: {
      colors: {
        white: "#ffffff",
        red: "red",
        black: "black",
        "primary-color": "#153c3f",
        green: "#00ec8b",
        blue: "#00c8e1",
      },
      backgroundImage: {
        "login-image": "url('./assets/images/login-image.png')",
        "bg-1": "url('./assets/images/bg.png')",
      },
      boxShadow: {
        "contect-help": "-6px 6px 0px 0px #153c3f",
        "strong-shadow": "3px 3px 0px #153c3f",
        "course-card": "2px 2px 0px #153c3f",
        "register-btn": "0px 4px 64px 8px rgba(0, 200, 225, 0.1)",
        "nav-bar": "0px 2px 16px 8px rgba(21, 60, 63, 0.05)",
        dark: "8px 16px 32px 0px rgba(21, 60, 63, 0.25)",
      },
    },
  },
  plugins: [],
};
