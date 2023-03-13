import React, { useEffect } from "react";
import { Layout, theme } from "antd";
import Navbar from "@/components/Navbar";
import { getItem } from "@/utils/localStorage";
import { ELocalItem } from "@/utils/localStorage/types";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
const { Header: HeaderWrapper, Content, Footer, Sider } = Layout;

type BaseLayoutProps = {
  children: React.ReactNode;
};
const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  //redirect users to login page if 401
  //or not logged in yet
  useEffect(() => {
    if (!getItem(ELocalItem.Auth) && !getItem(ELocalItem.Membership)) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <Layout>
      <Sider
        breakpoint="md"
        collapsedWidth="0"
        // style={{
        //   overflow: "auto",
        //   height: "100vh",
        //   position: "fixed",
        //   left: 0,
        //   top: 0,
        //   bottom: 0,
        // }}
      >
        <Navbar />
      </Sider>
      <Layout style={{ marginLeft: 0 }}>
        <HeaderWrapper style={{ padding: 0, background: colorBgContainer }}>
          <Header />
        </HeaderWrapper>
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
