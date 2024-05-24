import { createBrowserRouter } from "react-router-dom";
import { routes } from "./config";
import { decorateRouter } from "./decorateRouter";

export const router = createBrowserRouter(decorateRouter(routes));

export { routeConfig } from './config';