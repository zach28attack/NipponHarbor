import Class from "./App.module.css";
import {Outlet} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

import {ArticlesArrProvider} from "../context/ArticlesContext";

function App() {
  return (
    <ArticlesArrProvider>
      <div className={Class.container}>
        <Navbar />
        <Outlet />
      </div>
    </ArticlesArrProvider>
  );
}

export default App;
