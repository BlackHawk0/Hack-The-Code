import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function StudentList() {
  const [students, setStudents] = useState([]);
  const history = useNavigate();
  useEffect(() => {
    fetch("https://arcane-lake-46873.herokuapp.com/students")
      .then((res) => res.json())
      .then((students) => setStudents(students));
  }, []);

  return (
    <div>
      <br></br>
      <button
        onClick={() => history(-1)}
        className="bg-blue-500 justify-center rounded-lg h-10 w-20 py-2 px-2"
      >
        Go Back
      </button>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="border-b bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4"
                    >
                      Scores
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4"
                    >
                      Answers
                    </th>

                    {/* <th>Bus</th> */}
                    {/* <th>Edit Details</th> */}
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => (
                    <tr key={index} class="bg-white border-b">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        1
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {student.username}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {student.email}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {student.score}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {student.answer}
                      </td>
                      {/* <td>{booking.customer.bus}</td> */}
                      {/* <td  onClick={handleClick}style={{ color: "pink" }}>Edit</td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentList;
