import { PATH } from "@/constants";
import {
  HomeOutlined,
  FileDoneOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

export const navItems = [
  {
    icon: HomeOutlined,
    name: "Home",
    path: PATH.HOME,
    key: 0,
  },
  {
    icon: FileDoneOutlined,
    name: "Create invoice",
    path: PATH.INVOICE_CREATE,
    key: 1,
  },
  {
    icon: LogoutOutlined,
    name: "Log out",
    path: PATH.LOGIN,
    key: 2,
  },
];
