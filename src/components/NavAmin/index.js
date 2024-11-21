import { Button, Layout, Menu } from "antd";
import clsx from "clsx";
import React, { useState } from "react";
import style from "./NavAdmin.module.scss";
import {
  AppstoreAddOutlined,
  AppstoreOutlined,
  LineChartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;

function NavAdmin() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className={clsx(style.siderCustomer)}
        width={"240px"}
        style={{
          backgroundColor: "#fff",
        }}
      >
        <div className={clsx(style.logo, collapsed && style.collapsedLogo)}>
          <a href="/" className={style.logoLink}>
            <div className={style.logoBlock}>
              <img
                className={style.logoImg}
                src="/assets/images/download.png"
                alt="logo"
              />
              {!collapsed && <h4>Tech</h4>}
            </div>
          </a>
        </div>
        <Menu
          mode="inline"
          className={clsx(style.menuCustom)}
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item
            key="1"
            icon={<AppstoreOutlined style={{ fontSize: "20px" }} />}
            style={{
              height: "60px",
              lineHeight: "60px",
              fontSize: "20px",
            }}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<LineChartOutlined style={{ fontSize: "20px" }} />}
            style={{
              height: "60px",
              lineHeight: "60px",
              fontSize: "20px",
            }}
          >
            Analytics
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<AppstoreAddOutlined style={{ fontSize: "20px" }} />}
            style={{
              height: "60px",
              lineHeight: "60px",
              fontSize: "20px",
            }}
          >
            Invoice
          </Menu.Item>
        </Menu>
      </Sider>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
          transition: "left 0.2s",
        }}
      />
    </>
  );
}

export default NavAdmin;
