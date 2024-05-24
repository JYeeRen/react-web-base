import { RouteObject } from "@types";
import { Navigate } from "react-router-dom";

export const lostRoute: RouteObject = {
  path: "*",
  element: <Navigate to="/notfound" replace />
};
