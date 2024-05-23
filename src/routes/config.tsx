import { Link, Outlet } from "react-router-dom";
import { RouteErrorBoundary as ErrorBoundary } from "@features/exception";
import { RouteObject } from "@types";

const RootRoute = () => {
  return (
    <div>
      ROOT
      <Outlet />
      <Link style={{ margin: 10 }} to={"/a"}>
        a
      </Link>
      <Link style={{ margin: 10 }} to={"/b"}>
        b
      </Link>
      <Link style={{ margin: 10 }} to={"/c"}>
        c
      </Link>
      <Link style={{ margin: 10 }} to={"/d"}>
        d
      </Link>
      <Link style={{ margin: 10 }} to={"/e"}>
        e
      </Link>
    </div>
  );
};

export const routeConfig: RouteObject[] = [
  {
    path: "/A",
    ErrorBoundary,
    lazy: async () => ({
      Component: (await import("@features/test/a")).default,
    }),
  },
  {
    path: "/B",
    lazy: async () => ({
      Component: (await import("@features/test/b")).default,
    }),
  },
  {
    path: "/C",
    lazy: async () => ({
      Component: (await import("@features/test/c")).default,
    }),
  },
  {
    path: "/D",
    lazy: async () => ({
      Component: (await import("@features/test/d")).default,
    }),
  },
  {
    path: "/E",
    lazy: async () => ({
      Component: (await import("@features/test/e")).default,
    }),
  },
];

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootRoute />,
    children: routeConfig,
  },
];
