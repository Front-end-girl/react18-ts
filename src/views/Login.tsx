import { useNavigate } from "react-router-dom";
function Login() {
	const navigate = useNavigate();

	const login = () => {
		navigate("/home");
	};
	return (
		<>
			<div>我是登录页</div>
			<div onClick={login}> 跳转首页</div>
		</>
	);
}
export default Login;
