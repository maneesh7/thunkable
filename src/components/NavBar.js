import React from "react";
import "./NavBar.scss";
import { Layout, Menu, Button, Badge, Dropdown, Row, Col } from "antd";
import {
  BorderlessTableOutlined,
  CommentOutlined,
  DownloadOutlined,
  DownOutlined,
  LineHeightOutlined,
  PlayCircleOutlined
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import companyLogo from "../assets/ThunkableBeaver.png";
const { Header } = Layout;

const versionMenu = (
  <Menu className="customMenu">
    <Menu.Item className="menuItem">Show version history</Menu.Item>
    <div className="divider"></div>
    <Menu.Item className="menuItem">Publish styles and components</Menu.Item>
    <Menu.Item className="menuItem">Exports...</Menu.Item>
    <div className="divider"></div>
    <Menu.Item className="menuItem">Duplicate to your drafts</Menu.Item>
    <Menu.Item className="menuItem">Rename</Menu.Item>
    <Menu.Item className="menuItem" disabled={true}>
      Delete
    </Menu.Item>
    <div className="divider"></div>
    <Menu.Item className="menuItem" disabled={true}>
      Move to project...
    </Menu.Item>
  </Menu>
);

const menu = (
  <Menu className="customMenu">
    <Menu.Item className="menuItem">1st menu item</Menu.Item>
    <Menu.Item className="menuItem">2nd menu item</Menu.Item>
    <Menu.Item className="menuItem">3rd menu item</Menu.Item>
  </Menu>
);

const NavBar = () => {
  const { t } = useTranslation();
  return (
    <Header className="header">
      <Row justify="space-between">
        <Col span={8} className="leftNav">
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">
              <Dropdown
                key="1"
                overlay={menu}
                placement="bottomLeft"
                arrow
                trigger={["click"]}
              >
                <Button
                  type="ghost"
                  icon={
                    <img
                      src={companyLogo}
                      alt="Thunkable Logo"
                      className="logo"
                    />
                  }
                  size={"large"}
                >
                  <DownOutlined />
                </Button>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="2">
              <Dropdown
                key="2"
                overlay={menu}
                placement="bottomLeft"
                trigger={["click"]}
                arrow
              >
                <Button type="ghost" icon={<DownloadOutlined />} size={"large"}>
                  <DownOutlined />
                </Button>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="3">
              <Dropdown
                key="3"
                overlay={menu}
                placement="bottomLeft"
                trigger={["click"]}
                arrow
              >
                <Button
                  type="text"
                  color="white"
                  icon={<BorderlessTableOutlined />}
                  size={"large"}
                >
                  <DownOutlined />
                </Button>
              </Dropdown>{" "}
            </Menu.Item>
            <Menu.Item key="4">
              <Button
                type="text"
                color="white"
                icon={<LineHeightOutlined />}
                size={"large"}
              ></Button>{" "}
            </Menu.Item>
            <Menu.Item key="5" className="navIcon">
              <Button
                type="text"
                color="white"
                icon={<CommentOutlined />}
                size={"large"}
              ></Button>{" "}
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={8} className="versionMenu">
          <label>{t("header_assigment_name")}</label>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["middle"]}>
            <Dropdown
              key="middle"
              overlay={versionMenu}
              placement="bottomCenter"
              arrow
            >
              <Button type="text" color="white" size={"large"}>
                <DownOutlined />
              </Button>
            </Dropdown>
          </Menu>
        </Col>
        <Col span={8} className="rightbar">
          <Badge count="M" className="nameInitial" />
          <Button type="primary">{t("header_share_button")}</Button>
          <Button type="text">
            <PlayCircleOutlined />
          </Button>
          <Button type="text">{t("header_a_mark")}</Button>
          <Menu
            theme="dark"
            className="zoomMenu"
            mode="horizontal"
            defaultSelectedKeys={["middle"]}
          >
            <Dropdown key="middle" overlay={menu} placement="bottomLeft" arrow>
              <Button
                type="text"
                color="white"
                size={"small"}
                className="zoomDropDown"
              >
                {"  100% "}

                <DownOutlined />
              </Button>
            </Dropdown>
          </Menu>
        </Col>
      </Row>
    </Header>
  );
};
export default NavBar;
