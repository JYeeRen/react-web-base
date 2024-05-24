import { PropsWithChildren } from "react";
import { NavMenu } from "./nav-menu.component";
import styles from "./main.module.less";
import { Layout } from "@components";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <Layout>
      <Layout.Header style={{ display: "flex", alignItems: "center", height: '64px' }}>
        <div className={styles.logo} />
      </Layout.Header>
      <Layout>
        <Layout.Sider width={200}>
          <NavMenu style={{ height: "100%", borderRight: 0 }} />
        </Layout.Sider>
        <Layout style={{ padding: "12px" }}>
          <Layout.Content
            style={{
              margin: 0,
              minHeight: 300,
              height: 'calc(100vh - 70px - 24px)',
              background: '#fff',
              padding: '12px'
            }}
          >
            {children}
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
