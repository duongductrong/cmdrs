import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "./globals.css";

createRoot(document.querySelector("#root")!).render(
  <Suspense>
    <App />
  </Suspense>
);
