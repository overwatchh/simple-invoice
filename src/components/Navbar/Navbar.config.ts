import { PATH } from "@/constants";
import { UploadOutlined, UserOutlined } from "@ant-design/icons";

export const navItems = [
  {
    icon: UploadOutlined,
    name: "Home",
    path: PATH.HOME,
    key: 0,
  },
  {
    icon: UserOutlined,
    name: "Create invoice",
    path: PATH.INVOICE_CREATE,
    key: 1,
  },
];
