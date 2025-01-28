import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App.tsx";
import { NavigationProvider } from "./context/navigation.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <NavigationProvider>
        <App />
      </NavigationProvider>
    </NextUIProvider>
  </StrictMode>,
);
