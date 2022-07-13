import { useNavigate } from "react-router-dom";
function Home() {
	const navigate = useNavigate();

	const login = () => {
		navigate("/login", { replace: true });
	};
	return (
		<>
			<div>我是首页</div>
			<div onClick={login}> 跳转登录页</div>
		</>
	);
}
export default Home;
