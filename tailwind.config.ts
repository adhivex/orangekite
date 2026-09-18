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
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "7px",
        md: "10px",
        lg: "14px",
      },
      letterSpacing: {
        // Geist is already a fairly tight neo-grotesk, so large headings only
        // need a slight negative track — -0.04em made glyphs collide at 60px.
        tight: "-0.02em",
        tighter: "-0.03em",
      },
      maxWidth: {
        content: "1200px",
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(232,232,230,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(232,232,230,0.05) 1px, transparent 1px)",
        // Scrim for sections sitting over the night-scene artwork. Opaque at the
        // top edge to blend the seam into the page — kept short so the birds
        // near the top of the artwork stay visible — then held around
        // 0.45–0.55 across the middle so the illustration reads clearly.
        "section-scrim":
          "linear-gradient(to bottom, #0b0c0e 0%, rgba(11,12,14,0.5) 6%, rgba(11,12,14,0.45) 50%, rgba(11,12,14,0.55) 85%, rgba(11,12,14,0.9) 100%)",
        // Hero artwork sits behind centred text: a soft radial pool darkens the
        // middle so the headline stays legible, while the vertical pass keeps
        // the lantern-lit edges visible and lands on the page colour at the
        // bottom so the section blends into what follows.
        "hero-scrim":
          "radial-gradient(ellipse 48% 34% at 50% 30%, rgba(11,12,14,0.55) 0%, rgba(11,12,14,0.18) 70%, rgba(11,12,14,0) 100%), linear-gradient(to bottom, rgba(11,12,14,0.4) 0%, rgba(11,12,14,0.12) 45%, rgba(11,12,14,0.3) 72%, rgba(11,12,14,0.8) 92%, #0b0c0e 100%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
    },
  },
  plugins: [],
};

export default config;
