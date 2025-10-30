import React from "react";
import logo from "../assets/logo.png";
import { Github } from "lucide-react";
import { NavLink } from "react-router-dom";


const Header = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-violet-700 underline" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/apps"
          className={({ isActive }) =>
            isActive ? "text-violet-700 underline" : ""
          }
        >
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/installation"
          className={({ isActive }) =>
            isActive ? "text-violet-700 underline" : ""
          }
        >
          Installation
        </NavLink>
      </li>
    </>
  );
  
  return (
    <header>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {/* links */}
              {links}
            </ul>
          </div>
          <img className="w-[40px]" src={logo} alt="" />
          <a
            href="/"
            className="btn btn-ghost text-xl">HERO.IO</a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            {/* links */}
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://github.com/shuvo2712"
            target="_blank"
            className="btn text-white rounded-md bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]"
          >
            <Github />
            Contribute
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
