import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1f2d2b",
        muted: "#65706d",
        line: "#dbe6e1",
        mint: "#dff4e8",
        "mint-strong": "#5fbf9a",
        coral: "#ff7b68",
        cream: "#fffaf1",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(31, 45, 43, 0.12)",
        coral: "0 14px 28px rgba(255, 123, 104, 0.28)",
      },
      fontFamily: {
        sans: ['"Microsoft YaHei"', '"PingFang SC"', "Arial", "sans-serif"],
      },
      keyframes: {
        heroCarousel: {
          "0%, 30%": { opacity: "1", transform: "scale(1)" },
          "36%, 94%": { opacity: "0", transform: "scale(1.03)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        heroCarousel: "heroCarousel 18s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
