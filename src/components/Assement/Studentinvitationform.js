import { useState, useEffect } from "react";
import Assessment from "./assessment";
import RenderInvites from "./RenderInvites";
import Test from "./test";


function Studentinvitationform() {
  const [invites, setInvites] = useState("")

  // const [title, setTitle] = useState("");
  // const [timeLimit, setTimeLimit] = useState(0);
  // const [questions, setQuestions] = useState([
  //   { type: "multiple_choice", question: "", choices: [""] },
  // ]);
    // const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");
  const [assessments, setAssessments] = useState([]);

  useEffect(() => {
    fetch('https://arcane-lake-46873.herokuapp.com/assessments')
      .then((response) => response.json())
      .then(assessments => setAssessments(assessments))
  }, [])

  const handleClick = () => {
    fetch("https://arcane-lake-46873.herokuapp.com/invitations")
    .then((res) => res.json())
    .then((data) => setInvites(data));
  }
    
  return (
    <div>
      {/* <Article /> */}
      {/* <Test /> */}
      <Assessment />
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