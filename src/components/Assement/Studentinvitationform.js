import { useState } from "react";
import RenderInvites from "./RenderInvites";

function Studentinvitationform() {
  const [invites, setInvites] = useState("")

  const handleClick = () => {
    fetch("https://arcane-lake-46873.herokuapp.com/invitations")
    .then((res) => res.json())
    .then((data) => setInvites(data));
  }
    
  return (
    <div>
      <button 
      onClick={handleClick}
      className="mt-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Check Invites
      </button>
      <div>
        <RenderInvites invites={invites} />
      </div>

    </div>
  );
}

export default Studentinvitationform