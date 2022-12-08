import React, { useState, useEffect } from "react";
import axios from "axios"; // Import the axios library for making HTTP requests

const InvitationForm = () => {
  // Use the useState hook to manage the state of the form
  const [formState, setFormState] = useState({
    assessment: null,
    students: [],
  });

    // Use the useEffect hook to retrieve the list of assessments and students when the component is mounted
  useEffect(() => {
    axios
      .get("http://127.0.0.1:3000/assessments")
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
      .get("http://127.0.0.1:3000/users")
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
      }
    axios
      .post("http://127.0.0.1:3000/invitations", {
        assessment: formState.assessment,
        students: formState.students,
      })
      .then((response) => {
        // If the invitations were created successfully, show a success message
        alert("Invitations created successfully!");
      })
      .catch((error) => {
        // If there was an error, log it
        console.error(error);
      });
      console.log(data);
  };

  return (
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
    </form>
  );
};

export default InvitationForm;
