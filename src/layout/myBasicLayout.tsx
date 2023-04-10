import React from 'react';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import layoutStyle from "./layout.module.scss"

const layout: React.CSSProperties = {
  height: "100vh"
}
const headerStyle: React.CSSProperties = {
  paddingInline:"0px",
  color: '#000',
  height: 64,
  lineHeight: '64px',
  backgroundColor: 'transparent',
};

const contentStyle: React.CSSProperties = {

  minHeight: 120,
  lineHeight: '120px',
  color: '#000',
  backgroundColor: 'transparent',
};

const siderStyle: React.CSSProperties = {

  lineHeight: '120px',
  color: '#000',
  backgroundColor: 'transparent',
};

const footerStyle: React.CSSProperties = {

  color: '#000',
  backgroundColor: 'transparent',
};

function MyBasicLayout() {
  return (
    <Layout style={ layout}  >
      <Sider style={siderStyle}>
        <div className={layoutStyle.p}>
          123123
        </div>
      </Sider>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default MyBasicLayout;
