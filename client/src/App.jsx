import { Outlet } from "react-router-dom";
import NavBar from "./components/Navbar.jsx";

function App() {

  return (
    <div className="w-full p-6">
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
