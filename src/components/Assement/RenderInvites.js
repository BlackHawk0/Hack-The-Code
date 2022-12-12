import React from "react";

const RenderInvites = ({ invites }) => {
  return (
    <div>
      <div className="container mx-auto mt-3">
        {invites &&
          invites.map((item) => (
            <div key={item.id} className="mb-4">
              <h3 className="text-lg font-bold mt-2 mb-2">
                Assessment {item.id}
              </h3>
              <h2 className="text-xl font-bold mt-2 py-3">
                {item.assessment.title}
              </h2>
              <p>
                {item.students.map((student) => (
                  <span
                    key={student.id}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    {student.username}
                  </span>
                ))}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RenderInvites;
