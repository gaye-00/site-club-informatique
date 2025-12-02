/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Couleurs principales - Vert universitaire
        primary: {
          50: "rgb(var(--color-primary-50) / <alpha-value>)",
          100: "rgb(var(--color-primary-100) / <alpha-value>)",
          200: "rgb(var(--color-primary-200) / <alpha-value>)",
          300: "rgb(var(--color-primary-300) / <alpha-value>)",
          400: "rgb(var(--color-primary-400) / <alpha-value>)",
          500: "rgb(var(--color-primary-500) / <alpha-value>)",
          600: "rgb(var(--color-primary-600) / <alpha-value>)",
          700: "rgb(var(--color-primary-700) / <alpha-value>)",
          800: "rgb(var(--color-primary-800) / <alpha-value>)",
          900: "rgb(var(--color-primary-900) / <alpha-value>)",
        },
        // Couleurs d'accent - Vert émeraude
        accent: {
          50: "rgb(var(--color-accent-50) / <alpha-value>)",
          100: "rgb(var(--color-accent-100) / <alpha-value>)",
          200: "rgb(var(--color-accent-200) / <alpha-value>)",
          300: "rgb(var(--color-accent-300) / <alpha-value>)",
          400: "rgb(var(--color-accent-400) / <alpha-value>)",
          500: "rgb(var(--color-accent-500) / <alpha-value>)",
          600: "rgb(var(--color-accent-600) / <alpha-value>)",
          700: "rgb(var(--color-accent-700) / <alpha-value>)",
          800: "rgb(var(--color-accent-800) / <alpha-value>)",
          900: "rgb(var(--color-accent-900) / <alpha-value>)",
        },
        // Couleurs neutres
        neutral: {
          50: "rgb(var(--color-neutral-50) / <alpha-value>)",
          100: "rgb(var(--color-neutral-100) / <alpha-value>)",
          200: "rgb(var(--color-neutral-200) / <alpha-value>)",
          300: "rgb(var(--color-neutral-300) / <alpha-value>)",
          400: "rgb(var(--color-neutral-400) / <alpha-value>)",
          500: "rgb(var(--color-neutral-500) / <alpha-value>)",
          600: "rgb(var(--color-neutral-600) / <alpha-value>)",
          700: "rgb(var(--color-neutral-700) / <alpha-value>)",
          800: "rgb(var(--color-neutral-800) / <alpha-value>)",
          900: "rgb(var(--color-neutral-900) / <alpha-value>)",
        },
        // Couleurs sombres - Bleu foncé
        dark: {
          50: "rgb(var(--color-dark-50) / <alpha-value>)",
          100: "rgb(var(--color-dark-100) / <alpha-value>)",
          200: "rgb(var(--color-dark-200) / <alpha-value>)",
          300: "rgb(var(--color-dark-300) / <alpha-value>)",
          400: "rgb(var(--color-dark-400) / <alpha-value>)",
          500: "rgb(var(--color-dark-500) / <alpha-value>)",
          600: "rgb(var(--color-dark-600) / <alpha-value>)",
          700: "rgb(var(--color-dark-700) / <alpha-value>)",
          800: "rgb(var(--color-dark-800) / <alpha-value>)",
          900: "rgb(var(--color-dark-900) / <alpha-value>)",
        },
        // Couleurs de statut
        success: "rgb(var(--color-success) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",
        info: "rgb(var(--color-info) / <alpha-value>)",
        // Couleurs de texte
        text: {
          primary: "rgb(var(--text-primary) / <alpha-value>)",
          secondary: "rgb(var(--text-secondary) / <alpha-value>)",
          tertiary: "rgb(var(--text-tertiary) / <alpha-value>)",
          inverse: "rgb(var(--text-inverse) / <alpha-value>)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-green":
          "linear-gradient(135deg, rgb(var(--color-primary-400)) 0%, rgb(var(--color-accent-500)) 100%)",
        "gradient-dark":
          "linear-gradient(135deg, rgb(var(--color-dark-700)) 0%, rgb(var(--color-dark-900)) 100%)",
        "gradient-mixed":
          "linear-gradient(135deg, rgb(var(--color-primary-500)) 0%, rgb(var(--color-dark-600)) 100%)",
      },
      boxShadow: {
        green: "0 10px 40px -10px rgb(var(--color-primary-400) / 0.3)",
        "green-lg": "0 20px 60px -15px rgb(var(--color-primary-400) / 0.4)",
        dark: "0 10px 40px -10px rgb(var(--color-dark-600) / 0.3)",
        "dark-lg": "0 20px 60px -15px rgb(var(--color-dark-600) / 0.4)",
        accent: "0 10px 40px -10px rgb(var(--color-accent-400) / 0.3)",
      },
      animation: {
        "pulse-green": "pulse-green 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 3s ease-in-out infinite",
        "slide-up": "slide-up 0.5s ease-out",
        "slide-down": "slide-down 0.5s ease-out",
      },
      keyframes: {
        "pulse-green": {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.7",
            boxShadow: "0 0 0 10px rgb(var(--color-primary-400) / 0.1)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "slide-up": {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "slide-down": {
          "0%": {
            transform: "translateY(-20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
