import { RouteErrorBoundary as ErrorBoundary, Notfound } from "@features/exception";
import { RouteObject } from "@types";

const lostRoute: RouteObject = { path: "*", Component: Notfound };
export function setBoundary(routers: RouteObject[]) {
  const newRouters = routers.map((router) => {
    const newRouter: RouteObject = {
      ...router,
      ErrorBoundary: router.ErrorBoundary ?? ErrorBoundary,
    };
    if (newRouter.children?.length) {
      newRouter.children = setBoundary(newRouter.children);
    }
    return newRouter;
  });

  return newRouters.concat(lostRoute);
}