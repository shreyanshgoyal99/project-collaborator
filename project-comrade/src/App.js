import { Switch, Route} from "react-router-dom";
import Signup from "./pages/Signup/index"
import Login from "./pages/Login/index"
import './App.css';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
