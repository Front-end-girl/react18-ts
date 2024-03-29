import { HashRouter } from "react-router-dom";
// import "react-animated-router/animate.css";
import Routes from "@/routers/index";
import "./App.scss";

function App() {
	return (
		<HashRouter>
			<div className="app">
				<Routes />
			</div>
		</HashRouter>
	);
}

export default App;
