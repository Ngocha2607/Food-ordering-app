import React from "react";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const Sidebar = (props) => (
  <Sider
    breakpoint="lg"
    collapsedWidth="0"
    onBreakpoint={(broken) => {
      console.log(broken);
    }}
    onCollapse={(collapsed, type) => {
      console.log(collapsed, type);
    }}
  >
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["1"]}
    >
      <Menu.Item key="1" icon={<UserOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="2" icon={<VideoCameraOutlined />}>
        Menu
      </Menu.Item>
      <Menu.Item key="3" icon={<UploadOutlined />}>
        Contact
      </Menu.Item>
      <Menu.Item key="4" icon={<UserOutlined />}>
        Feedback
      </Menu.Item>
    </Menu>
  </Sider>
);

export default Sidebar;
