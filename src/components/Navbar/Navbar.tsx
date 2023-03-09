import { useEffect, useState } from "react";
import { Menu } from "antd";
import { MenuInfo } from "rc-menu/lib/interface";
import { useLocation, useNavigate } from "react-router-dom";
import { navItems } from "./Navbar.config";
import { PATH } from "@/constants";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("1");
  const navigate = useNavigate();
  const location = useLocation();
  const handleItemClick = (menuInfo: MenuInfo) => {
    const { key } = menuInfo;
    switch (key) {
      case "0":
        navigate(PATH.HOME);
        break;
      case "1":
        navigate(PATH.INVOICE_CREATE);
        break;

      default:
        navigate(PATH.HOME);
    }
  };
  useEffect(() => {
    switch (location.pathname) {
      case PATH.HOME:
        setActiveTab("0");
        break;
      case PATH.INVOICE_CREATE:
        setActiveTab("1");
        break;

      default:
        setActiveTab("0");
        break;
    }
  }, [location]);
  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[activeTab]}
      onClick={handleItemClick}
      items={navItems.map((nav, index) => {
        const Icon = nav.icon;
        return {
          key: index,
          icon: <Icon />,
          label: nav.name,
        };
      })}
    />
  );
};

export default Navbar;
