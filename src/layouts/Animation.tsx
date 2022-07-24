import React from "react";
import { Outlet } from "react-router-dom";
import { AnimatedRoutes } from "react-animated-router";

const AnimationLayout: React.FC = () => {
	return (
		<AnimatedRoutes>
			<Outlet></Outlet>
		</AnimatedRoutes>
	);
};
export default AnimationLayout;
