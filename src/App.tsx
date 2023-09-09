import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { configureTheme } from "./theme";
import { Layout } from "./components/Layout";
import { useAppSelector } from "./hooks";

function App() {
  const themeMode = useAppSelector((store) => store.theme.value);

  const theme = configureTheme(themeMode);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout />
      </ThemeProvider>
    </div>
  );
}

export default App;
