import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig } from "motion/react";
import { FrameworkProvider } from "./framework";
import App from "./App";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <FrameworkProvider>
        <App />
      </FrameworkProvider>
    </MotionConfig>
  </StrictMode>,
);
