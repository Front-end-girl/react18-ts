import { HashRouter } from "react-router-dom";

import Routes from "@/routers/index";
import "./App.css";

function App() {
	return (
		<HashRouter>
			<Routes />
		</HashRouter>
	);
}

export default App;
