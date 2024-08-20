import React, { useState } from "react";
import {
  FaChevronRight,
  FaChevronLeft,
  FaBriefcase,
  FaTachometerAlt,
  FaCog,
} from "react-icons/fa";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "@/components/ui/button";
import { Menu } from "antd";
import Dashboard from "@/Pages/Dashboard/Dashboard";

const items = [
  {
    key: "1",
    icon: <FaTachometerAlt />,
    label: "Dashboard",
  },
  {
    key: "2",
    icon: <FaBriefcase />,
    label: "Jobs",
  },
  {
    key: "3",
    icon: <FaTachometerAlt />,
    label: "CreateTests",
  },
  {
    key: "4",
    icon: <FaCog />,
    label: "Settings",
  },
];

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("1");

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const renderContent = () => {
    switch (selectedKey) {
      case "1":
        return <Dashboard />;
      case "2":
        return <Dashboard />;
      case "3":
        return <Dashboard />;
      case "4":
        return <Dashboard />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen">
      <div
        className={`rounded-br-sm rounded-tr-sm bg-blue-600 p-4 ${
          collapsed ? "w-16" : "w-64"
        } transition-width duration-300`}
      >
        <div className="flex items-center justify-center space-x-4">
          <img
            src="https://flowbite.com/docs/images/logo.svg "
            className="h-8"
            alt="Flowbite Logo"
          />{" "}
          <span style={{ display: collapsed ? "none" : "block" }}>
            Hr System
          </span>
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          inlineCollapsed={collapsed}
          onSelect={({ key }) => setSelectedKey(key)}
          items={items.map((item) => ({
            key: item.key,
            icon: (
              <div
                className="py-2"
                style={{ fontSize: "20px", color: "#09084f" }}
              >
                {item.icon}
              </div>
            ),
            label: (
              <span style={{ color: collapsed ? "#fff" : "#09084f" }}>
                {item.label}
              </span>
            ),
          }))}
          className="mt-3 h-[620px] rounded-lg bg-[#6c6aed] p-2 text-white"
        />
      </div>
      <div className="flex-1 p-4">
        <Button
          variant="outline"
          onClick={toggleCollapsed}
          className="-mt-2 ml-5 flex items-center dark:bg-transparent"
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <div className="flex-1 rounded-lg p-32 shadow">{renderContent()}</div>
    </div>
  );
}

export default Sidebar;
