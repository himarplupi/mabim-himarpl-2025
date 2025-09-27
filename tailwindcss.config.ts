import { type Config } from "tailwindcss";
import * as defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...defaultTheme.default.fontFamily.sans],
        montserrat: ["var(--font-montserrat)", ...defaultTheme.default.fontFamily.sans],
        ethno: ["var(--font-e)", ...defaultTheme.default.fontFamily.serif],
        ethnoItalic: ["var(--font-i)", ...defaultTheme.default.fontFamily.serif],
        jumbo: ["var(--font-j)", ...defaultTheme.default.fontFamily.serif],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: { DEFAULT: "#010030" },
        secondary: { DEFAULT: "#072359" },
        accent: { DEFAULT: "#8166E3" },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar-hide"),
  ],
} satisfies Config;
