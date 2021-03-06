import React from "react";
import Logo from "@/views/Login/components/Logo";
import loginStyle from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
	const navigate = useNavigate();
	const home = () => {
		navigate("/home", { replace: true });
	};
	return (
		<div className={loginStyle.login}>
			<div onClick={home}> 跳转首页</div>
			<Logo />
		</div>
	);
};
export default Login;
