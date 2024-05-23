import { createBrowserRouter } from "react-router-dom";
import { routes } from "./config";
import { setBoundary } from "./setBoundary";

export const router = createBrowserRouter(setBoundary(routes));
