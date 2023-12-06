import Class from "./App.module.css";
import {Outlet} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className={Class.container}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
