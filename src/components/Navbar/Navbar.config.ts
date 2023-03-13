import { PATH } from "@/constants";
import {
  HomeOutlined,
  FileDoneOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

export const navItems = [
  {
    icon: HomeOutlined,
    name: "navbar.item_home",
    path: PATH.HOME,
    key: 0,
  },
  {
    icon: FileDoneOutlined,
    name: "navbar.item_create_invoice",
    path: PATH.INVOICE_CREATE,
    key: 1,
  },
  {
    icon: LogoutOutlined,
    name: "navbar.item_log_out",
    path: PATH.LOGIN,
    key: 2,
  },
];
