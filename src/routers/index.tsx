import { createBrowserRouter } from "react-router-dom";
import Home from "@/routers/Home";
import Login from "@/routers/Login";
import InvoiceCreate from "@/routers/InvoiceCreate";
import { PATH } from "@/constants";

const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <Home />,
  },
  {
    path: PATH.LOGIN,
    element: <Login />,
  },
  {
    path: PATH.INVOICE_CREATE,
    element: <InvoiceCreate />,
  },
]);

export default router;
