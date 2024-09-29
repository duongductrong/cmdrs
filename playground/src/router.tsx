import { createBrowserRouter } from "react-router-dom";

import Login from "./components/login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
