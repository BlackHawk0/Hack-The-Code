import axios from "axios";
import { useState } from "react";

const UserProfile = (props) => {
  const [username, setUsername] = useState(props.username);
  const [email, setEmail] = useState(props.email);
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    axios
      .put("/api/user/update", {
        username: username,
      })
      .then((res) => {
        // handle success response
      })
      .catch((err) => {
        // handle error
      });
    setEditing(false);
  };

  return (
    <div className="px-4 py-2 mb-4 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold text-gray-700 mb-2">User Profile</h1>
      <p className="text-lg font-semibold mb-1">Username: {username}</p>
      <p className="text-lg font-semibold mb-1">Email: {email}</p>
      {!editing && (
        <button
          className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg shadow-md"
          onClick={handleEdit}
        >
          Edit
        </button>
      )}
      {editing && (
        <div>
          <input
            className="border border-gray-400 px-4 py-2 text-sm font-semibold text-gray-700"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            className="px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-lg shadow-md"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
