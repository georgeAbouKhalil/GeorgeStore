import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../data/user";
import Logout from "../../Logout/Logout";
import { useCart } from "../Cart/CartContext";

export default function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const { cart } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    setUserName("");
  };

  useEffect(() => {
    const user = getCurrentUser();
    setUserName(user?.name);
  }, []);

  return (
    <nav className="bg-[#1e293b] ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-light-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className={`block h-6 w-6 ${isMenuOpen ? "hidden" : "block"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className={`h-6 w-6 ${isMenuOpen ? "block" : "hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <p className="h-8 w-auto text-white font-sans transition duration-300 transform hover:scale-105">
                GeorgeShop 🛍️
              </p>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
              <NavLink
                to="/home"
                className=" text-white hover:bg-[#111827] rounded-md px-3 py-2 text-sm font-medium"
              >
                Home
              </NavLink>
              <NavLink
                to="/product"
                className="text-gray-300 hover:bg-[#111827] hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Shop
              </NavLink>
              <NavLink
                to="/about"
                className="text-gray-300 hover:bg-[#111827] hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                About
              </NavLink>

              {!userName && (
                <NavLink
                  to="/login"
                  className="text-gray-300 hover:bg-[#111827] hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Login
                </NavLink>
              )}
              {!userName && (
                <NavLink
                  to="/signup"
                  className="text-gray-300 hover:bg-[#111827] hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Sign
                </NavLink>
              )}

              {userName && <Logout onLogout={handleLogout} />}
            </div>
            <div className="absolute inset-y-0 right-[40px] flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {userName && (
                <button
                  onClick={() => navigate("/cart")}
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-full p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  {cart.length > 0 && (
                    <span className="absolute top-0 -mt-3 -mr-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                      {cart?.length}
                    </span>
                  )}
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 8.25h13.5m-13.5 0a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h13.5a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25m-13.5 0V6a4.5 4.5 0 019 0v2.25m-4.5 5.25v3.75"
                    />
                  </svg>
                </button>
              )}
              {userName && (
                <span className="text-gray-300 md:block hidden">
                  welcome: {userName}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <NavLink
              to="/home"
              className=" text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Home
            </NavLink>
            <NavLink
              to="/product"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              About
            </NavLink>
            {userName && <Logout onLogout={handleLogout} />}
            {!userName && (
              <NavLink
                to="/Login"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Login
              </NavLink>
            )}
            {!userName && (
              <NavLink
                to="/signup"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Signup
              </NavLink>
            )}

            <NavLink
              to="/cart"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Cart
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
