import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-full bg-white/10 backdrop-blur-3xl border border-white/20 flex justify-center gap-8 p-6 rounded-2xl shadow-lg">
      
      <NavLink
        to="/"
        className={({ isActive }) =>
          `active:scale-95 rounded-xl px-2 py-1 font-bold 
          ${isActive ? "bg-amber-500 text-white" : "bg-amber-300"}`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/recipes"
        className={({ isActive }) =>
          `active:scale-95 rounded-xl px-2 py-1 font-bold
          ${isActive ? "bg-amber-500 text-white" : "bg-amber-300"}`
        }
      >
        Recipes
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `active:scale-95 rounded-xl px-2 py-1 font-bold
          ${isActive ? "bg-amber-500 text-white" : "bg-amber-300"}`
        }
      >
        About
      </NavLink>
      <NavLink
        to="/create"
        className={({ isActive }) =>
          `active:scale-95 rounded-xl px-2 py-1 font-bold
          ${isActive ? "bg-amber-500 text-white" : "bg-amber-300"}`
        }
      >
        Create
      </NavLink>

    </div>
  );
};

export default Nav;