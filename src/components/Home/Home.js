import React from "react";
import { NavLink } from "react-router-dom";
import hackerrankImage from "./hackerrank.jpg";

function Home() {
  const styles = {
    backgroundImage: `url(${hackerrankImage})`,
    magin: "0",
    height: "100%",
  };

  return (
    <div>
      <div className=" bg-slate-500 text-white px-16 py-40 " style={styles}>
        <div className=" max-w-xl grid grid-cols-1 gap-9">
          <h2 className="text-xl uppercase font-bold ">Hack The Code</h2>
          <h1 className="text-5xl ">
            Practice coding challenges & prep for interviews
          </h1>
          <p className="text-lg">
            Start practicing your skills now and land the job of your dreams.
          </p>
          <div className="flex space-x-20 ">
            <NavLink
              className="bg-gray-500 py-3 px-6 text-lg rounded-md w-48"
              to="/register"
              exact
            >
              Register
            </NavLink>
            <NavLink
              className="bg-gray-500 py-3 px-6 text-lg rounded-md w-48"
              to="/login"
              exact
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
