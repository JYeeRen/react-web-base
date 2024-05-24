import { Menu, MenuProps } from "@components";
import { routeConfig } from "@routes";
import { RouteObject } from "@types";
import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./main.module.less";
import { useLocation, useNavigate } from "react-router-dom";
import { logger, sStorage } from "@infra";

function convertRouteToMenuItem(
  routes: RouteObject[] | undefined
): MenuProps["items"] {
  if (!routes) {
    return undefined;
  }
  return routes
    .filter((route) => !route.hidden)
    .map((route) => {
      const { title, path } = route;
      return {
        key: path,
        label: title,
        title,
        children: convertRouteToMenuItem(route.children),
      };
    });
}

const useMemnuActive = () => {
  const location = useLocation();
  const [activeKey, setActiveKey] = useState<string>("");

  useEffect(() => {
    logger.infra("location ==>", location);
    const keys = location.pathname.split("/");
    setActiveKey(keys[keys.length - 1]);
  }, [location.pathname]);

  return [activeKey];
};

export function NavMenu(props: MenuProps) {
  const navigate = useNavigate();

  const menuItems = useMemo(() => convertRouteToMenuItem(routeConfig), []);

  const selectedKeys = useMemnuActive();

  const handleMenuClick: Required<MenuProps>["onClick"] = useCallback(
    ({ keyPath }) => {
      const path = `/${keyPath.reverse().join("/")}`;
      logger.infra("navigate to ==>", path);
      navigate(path);
    },
    []
  );

  const handleOpenChange = (openKeys: string[]) => {
    sStorage.set("side-menu.open-keys", openKeys);
  };

  return (
    <Menu
      className={styles.nav}
      items={menuItems}
      mode="inline"
      onClick={handleMenuClick}
      defaultOpenKeys={sStorage.get("side-menu.open-keys")}
      onOpenChange={handleOpenChange}
      selectedKeys={selectedKeys}
      {...props}
    />
  );
}
