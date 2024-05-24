import { RouteObject } from "@types";
import { lazy } from "react";

import A from './a';

const B = lazy(async () => await import("./b"));

export const testRoutes: RouteObject[] = [
  {
    path: "test",
    title: "test",
    children: [
      {
        path: "a",
        title: "A",
        element: <A />,
        // permission: ['a']
        // lazy: async () => ({ Component: (await import("./a")).default }),
      },
      {
        path: "b",
        title: "B",
        permission: ['b'],
        element: <B />,
        // lazy: async () => ({ Component: (await import("./b")).default }),
      },
      {
        path: "c",
        title: "C",
        // element: <C />,
        lazy: async () => ({ Component: (await import("./c")).default }),
      },
      {
        path: "d",
        title: "D",
        // element: <D />,
        lazy: async () => ({ Component: (await import("./d")).default }),
      },
      {
        path: "e",
        title: "E",
        // element: <E />,
        lazy: async () => ({ Component: (await import("./e")).default }),
      },
    ],
  },
];
