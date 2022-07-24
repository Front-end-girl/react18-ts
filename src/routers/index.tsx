import { Navigate } from "react-router-dom";
import { useAnimatedRoutes } from "react-animated-router";

import Login from "@/views/Login";
import Home from "@/views/Home";

// import AnimationLayout from "@/layouts/Animation";

// 定义一个数组为RouterConfig接口的数组
const Routers = [
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
];
const Router = () => {
	const routes = useAnimatedRoutes(Routers);
	return routes;
};

export default Router;
