import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { GameContextProvider } from "./context/GameContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <GameContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GameContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
