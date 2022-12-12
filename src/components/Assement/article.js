import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Article({assessment: {title, questions, timeLimit}}) {
//   const [{ assessment }, setState] = useState(initialState);
const [assessments, setAssessments] = useState();
  const { id } = useParams();

//   useEffect(() => {
//     setState(initialState);
//     fetch(`https://arcane-lake-46873.herokuapp.com/assessments.[1]`).then((r) => {
//         r.json().then((assessment) =>
//           setState({ assessment, error: null, status: "resolved" })
//         )
//       })
//     }, [id]);


    useEffect(() => {
        fetch(`https://arcane-lake-46873.herokuapp.com/assessments/`)    
        .then((response) => response.json())
        .then(assessments => setAssessments(assessments))
          
        }, [{id}]);
    
  return (
    <article>
      {/* <h1>T:{title}</h1> */}
      <small>
          {/* {questions.map((q) => (
            <p>{q.question}?</p>
          ))}  */}
        <p>
          <em>Time: {timeLimit} Min</em>
        </p>
      </small>
      
    </article>
  );
}
export default Article;
