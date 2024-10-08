import { createBrowserRouter, redirect } from "react-router-dom";

import Faqs from "./components/faqs";
import Login from "./components/login";
import Register from "./components/register";
import CustomersView from "./features/customer/pages/customers-view";
import DashboardView from "./features/dashboard/pages/dashboard-view";
import AdminLayout from "./layouts/admin-layout";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => {
      return redirect("/admin/dashboard");
    },
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/faqs",
    element: <Faqs />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <DashboardView />,
      },
      {
        path: "customers",
        element: <CustomersView />,
      },
    ],
  },
]);

export default router;
