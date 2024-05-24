import { Outlet } from "react-router-dom";
import {
  NoPermission,
  Notfound,
  ServerError,
} from "@features/exception";
import { RouteObject } from "@types";
import { MainLayout } from "@features/layout";
import { testRoutes } from "@features/test/routes";

const RootRoute = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export const routeConfig: RouteObject[] = [
  ...testRoutes,
  {
    title: "notfound",
    path: "notfound",
    hidden: true,
    element: <Notfound />,
  },
  {
    title: "no-permission",
    path: "no-permission",
    hidden: true,
    element: <NoPermission />,
  },
  {
    title: "server-error",
    path: "server-error",
    hidden: true,
    element: <ServerError />,
  },
];

export const routes: RouteObject[] = [
  {
    title: "/",
    path: "/",
    element: <RootRoute />,
    children: routeConfig,
  },
  {
    title: "login",
    path: "/login",
    element: <div>LOGIN</div>,
  },
];
