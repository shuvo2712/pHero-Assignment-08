import React from "react";
import logo from "../assets/logo.png";
import { Github } from "lucide-react";


const Header = () => {
  return (
    <div>
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
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Apps</a>
              </li>
              <li>
                <a>Installation</a>
              </li>
            </ul>
          </div>
          <img className="w-[40px]" src={logo} alt="" />
          <a className="btn btn-ghost text-xl">HERO.IO</a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Apps</a>
            </li>
            <li>
              <a>Installation</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-white rounded-md bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]">
            <Github />
            Contribute
          </a>
        </div>
      </div>

      <h1 className="h-40 text-3xl font-bold text-center mt-10">
This is header      </h1>
    </div>
  );
};

export default Header;
