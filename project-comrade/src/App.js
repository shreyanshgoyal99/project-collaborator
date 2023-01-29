import "./App.css";
import Navbar from "./component/Navbar";
import Profile from "./pages/Profile";
import AddPost from "./component/AddPost";
import Feed from "./component/Feed";
import Home from "./pages/Home";
import {Login} from "./pages/Login.js";
import {Signup} from "./pages/Signup.js";
import { Route, Routes} from "react-router-dom";
import { Logout } from "./pages/Logout";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/logout" element={<Logout/>} />
      </Routes>
    </div>
  );
}

export default App;
