import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Profile from "./pages/Profile";
import AddPost from "./component/AddPost";
function App() {
  return (
    <>
      <Navbar />
      <AddPost/>
      <Profile />

    </>
  );
}

export default App;
