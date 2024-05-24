import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes";
import { ConfigProvider, ConfigProviderProps } from "@components";
import { useMemo } from "react";

function App() {
  const theme: ConfigProviderProps["theme"] = useMemo(
    () => ({
      token: {
        borderRadius: 0,
        colorPrimary: "#fc3caf",
        colorInfo: "#fc3caf",
      },
    }),
    []
  );

  return (
    <ConfigProvider theme={theme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
