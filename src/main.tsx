import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "./index.css";
import DarkMode from "@utils/DarkMode";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DarkMode />
    <RouterProvider router={router} />
  </React.StrictMode>
);
