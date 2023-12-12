import './App.css';
import Homepage from "./Components/Homepage";
import MenuSidebar from './Components/MenuSidebar';
import {Outlet} from "react-router";

function App() {
  return (
    <div className="main-container">
      <MenuSidebar />
        <Outlet />
    </div>
  );
}

export default App;
