import React, { useState, useEffect } from "react";
import axios from "axios"; // Import the axios library for making HTTP requests
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const InvitationForm = () => {
  // Use the useState hook to manage the state of the form
  const [formState, setFormState] = useState({
    assessment: null,
    students: [],
  });

  const history = useNavigate();

  // Use the useEffect hook to retrieve the list of assessments and students when the component is mounted
  useEffect(() => {
    axios
      .get("https://arcane-lake-46873.herokuapp.com/assessments")
      .then((response) => {
        // Extract the title property from each assessment to use as the display value in the dropdown menu
        const assessments = response.data.map((assessment) => ({
          id: assessment.id,
          title: assessment.title,
        }));

        setFormState((prevState) => ({
          ...prevState,
          assessments,
        }));
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("https://arcane-lake-46873.herokuapp.com/users")
      .then((response) => {
        // Filter out the users who are not students
        const students = response.data.filter((user) => user.student === true);

        setFormState((prevState) => ({
          ...prevState,
          students,
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Define a function to handle changes to the form fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Define a function to handle the submission of the form
  const handleSubmit = (event) => {
    event.preventDefault();

    // Make a POST request to your Rails backend to create the invitations
    const data = {
      assessment: formState.assessment,
      students: formState.students,
    };
    axios
      .post("https://arcane-lake-46873.herokuapp.com/invitations", {
        assessment: formState.assessment,
        students: formState.students,
      })
      .then((response) => {
        // If the invitations were created successfully, show a success message
        toast.success("Invitation sent  successfully", {
          position: "top-center",
        });
        window.location.href = "/dashboard";
      })
      .catch((error) => {
        // If there was an error, show an error message
        toast.error("Failed to send invitation", {
          position: "top-center",
        });
        <Navigate to="/dashboard" />;
      });
    console.log(data);
  };

  return (
    <div>
      <br></br>
      <button
        onClick={() => history(-1)}
        className="bg-blue-500 justify-center rounded-lg h-10 w-20 py-2 px-2"
      >
        Go Back
      </button>
      <form
        className="w-full max-w-4xl mt-16 mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="assessment"
          className="mt-2 mb-2 focus:oappearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <h1 className="mt-2 p-4 font-semibold text-2xl">InvitationForm</h1>
          <h2 className="mt-6 p-4 font-semibold text-lg">
            Select an assessment:
          </h2>
          {formState.assessments && (
            <select
              id="assessment"
              name="assessment"
              value={formState.assessment}
              onChange={handleChange}
              className="mt-2 mb-2 focus:oappearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option
                value=""
                className="mt-2 mb-2 focus:oappearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                Select an assessment
              </option>
              {formState.assessments.map((assessment) => (
                <option key={assessment.id} value={assessment.id}>
                  {assessment.title}
                </option>
              ))}
            </select>
          )}
        </label>
        <label
          htmlFor="students"
          className="mt-2 mb-2 focus:oappearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <h1 className="mt-2 px-3 text-sm font-bold text-gray-800">
            Select students
          </h1>
          <select
            className="mt-2 px-3 py-2 rounded-lg w-full"
            name="students"
            value={formState.students}
            onChange={handleChange}
          >
            {formState.students &&
              formState.students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.username}
                </option>
              ))}
          </select>
        </label>

        <div className="mb-12">
          <button
            type="submit"
            className="mt-8 bg-green-600 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline text-sm w-auto"
          >
            Send invitations
          </button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default InvitationForm;
