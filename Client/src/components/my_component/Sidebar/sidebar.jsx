import React, { useState } from "react";
import { FaBriefcase, FaTachometerAlt, FaCog } from "react-icons/fa";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "@/components/ui/button";
import { Menu } from "antd";
import Dashboard from "@/Pages/Dashboard/Dashboard";
import JobCard from "../jobsCard/jobCard"; // Import JobCard
import { motion } from "framer-motion";

const items = [
  {
    key: "1",
    icon: <FaTachometerAlt className="text-xl" />,
    label: "Dashboard",
  },
  {
    key: "2",
    icon: <FaBriefcase className="text-xl" />,
    label: "Jobs",
  },
  {
    key: "3",
    icon: <FaTachometerAlt className="text-xl" />,
    label: "CreateTests",
  },
  {
    key: "4",
    icon: <FaCog className="text-xl" />,
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
        return <JobCard isSidebarCollapsed={collapsed} />; // Pass the collapsed state
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
      <motion.div
        className="rounded-br-sm rounded-tr-sm bg-[#4431af] p-4"
        initial={{ width: 64 }}
        animate={{ width: collapsed ? 64 : 256 }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      >
        <div className="mt-6 flex items-center justify-center space-x-4">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span
            className={`text-2xl text-white/80 ${collapsed ? "hidden" : "block"}`}
          >
            Hr System
          </span>
        </div>

        <div className="py-4">
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
                  style={{ fontSize: "1rem", color: "#09084f" }}
                >
                  {item.icon}
                </div>
              ),
              label: (
                <span
                  className={`text-lg font-semibold ${
                    collapsed ? "text-white" : "#09084f"
                  }`}
                >
                  {item.label}
                </span>
              ),
            }))}
            className="mt-3 h-[520px] rounded-lg bg-[#7e51d1] p-2 text-white"
          />
        </div>
      </motion.div>
      <div className="flex-1 p-4">
        <Button
          variant="outline"
          onClick={toggleCollapsed}
          className="-mt-2 ml-5 flex items-center text-xl dark:bg-[#7e51d1]"
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <motion.div
        className="rounded-lg shadow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {renderContent()}
      </motion.div>
    </div>
  );
}

export default Sidebar;
