import React from "react";
import logoStyle from "./index.module.scss";
import logoImg from "@/assets/netease-logo-white.svg";

const Logo: React.FC = () => {
	return (
		<div className={logoStyle.logo}>
			<div className={logoStyle.logo__bg}>
				<img src={logoImg} className={logoStyle.logo__img} />
			</div>
		</div>
	);
};
export default Logo;
