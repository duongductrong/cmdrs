import { createBrowserRouter, redirect } from "react-router-dom";

import { lazy, Suspense } from "react";

const Faqs = lazy(() => import("./components/faqs"));
const Login = lazy(() => import("./components/login"));
const Register = lazy(() => import("./components/register"));
const CustomersView = lazy(() => import("./features/customer/pages/customers-view"));
const DashboardView = lazy(() => import("./features/dashboard/pages/dashboard-view"));
const AdminLayout = lazy(() => import("./layouts/admin-layout"));
const SettingsView = lazy(() => import("./features/settings/pages/settings-view"));

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
      {
        path: "settings",
        element: <SettingsView />,
      },
    ],
  },
]);

export default router;
