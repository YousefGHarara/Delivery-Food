import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import FoodContextProvider from "./Context/FoodContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FoodContextProvider>
        <App />
      </FoodContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
