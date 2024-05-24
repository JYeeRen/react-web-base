import { RouteErrorBoundary, lostRoute } from "@features/exception";
import { RouteObject } from "@types";
import { ComponentType, Suspense, createElement, lazy } from "react";
import { AuthGuard } from "./authGuard";

export function decorateRouter(routers: RouteObject[]) {
  const newRouters = routers.map((router) => {
    let element = router.element;

    if (element) {
      element = createElement(Suspense, null, element);
    }

    if (router.Component) {
      element = createElement(router.Component);
    }

    if (router.lazy != null) {
      const routerLazy = router.lazy;
      const Component = lazy(async () => {
        return { default: (await routerLazy()).Component as ComponentType };
      });

      element = createElement(Suspense, null, createElement(Component, null));
    }

    if (element) {
      element = createElement(AuthGuard, { router }, element);
    }

    const newRouter: RouteObject = {
      ...router,
      element,
      lazy: undefined,
      ErrorBoundary: router.ErrorBoundary ?? RouteErrorBoundary,
    };

    if (newRouter.children?.length) {
      newRouter.children = decorateRouter(newRouter.children);
    }

    return newRouter;
  });

  return newRouters.concat(lostRoute);
}
