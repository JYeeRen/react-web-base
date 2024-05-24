import { RouteObject as RRRouterObject } from "react-router-dom";

interface CustomRouteObject {
  title?: string;
  permission?: string[];
  hidden?: boolean;
  children?: CustomRouteObject[];
}

export type RouteObject = RRRouterObject & CustomRouteObject;
