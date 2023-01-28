import { Switch, Route} from "react-router-dom";
import Signup from "./pages/Signup/index"
import Login from "./pages/Login/index"
import Profile from "./pages/Profile/index"
import './App.css';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Profile/>
    </div>
  );
}

export default App;
