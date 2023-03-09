import React from "react";
import { Layout, theme } from "antd";
import Navbar from "@/components/Navbar";

const { Content, Footer, Sider } = Layout;

type BaseLayoutProps = {
  children: React.ReactNode;
};
const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <Navbar />
      </Sider>
      <Layout>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Simple Invoice created by Tuan
        </Footer>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
