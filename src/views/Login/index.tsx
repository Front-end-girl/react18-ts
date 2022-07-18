import React from "react";
import Logo from "@/views/Login/components/Logo";
import loginStyle from "./index.module.scss";

const Login: React.FC = () => {
	return (
		<div className={loginStyle.login}>
			<Logo />
		</div>
	);
};
export default Login;
