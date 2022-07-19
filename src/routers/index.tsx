import { Navigate, useRoutes } from "react-router-dom";

import Login from "@/views/Login";
import Home from "@/views/Home";
import AnimationLayout from "@/layouts/Animation";

// 定义一个数组为RouterConfig接口的数组
const Routers = [
	{
		element: <AnimationLayout />,
		children: [
			{
				path: "/login",
				element: <Login />
			},
			{
				path: "/home",
				element: <Home />
			},
			{
				path: "*",
				element: <Navigate to="/login" />
			}
		]
	}
];
const Router = () => {
	const routes = useRoutes(Routers);
	return routes;
};

export default Router;
