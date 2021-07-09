import { Link, withRouter } from "react-router-dom";

import { Breadcrumb, Layout } from "antd";
import { HomeOutlined } from "@ant-design/icons";

import Header from "./Header";
import Sidebar from "./Sidebar";

const breadcrumbMap = {
  "/about": "關於",
  "/tutorials": "教學",
  "/help": "幫助",
  "/projects": "專案",
  "/projects/create": "新增專案",
  "/projects/Theta": "專案內容",
  "/dashboard": "儀錶板",
  "/report": "報表",
  "/quota": "額度",
  "/quota/upgrade": "升級額度",
  "/users": "成員",
  "/users/create": "新增成員",
  "/users/settings": "個人資訊",
};

const PanelLayout = withRouter((props) => {
  const { Content, Footer } = Layout;

  const { location } = props;
  const locationPath = location.pathname.split("/").filter((i) => i);
  const dynamicBreadcrumbItems = locationPath.map((_, index) => {
    const breadUrl = `/${locationPath.slice(0, index + 1).join("/")}`;
    console.log(breadUrl);
    return (
      <Breadcrumb.Item key={breadUrl}>
        <Link to={breadUrl}>{breadcrumbMap[breadUrl]}</Link>
      </Breadcrumb.Item>
    );
  });

  const footerStyle = {
    textAlign: "center",
    position: "fixed",
    height: "2rem",
    left: "50px",
    width: "100%",
    bottom: "0",
    padding: "5px",
    backgroundColor: "#fafafa",
    color: "#000",
    zIndex: "20",
  };

  return (
    <Layout>
      <Header />
      <Layout style={{ top: "5rem" }}>
        {localStorage.getItem("level") === "owner" ? <Sidebar /> : ""}
        <Layout style={{ width: "100%", height: "100vh", margin: "20px" }}>
          <Content
            style={{
              maxHeight: "100vh",
              boxSizing: "border-box",
              maxWidth: "98%",
            }}
          >
            <Breadcrumb style={{ fontSize: '15px', marginBottom: '1.5rem'}}>
              <Breadcrumb.Item>
                <HomeOutlined style={{ fontSize: "120%" }} />
              </Breadcrumb.Item>
              {dynamicBreadcrumbItems}
            </Breadcrumb>
            {props.children}
          </Content>
          <Footer style={footerStyle}>
            Copyright @ 2021 AIWinOps. All Rights Reserved
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
});

export default PanelLayout;
