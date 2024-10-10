import { createRoot } from "react-dom/client";
import App from "./app";
import "./globals.css";
import { Suspense } from "react";

createRoot(document.querySelector("#root")!).render(
  <Suspense>
    <App />
  </Suspense>
);
