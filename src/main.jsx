import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DataProvider from "./contexts/DataProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);
