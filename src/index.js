import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalContextAPIProvider from "./state-management/globalContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";

//^ Define your custom MUI themes here
const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: '#FF0000',
  //   },
  // },
});

ReactDOM.render(
  <GlobalContextAPIProvider>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </ThemeProvider>
  </GlobalContextAPIProvider>,
  document.getElementById("root")
);
