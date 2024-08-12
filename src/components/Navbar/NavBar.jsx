import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import BabyBliss from "../Images/BabyBliss.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState("home");
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  return (
    <>
      <nav className="bg-white shadow-lg sticky z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between ">
            <div>
              {/* Logo */}
              <Link to="/" className="flex items-center">
                <img src={BabyBliss} alt="Logo" className="h-[120px] w-[120px]" />
              </Link>
            </div>
            <div className="flex space-x-3">
              {/* Primary Navbar items */}
              <div className="hidden md:flex items-center space-x-9">
                <Link
                  to="/"
                  onClick={() => setMenu("home")}
                  className="py-4 px-2 text-gray-600 font-bold hover:text-blue-500 transition duration-300"
                >
                  HOME
                  {menu === "home" && <hr className="border-none w-[100%] h-1 rounded-2xl bg-blue-900" />}
                </Link>
                <Link
                  to="/activity"
                  onClick={() => setMenu("activity")}
                  className="py-4 px-2 text-gray-600 font-bold hover:text-blue-500 transition duration-300"
                >
                  ACTIVITY
                  {menu === "activity" && <hr className="border-none w-[100%] h-1 rounded-2xl bg-blue-900" />}
                </Link>
                <Link
                  to="/bath"
                  onClick={() => setMenu("bath")}
                  className="py-4 px-2 text-gray-600 font-bold hover:text-blue-500 transition duration-300"
                >
                  BATH
                  {menu === "bath" && <hr className="border-none w-[100%] h-1 rounded-2xl bg-blue-900" />}
                </Link>
                <Link
                  to="/car_seat"
                  onClick={() => setMenu("carseat")}
                  className="py-4 px-2 text-gray-600 font-bold hover:text-blue-500 transition duration-300"
                >
                  CAR SEAT
                  {menu === "carseat" && <hr className="border-none w-[100%] h-1 rounded-2xl bg-blue-900" />}
                </Link>
                <Link
                  to="/clothing"
                  onClick={() => setMenu("clothing")}
                  className="py-4 px-2 text-gray-600 font-bold hover:text-blue-500 transition duration-300"
                >
                  CLOTHING
                  {menu === "clothing" && <hr className="border-none w-[100%] h-1 rounded-2xl bg-blue-900" />}
                </Link>
                <Link
                  to="/feeding"
                  onClick={() => setMenu("feeding")}
                  className="py-4 px-2 text-gray-600 font-bold hover:text-blue-500 transition duration-300"
                >
                  FEEDING
                  {menu === "feeding" && <hr className="border-none w-[100%] h-1 rounded-2xl bg-blue-900" />}
                </Link>
              </div>
            </div>
            {/* Secondary Navbar items */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Wishlist */}
              <button className="p-2 hover:text-blue-500 transition duration-300">
                <i className="ri-heart-add-2-fill text-2xl"></i>
              </button>
              {/* User Log */}
              <div className="relative flex flex-col items-center justify-center w-[50px] h-[50px]">
                <button onClick={() => setIsOpen((prev) => !prev)} className="p-2 hover:text-blue-500 transition duration-300">
                  <i className="ri-user-3-fill text-2xl"></i>
                  {!isOpen ? <i className="ri-arrow-down-s-line"></i> : <i className="ri-arrow-up-s-line"></i>}
                </button>
                {isOpen && (
                  <div className="absolute bg-white shadow-md shadow-gray-400 top-10 flex flex-col items-center rounded-md p-1 w-[100px]">
                    <ul>
                      {authState.isAuthenticated ? (
                        <>
                          <li
                            className="hover:text-blue-500 font-semibold transition duration-300"
                            onClick={() => dispatch(logout())}
                          >
                            <button className="block text-md px-2 py-2">Log Out</button>
                          </li>
                          <li>
                          <button className="block text-md px-2 py-2">My Profile</button>
                          </li>
                          {authState.userRole === "admin" && (
                            <li className="hover:text-blue-500 font-semibold transition duration-300">
                              <Link to="/admin" className="block text-md px-2 py-2">
                                Admin Panel
                              </Link>
                            </li>
                          )}
                        </>
                      ) : (
                        <>
                          <li className="hover:text-blue-500 font-semibold transition duration-300">
                            <Link to="/login" className="block text-md px-2 py-2">
                              Log In
                            </Link>
                          </li>
                          <li className="hover:text-blue-500 font-semibold transition duration-300">
                            <Link to="/signup" className="block text-md px-2 py-2">
                              Sign Up
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                )}
              </div>
              {/* Cart */}
              <button className="p-2 hover:text-blue-500 transition duration-300">
                <i className="ri-shopping-cart-2-fill text-2xl"></i>
              </button>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
                <svg
                  className="w-6 h-6 text-gray-500 hover:text-green-500"
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <ul className="">
              <li>
                <Link to="/" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/activity" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
                  Activity
                </Link>
              </li>
              <li>
                <Link to="/bath" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
                  Bath
                </Link>
              </li>
              <li>
                <Link to="/car_seat" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
                  Car Seat
                </Link>
              </li>
              <li>
                <Link to="/clothing" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
                  Clothing
                </Link>
              </li>
              <li>
                <Link to="/feeding" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
                  Feeding
                </Link>
              </li>
              {authState.isAuthenticated ? (
                <>
                  <li>
                    <button onClick={() => dispatch(logout())} className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
                      Log Out
                    </button>
                  </li>
                  {authState.userRole === "admin" && (
                    <li>
                      <Link to="/admin" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
                        Admin Panel
                      </Link>
                    </li>
                  )}
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
                      Log In
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default NavBar;
