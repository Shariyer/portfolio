/** @format */

import React from "react";
import { Link, NavLink } from "react-router-dom";
import navbarImg from "../../../images/ownerPhoto-2.jpeg";

const Header = () => {
  return (
    <div data-theme="coffee" className="navbar bg-base-100 py-10">
      <div className="navbar-start md:hidden lg:hidden sm:block">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-start md:block lg:block hidden">
        <ul tabIndex={1} className="mr-4 p-2 shadow bg-base-100 rounded-box ">
          <Link
            className="mr-2 px-3 text-xl text-orange-400 font-semibold"
            to="/"
          >
            Portfolio
          </Link>

          <Link to="blog" className="mr-2 px-3 text-white">
            Blog
          </Link>

          <Link to="about" className="text-white">
            About
          </Link>
        </ul>
      </div>
      <div className="navbar-center">
        <Link className="btn btn-ghost normal-case text-2xl font-bold text-orange-500">
          S.M. SHARIYER
        </Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="btn btn-ghost btn-circle ">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
              <img src={navbarImg} alt="" />
            </div>
          </label>
        </button>
      </div>
    </div>
  );
};

export default Header;
