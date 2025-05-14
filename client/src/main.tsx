import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { MotionConfig } from "framer-motion";

createRoot(document.getElementById("root")!).render(
  <MotionConfig reducedMotion="user">
    <App />
  </MotionConfig>
);
