import React from "react";
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="w-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-between px-10 py-4 rounded-3xl shadow-2xl mb-8">
      {/* Logo */}
      <Link to="/" className="text-2xl font-black tracking-tighter text-white">
        RESTRO<span className="text-yellow-400">PROJECT</span>
      </Link>

      {/* Links */}
      <div className="flex items-center gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-5 py-2 rounded-2xl font-semibold transition-all duration-300 active:scale-95 ${
              isActive
                ? "bg-yellow-400 text-black shadow-lg shadow-yellow-400/20"
                : "text-gray-300 hover:bg-white/10 hover:text-white"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/recipes"
          className={({ isActive }) =>
            `px-5 py-2 rounded-2xl font-semibold transition-all duration-300 active:scale-95 ${
              isActive
                ? "bg-yellow-400 text-black shadow-lg shadow-yellow-400/20"
                : "text-gray-300 hover:bg-white/10 hover:text-white"
            }`
          }
        >
          Recipes
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-5 py-2 rounded-2xl font-semibold transition-all duration-300 active:scale-95 ${
              isActive
                ? "bg-yellow-400 text-black shadow-lg shadow-yellow-400/20"
                : "text-gray-300 hover:bg-white/10 hover:text-white"
            }`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/create"
          className={({ isActive }) =>
            `px-5 py-2 rounded-2xl font-semibold transition-all duration-300 active:scale-95 ${
              isActive
                ? "bg-yellow-400 text-black shadow-lg shadow-yellow-400/20"
                : "text-gray-300 hover:bg-white/10 hover:text-white"
            }`
          }
        >
          Create
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;