import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginComponent from "./components/Login/LoginComponent";
import NavBar from "./components/Navbar/NavBar";
import HomeComponent from "./components/Home/HomeComponent";
import RegisterComponent from "./components/Register/RegisterComponent";
import ActivityComponent from "./components/Activity/ActivityComponent";
import BathComponent from "./components/Bath/BathComponent";
import ClothingComponent from "./components/Clothing/ClothingComponent";
import FeedingComponent from "./components/Feeding/FeedingComponent";
import CarseatComponent from "./components/Carseats/CarseatComponent";
import ProfileComponent from "./components/Profile/ProfileComponent";

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
            <Route path="/bath" element={<BathComponent />} />
            <Route path="/car_seat" element={<CarseatComponent/>} />
            <Route path="/clothing" element={<ClothingComponent/>} />
            <Route path="/feeding" element={<FeedingComponent/>} />

            <Route path="/login" element={<LoginComponent />} />
            <Route path="/signup" element={<RegisterComponent />} />
            <Route path="/profile" element={<ProfileComponent/>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
