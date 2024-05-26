import React from "react";
import { LogoutUser } from "../data/user";
import { NavLink } from "react-router-dom";

export default function Logout({ onLogout }) {
  const logout = () => {
    LogoutUser();
  };

  const handleClick = () => {
    logout();
    onLogout(); // change the name to default
    window.location.href = "/home";
  };

  return (
    <NavLink
      className="text-gray-300 rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
      onClick={handleClick}
    >
      Logout
    </NavLink>
  );
}
