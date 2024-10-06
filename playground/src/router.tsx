import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./components/dashboard";
import Faqs from "./components/faqs";
import Login from "./components/login";
import Register from "./components/register";
import AdminLayout from "./layouts/admin-layout";

const router = createBrowserRouter([
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
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
