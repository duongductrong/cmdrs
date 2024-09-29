import { createBrowserRouter } from "react-router-dom";

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
]);

export default router;
