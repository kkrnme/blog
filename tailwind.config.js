const plugin = require("tailwindcss/plugin");

/**@type import("gatsby").GatsbyConfig */
module.exports = {
  purge: [],
  theme: {
    screens: {
      sm: "560px",
      md: "768px",
      lg: "960px",
      xl: "1024px",
    },
    extend: {
      lineHeight: {
        relaxed: "1.75",
      },
      transitionProperty: {
        "text-decoration": "text-decoration",
      },
      height: {
        "min-content": "min-content",
      },
      width: {
        "min-content": "min-content",
      },
      minWidth: {
        "0": "0",
      },
      colors: {
        foreground: "var(--foreground)",
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        border: "var(--border)",
      },
    },
  },
  variants: {},
  plugins: [],
};
