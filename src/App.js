import "./App.css";
import Home from "./pages/Home.js";
import { useGlobalContext } from "./state-management/globalContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { indigo, teal } from "@mui/material/colors";
import { CssBaseline } from '@mui/material';

//^ Define your custom MUI themes here or below the App function
const darkTheme = createTheme({
  palette: {
    mode: "dark", // enable dark mode and let MUI make its automated changes
    primary: indigo,
    secondary: teal,
  },
});
const lightTheme = createTheme({}); // default theme untouched

export default function App() {
  // Decide what theme to use based on the theme variable string value
  let selectedTheme;
  const { theme } = useGlobalContext();
  if (theme === "light") selectedTheme = lightTheme;
  if (theme === "dark") selectedTheme = darkTheme;
  return (
    <ThemeProvider theme={selectedTheme}>
      <BrowserRouter>
        <CssBaseline> {/* MUST INCLUDE for dark theme to work */}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </CssBaseline>
      </BrowserRouter>
    </ThemeProvider>
  );
}
