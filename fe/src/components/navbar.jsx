import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center ml-2">
      <Link
        to="/"
        className="text-blue-600 font-bold text-3xl hover:text-blue-800"
        aria-label="Home"
      >
        Future
      </Link>
      <nav className="space-x-4">
        <Link
          to="/"
          className={`text-gray-600 hover:text-gray-800 ${
            location.pathname === "/" ? "font-bold text-gray-900" : ""
          }`}
          aria-label="Home"
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`text-gray-600 hover:text-gray-800 ${
            location.pathname === "/about" ? "font-bold text-gray-900" : ""
          }`}
          aria-label="About"
        >
          About
        </Link>
        <Link
          to="/course"
          className={`text-gray-600 hover:text-gray-800 ${
            location.pathname === "/course" ? "font-bold text-gray-900" : ""
          }`}
          aria-label="Course"
        >
          Course
        </Link>
        <Link
          to="/contact"
          className={`text-gray-600 hover:text-gray-800 ${
            location.pathname === "/contact" ? "font-bold text-gray-900" : ""
          }`}
          aria-label="Contact"
        >
          Contact
        </Link>
      </nav>
      <Link to="/login" aria-label="Login">
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800">
          Login
        </button>
      </Link>
    </header>
  );
};

export default Navbar;
