import { Navigate, useRoutes } from "react-router-dom";

import Login from "@/views/Login";
import Home from "@/views/Home";

// 定义一个数组为RouterConfig接口的数组
const Routers = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "*",
    element: <Navigate to="/home" />,
  },
];
const Router = () => {
  const routes = useRoutes(Routers);
  return routes;
};

export default Router;
