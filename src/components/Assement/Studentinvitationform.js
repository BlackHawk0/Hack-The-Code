import { useState } from "react";
import Assessment from "./assessment";
import RenderInvites from "./RenderInvites";
import { useNavigate } from "react-router-dom";

function Studentinvitationform() {
  const [invites, setInvites] = useState("");
  const history = useNavigate();

  const handleClick = () => {
    fetch("https://arcane-lake-46873.herokuapp.com/invitations")
      .then((res) => res.json())
      .then((data) => setInvites(data));
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
      <div>
        <button
          onClick={handleClick}
          className="mt-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Check Invites
        </button>
      </div>
      <div>
        <RenderInvites invites={invites} />
      </div>
      <Assessment />
    </div>
  );
}

export default Studentinvitationform;
