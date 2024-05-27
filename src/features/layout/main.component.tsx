import { PropsWithChildren } from "react";
import { NavMenu } from "./nav-menu.component";
import styles from "./main.module.less";
import { Layout } from "@components";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <Layout className={styles.main}>
      <Layout.Sider width={200}>
        <div className={styles.logoContainer}>
          <div className={styles.logo} />
        </div>
        <NavMenu className={styles.sidenav} />
      </Layout.Sider>
      <Layout className={styles.contentContianer}>
        <Layout.Header className={styles.header}></Layout.Header>
        <Layout.Content className={styles.content}>{children}</Layout.Content>
      </Layout>
    </Layout>
  );
}
