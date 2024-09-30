import { createBrowserRouter } from "react-router-dom";

import Faqs from "./components/faqs";
import Login from "./components/login";
import Register from "./components/register";

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
]);

export default router;
