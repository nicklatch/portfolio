import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="min-w-full min-h-screen mx-auto px-5 bg-gradient-to-b from-black via-dark_blue/50 to-purple bg-cover">
      <App />
    </div>
  </React.StrictMode>
);
