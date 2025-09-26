import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Original design system colors
        green: {
          100: "var(--color-green-100)",
          600: "var(--color-green-600)",
        },
        blue: {
          100: "var(--color-blue-100)",
          400: "var(--color-blue-400)",
          500: "var(--color-blue-500)",
          600: "var(--color-blue-600)",
          700: "var(--color-blue-700)",
          800: "var(--color-blue-800)",
          900: "var(--color-blue-900)",
        },
        purple: {
          100: "var(--color-purple-100)",
          400: "var(--color-purple-400)",
          500: "var(--color-purple-500)",
          600: "var(--color-purple-600)",
          700: "var(--color-purple-700)",
          800: "var(--color-purple-800)",
          900: "var(--color-purple-900)",
        },
        indigo: {
          800: "var(--color-indigo-800)",
          900: "var(--color-indigo-900)",
        },
        cyan: {
          400: "var(--color-cyan-400)",
          500: "var(--color-cyan-500)",
        },
        gray: {
          50: "var(--color-gray-50)",
          100: "var(--color-gray-100)",
          200: "var(--color-gray-200)",
          300: "var(--color-gray-300)",
          500: "var(--color-gray-500)",
          600: "var(--color-gray-600)",
          700: "var(--color-gray-700)",
          800: "var(--color-gray-800)",
        },
        white: "var(--color-white)",

        // Component colors
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        border: "var(--border)",
        input: {
          DEFAULT: "var(--input)",
          background: "var(--input-background)",
        },
      },
      spacing: {
        "0.5": "calc(var(--spacing) * 0.5)",
        "1": "calc(var(--spacing) * 1)",
        "1.5": "calc(var(--spacing) * 1.5)",
        "2": "calc(var(--spacing) * 2)",
        "3": "calc(var(--spacing) * 3)",
        "4": "calc(var(--spacing) * 4)",
        "6": "calc(var(--spacing) * 6)",
        "8": "calc(var(--spacing) * 8)",
        "12": "calc(var(--spacing) * 12)",
        "16": "calc(var(--spacing) * 16)",
        "20": "calc(var(--spacing) * 20)",
      },
      fontSize: {
        xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        base: "var(--text-base)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        "2xl": "var(--text-2xl)",
        "3xl": "var(--text-3xl)",
        "4xl": "var(--text-4xl)",
        "5xl": "var(--text-5xl)",
        "6xl": "var(--text-6xl)",
      },
      fontWeight: {
        normal: "var(--font-weight-normal)",
        medium: "var(--font-weight-medium)",
      },
      maxWidth: {
        md: "var(--container-md)",
        "4xl": "var(--container-4xl)",
        "7xl": "var(--container-7xl)",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
export default config;