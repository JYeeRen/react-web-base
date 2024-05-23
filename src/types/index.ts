import { RouteObject as RRRouterObject } from "react-router-dom";

interface CustomRouteAttrs {
  permission?: string[];
}
// Pick<RRRouterObject, 'path' | 'Component' | 'ErrorBoundary'>
export type RouteObject = RRRouterObject & CustomRouteAttrs & {
  children?: RouteObject[];
};
