import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import RecipyContext from "./context/RecipyContext.jsx";

createRoot(document.getElementById("root")).render(
  <RecipyContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecipyContext>,
);
