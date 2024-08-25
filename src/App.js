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
import WishlistComponent from "./components/Wishlist/WishlistComponent";
import CartComponent from "./components/Cart/CartComponent";
import ProtectedRoute from "./ProtectedRoutes/protectedRoute";
import CategoryComponent from "./components/Category/CategoryComponent";
import AddProductComponent from "./components/AddProduct/AddproductComponent";
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
            <Route
              path="/activity"
              element={
                <ProtectedRoute>
                  <ActivityComponent />
                </ProtectedRoute>
              }
            />
            <Route
              path="/bath"
              element={
                <ProtectedRoute>
                  <BathComponent />
                </ProtectedRoute>
              }
            />
            <Route
              path="/car_seat"
              element={
                <ProtectedRoute>
                  <CarseatComponent />
                </ProtectedRoute>
              }
            />
            <Route
              path="/clothing"
              element={
                <ProtectedRoute>
                  <ClothingComponent />
                </ProtectedRoute>
              }
            />
            <Route
              path="/feeding"
              element={
                <ProtectedRoute>
                  <FeedingComponent />
                </ProtectedRoute>
              }
            />

            <Route path="/login" element={<LoginComponent />} />
            <Route path="/signup" element={<RegisterComponent />} />
            <Route
              path="/wishlist"
              element={
                <ProtectedRoute>
                  <WishlistComponent />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <CartComponent />
                </ProtectedRoute>
              }
            />

            <Route
              path="/category"
              element={
                <ProtectedRoute role="admin">
                  <CategoryComponent />
                </ProtectedRoute>
              }
            />

            <Route
              path="/addproduct"
              element={
                <ProtectedRoute role="admin">
                  <AddProductComponent />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
