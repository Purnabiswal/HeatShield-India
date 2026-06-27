import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

import { SceneProvider } from "./context/SceneContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SceneProvider>
      <App />
    </SceneProvider>
  </BrowserRouter>,
);
