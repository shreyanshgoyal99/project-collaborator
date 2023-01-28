import "./App.css";
import Navbar from "./component/Navbar";
import Profile from "./pages/Profile";
import AddPost from "./component/AddPost";
import Feed from "./component/Feed";
import Home from "./pages/Home";
import Login from "./pages/Login/index";
import Signup from "./pages/Signup/index";
import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
