import React from "react";
import { Link } from "react-router-dom";

const LoginPage = ({ username, password }) => {
  // Authenticate the user using the provided username and password
  const handleLogin = () => {
    // TODO: Implement authentication logic
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center h-full">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleLogin}
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="mt-3">
            <button>
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                <Link to="/register">Don't have an account?. Register</Link>
              </a>
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs absolute bottom-10">
          &copy;2022 Hack The Code. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
