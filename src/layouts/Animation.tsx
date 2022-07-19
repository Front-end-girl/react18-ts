import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
const list: any = [];
const AnimationLayout: React.FC = () => {
	const navigator = useLocation();
	useEffect(() => {
		console.log([...list]);
		list.push(navigator.pathname);
		console.log(navigator, new Date().getTime());
	});
	return (
		<>
			<Outlet></Outlet>
		</>
	);
};
export default AnimationLayout;
