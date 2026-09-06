import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0c0e",
        "bg-elevated": "#151619",
        ink: "#1c1e24",
        fg: "#e8e8e6",
        muted: "#8b8a84",
        border: "rgba(232, 232, 230, 0.1)",
        "border-strong": "rgba(232, 232, 230, 0.16)",
        orange: {
          DEFAULT: "#f4591c",
          dim: "rgba(244, 89, 28, 0.12)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-editorial)", "Georgia", "serif"],
      },
      borderRadius: {
        sm: "7px",
        md: "10px",
        lg: "14px",
      },
      letterSpacing: {
        tight: "-0.02em",
        tighter: "-0.04em",
      },
      maxWidth: {
        content: "1200px",
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(232,232,230,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(232,232,230,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
    },
  },
  plugins: [],
};

export default config;
