/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        ping: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
        bounce: "bounce 1s infinite",
        loading: "loading 2s ease-in-out infinite",
        gradientLoad: "gradientLoad 2s ease-in-out infinite",
      },
      keyframes: {
        ping: {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        loading: {
          "0%": {
            width: "0%",
          },
          "50%": {
            width: "100%",
          },
          "100%": {
            width: "0%",
          },
        },
        gradientLoad: {
          "0%": {
            width: "0%",
            backgroundPosition: "0% 50%",
          },
          "50%": {
            width: "70%",
            backgroundPosition: "100% 50%",
          },
          "100%": {
            width: "100%",
            backgroundPosition: "0% 50%",
          },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".animation-delay-150": {
          "animation-delay": "150ms",
        },
        ".animation-delay-300": {
          "animation-delay": "300ms",
        },
        ".animation-delay-500": {
          "animation-delay": "500ms",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
