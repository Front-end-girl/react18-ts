import React, { useState } from "react";
import Logo from "@/views/Login/components/Logo";
import loginStyle from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const Login: React.FC = () => {
	const navigate = useNavigate();
	const home = () => {
		navigate("/home", { replace: true });
	};
	const [show, setNum] = useState(true);

	const onToggle = () => setNum(!show);
	return (
		<div className={loginStyle.login}>
			<div onClick={home}> 跳转首页</div>
			<div className="container">
				<CSSTransition in={show} timeout={500} classNames="fade" unmountOnExit={true}>
					<div className={loginStyle.square} />
				</CSSTransition>

				<button onClick={onToggle}>toggle</button>
			</div>
			<Logo />
		</div>
	);
};
export default Login;
