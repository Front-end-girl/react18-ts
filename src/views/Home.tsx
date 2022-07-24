import { useNavigate } from "react-router-dom";
function Home() {
	const navigate = useNavigate();

	const login = () => {
		navigate(-1);
	};
	return (
		<div className="home">
			<div>我是首页</div>
			<div onClick={login}> 跳转登录页</div>
		</div>
	);
}
export default Home;
