import "./App.css";
import Navbar from "./component/Navbar";
import Profile from "./pages/Profile";
import AddPost from "./component/AddPost";
import Feed from "./component/Feed";
import Home from "./pages/Home";
import Login from "./pages/Login/index";
import Signup from "./pages/Signup/index";
import Dashboard from "./pages/Dashboard/index"
import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar/>
      <Dashboard/>
    </div>
  );
}

export default App;
