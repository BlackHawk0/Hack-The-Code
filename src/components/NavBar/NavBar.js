import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav class="flex items-center justify-between  bg-gray-400 p-2">
      <img src={require("./logo.png")} className="h-24 w-32" alt="" />
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="lg:flex-grow pr-4 text-lg flex space-x-4 justify-end">
          <NavLink
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-black mr-4 items-end"
            to="/"
            exact
          >
            Home
          </NavLink>
          {/* <NavLink
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-black mr-4 "
            to="/studentList"
            exact
          >
            StudentList
          </NavLink> */}
          {/* <NavLink
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-black mr-4 "
            to="/FeedBack"
            exact
          >
            FeedBack
          </NavLink> */}
          {/* <NavLink
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-black mr-4 "
            to="/dashboard"
            exact
          >
            Dashboard
          </NavLink> */}
          {/* <NavLink
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-black mr-4 "
            to="/reviews"
            exact
          >
            Reviews
          </NavLink> */}
          {/* <NavLink
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-black mr-4 "
            to="/whiteboard"
            exact
          >
            WhiteBoard
          </NavLink> */}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
