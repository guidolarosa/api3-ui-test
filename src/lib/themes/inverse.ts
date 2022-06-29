// example theme with variants
const white = [
  "hsla(250, 100%, 100%, 0)",
  "hsla(250, 100%, 100%, 0.1)",
  "hsla(250, 100%, 100%, 0.2)",
  "hsla(250, 100%, 100%, 0.3)",
  "hsla(250, 100%, 100%, 0.4)",
  "hsla(250, 100%, 100%, 0.5)",
  "hsla(250, 100%, 100%, 0.6)",
  "hsla(250, 100%, 100%, 0.7)",
  "hsla(250, 100%, 100%, 0.8)",
  "hsla(250, 100%, 100%, 0.9)",
  "hsla(250, 100%, 100%, 1)",
];

const black = [
  "hsla(250, 0%, 0%, 0)",
  "hsla(250, 0%, 0%, 0.1)",
  "hsla(250, 0%, 0%, 0.2)",
  "hsla(250, 0%, 0%, 0.3)",
  "hsla(250, 0%, 0%, 0.4)",
  "hsla(250, 0%, 0%, 0.5)",
  "hsla(250, 0%, 0%, 0.6)",
  "hsla(250, 0%, 0%, 0.7)",
  "hsla(250, 0%, 0%, 0.8)",
  "hsla(250, 0%, 0%, 0.9)",
  "hsla(250, 0%, 0%, 1)",
];

export default {
  colors: {
    background: "white",
    primary: "#7CE3CB",
    esmerald: "#7CE3CB",
    text: black,
    white: white,
    black: black,
  },
  fontSizes: [
    "0.8rem",
    "0.9rem",
    "1.125rem",
    "1.68rem",
    "1.5rem",
    "2rem",
    "2.2rem",
    "5.68rem",
  ],
  shadows: {
    card: "0 0 4px rgba(0, 0, 0, 0.125)",
  },
  gradients: {
    primary: "linear-gradient(90deg, #7CE3CB -0.15%, #7963B2 83.01%)",
    backgroundGradient: "none",
  },
  variants: {
    card: {
      p: 2,
      bg: "blue",
      boxShadow: "card",
      borderRadius: 100,
    },
    badge: {
      display: "inline-block",
      p: 1,
      color: "white",
      bg: "primary",
      borderRadius: 2,
    },
    ["hidden-bullets"]: {
      listStyle: "none",
    },
    ["default-logo"]: {
      filter: "invert(0.8)",
    },
  },
  layouts: {
    expanded: {
      width: ["68.75rem"],
      mx: "auto",
    },
    main: {
      width: ["60.875rem"],
      mx: "auto",
    },
  },
  buttons: {
    primary: {
      bg: "dodgerblue",
      color: "black",
      p: 2,
    },
  },
  text: {
    medium: {
      fontSize: "1.125rem",
      lineHeight: "1.8rem",
    },
    esmerald: {
      color: "#7CE3CB",
    },
  },
};
