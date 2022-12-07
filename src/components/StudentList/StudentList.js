import React, { useState } from "react";
// import { set } from "react-hook-form";
function StudentList({ onSearching }) {

  const students = [
    {
      name: "Jane Doe",
      email: "jane@gmail.com",
      score: "10",
      answer: "Ruby gem",
    },

    {
      name: "Jane Doe",
      email: "jane@gmail.com",
      score: "10",
      answer: "Ruby gem",
    },
  ];

  // useEffect(() => {
  //   fetch("https://bus-booking-web-api.herokuapp.com/bookings")
  //     .then((res) => res.json())
  //     .then((bookings) => setBookings(bookings));
  // }, []);

  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
    onSearching(search);
  }

  return (
    <div>
      <div class="flex justify-center">
        <div class="mb-3 xl:w-96">
          <div class="input-group relative flex flex-wrap items-stretch w-full mb-4 rounded">
            <input
              type="search"
              value={search}
              onChange={handleChange}
              class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            ></input>
            <span
              class="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
              id="basic-addon2"
            ></span>
          </div>
        </div>
      </div>
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
                        {student.name}
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
