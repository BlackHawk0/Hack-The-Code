import React, {useState} from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
  // Authenticate the user using the provided username and password
  const handleSubmit = (e) => {
    // TODO: Implement authentication logic
    e.preventDefault();
    fetch("https://arcane-lake-46873.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((data) => {
      if (data.ok) {
        data.json().then((user) => {
          setUser(user);
          if (user.mentor === true) {
            window.location.href = "/dashboard";
          } else {
            window.location.href = "/student";
          }
        });
      }
    });
    console.log(user);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center h-full">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6"
          onSubmit={handleSubmit}
        >
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
              onChange={(e) => setUsername(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
          <div className="mt-3">
            <button className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              <Link to="/register">Don't have an account?. Register</Link>
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
