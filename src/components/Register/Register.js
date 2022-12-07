// import React, { useState } from "react";
// import { Link, Redirect } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const RegisterPage = () => {

//     // State to store the values of the input fields
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [student, setStudent] = useState(false)
//     const [mentor, setMentor] = useState(false)

//     // Flag to indicate if the user has successfully registered
//     const [registered, setRegistered] = useState(false);

//     // Register the user using the provided username, email, and password
//     const handleRegister = () => {
//         // Validate the provided values
//         if (!username || !email || !password) {
//           toast.error("Please enter a valid username, email, and password.", {
//             position: "top-center",
//           });
//           return;
//         } else if (!student && !mentor) {
//           toast.error("Please select either student or mentor", {
//             position: "top-center",
//           });
          
//           return;
//         }

//         // Create a new user object
//         const newUser = {
//         username: username,
//         email: email,
//         password: password,
//         student: student,
//         mentor: mentor
//         };

//         // Send the new user object to the backend API for registration
//         fetch("/api/register", {
//         method: "POST",
//         body: JSON.stringify(newUser),
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             if (data.error) {
//             alert(data.error);
//             return;
//             }

//             // Set the registered flag to true
//             setRegistered(true);
//         });
//         };

//     return (
//       <div className="flex items-center justify-center h-screen">
//         <div className="flex items-center justify-center h-full">
//           <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="username"
//               >
//                 Username
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="username"
//                 type="text"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(event) => setUsername(event.target.value)}
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="email"
//               >
//                 Email
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="email"
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(event) => setEmail(event.target.value)}
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="password"
//               >
//                 Password
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="password"
//                 type="password"
//                 placeholder="******************"
//                 value={password}
//                 onChange={(event) => setPassword(event.target.value)}
//               />
//             </div>
//             <div className="flex items-center justify-between">
//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 type="button"
//                 onClick={handleRegister}
//               >
//                 Register
//               </button>
//             </div>
//             <div className="mt-2">
//               <button>
//                 <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
//                   <Link to="/login">Already have an Account?. Login</Link>
//                 </a>
//               </button>
//             </div>
//           </form>
//           <p className="text-center text-gray-500 text-xs absolute bottom-10">
//             &copy;2022 Hack The Code. All rights reserved.
//           </p>
//         </div>
//         <ToastContainer />
//       </div>
//     );
// };

// export default RegisterPage;


/*And radio button for choosing either student or mentor*/


import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {

    // State to store the values of the input fields
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [student, setStudent] = useState(false)
    const [mentor, setMentor] = useState(false)

    // Flag to indicate if the user has successfully registered
    const [registered, setRegistered] = useState(false);

    // Register the user using the provided username, email, and password
    const handleRegister = () => {
        // Validate the provided values
        if (!username || !email || !password) {
          toast.error("Please enter a valid username, email, and password.", {
            position: "top-center",
          });
          return;
        } else if (!student && !mentor) {
          toast.error("Please select either student or mentor", {
            position: "top-center",
          });
          
          return;
        }

        // Create a new user object
        const newUser = {
        username: username,
        email: email,
        password: password,
        student: student,
        mentor: mentor
        };

        // Send the new user object to the backend API for registration
        fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(newUser),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.error) {
            alert(data.error);
            return;
            }

            // Set the registered flag to true
            setRegistered(true);
        });
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
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
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
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Select your role
              </label>
              <label className="px-3">
                <input
                  className="px-4"
                  type="radio"
                  value="student"
                  checked={student}
                  onChange={(event) => {
                    setStudent(event.target.value);
                    setMentor(false);
                  }}
                />
                Student
              </label>
              <label>
                <input
                  type="radio"
                  value="mentor"
                  checked={mentor}
                  onChange={(event) => {
                    setMentor(event.target.value);
                    setStudent(false);
                  }}
                />
                Mentor
              </label>
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleRegister}
              >
                Register
              </button>
              <Link
                to="/login"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Already have an account?
              </Link>
            </div>
          </form>
          <ToastContainer />
          {registered && <Navigate to="/login" />}
        </div>
      </div>
    );
};

export default RegisterPage;