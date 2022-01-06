import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GlobalContextAPIProvider from "./state-management/globalContext";


ReactDOM.render(
  <GlobalContextAPIProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GlobalContextAPIProvider>,
  document.getElementById("root")
);
