import React from "react";

function FeedBack() {
  const students = [
    {
      name: "Jane Doe",
      question: "What is npm",
      Answer: "10",
    },

    {
      name: "Jane Doe",
      question: "What is npm",
      Answer: "10",
    },
  ];
  return (
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
                    Qustions
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-white px-6 py-4"
                  >
                    Answers
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-white px-6 py-4"
                  >
                    FeedBack
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
                      {student.question}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {student.Answer}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <div class="div">
                        <textarea class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-200 focus:outline-none"></textarea>
                      </div>
                    </td>
                    <td
                      type="button"
                      class="inline-block px-6 py-2.5 bg-stone-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-200 hover:shadow-lg focus:bg-orange-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-grey-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Submit
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedBack;
