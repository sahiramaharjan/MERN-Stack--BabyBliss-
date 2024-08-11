import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginComponent from "./components/Login/LoginComponent";
import NavBar from "./components/Navbar/NavBar";
import HomeComponent from "./components/Home/HomeComponent";
import RegisterComponent from "./components/Register/RegisterComponent";
import ActivityComponent from "./components/Activity/ActivityComponent";

function App() {
  return (
    <>
      <div>
        <Router>
          <div>
            <NavBar />
          </div>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/activity" element={<ActivityComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/register" element={<RegisterComponent />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
