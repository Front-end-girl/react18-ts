import { useState } from "react";
import { HashRouter } from "react-router-dom";

import Routes from "@/routers/index";
import "./App.css";

function App() {
  return (
    <>
      <div>测试路由</div>
      <HashRouter><Routes/></HashRouter>
    </>
  );
}

export default App;
