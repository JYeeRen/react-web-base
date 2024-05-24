import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { sStorage } from "@infra";

(function main() {
  sStorage.init();

  ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
})();
