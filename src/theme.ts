import { PaletteMode, createTheme } from "@mui/material";

const getDesignTokens = (mode: PaletteMode) => ({
  typography: {
    fontFamily: "Open Sans",
  },
  breakpoints: {
    values: {
      xl: 600,
      lg: 500,
      md: 370,
      sm: 320,
      xs: 0,
    },
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          background: {
            default: "#fff",
          },
          text: {
            primary: "#717074",
            secondary: "#B5B5B5",
          },
          primary: {
            main: "#029787",
          },
          action: {
            hover: "#DCDCDC",
          },
        }
      : {
          background: {
            default: "#283637",
          },
          text: {
            primary: "#C3CED0",
            secondary: "#525E60",
          },
          primary: {
            main: "#029787",
          },
          action: {
            hover: "#6D817E",
          },
        }),
  },
});

const configureTheme = (mode: PaletteMode) => {
  return createTheme(getDesignTokens(mode));
};

export { configureTheme };
