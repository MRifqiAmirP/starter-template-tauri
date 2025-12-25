import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { syncTheme } from "@/lib/theme"

syncTheme()

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", syncTheme)

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
