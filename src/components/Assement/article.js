import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Timer from "../Timer/timer";

// function Article () {
 
//   function Post(props) {
//     return (
//       <div>
//         <h3>{props.title}</h3>
//         <p>{props.body}</p>
//       </div>
//     );
//   }
  
// }
function Article() {

  // const [{ assessment }, setState] = useState(initialState);
const [assessments, setAssessments] = useState();
  const { id } = useParams();

// //   useEffect(() => {
// //     setState(initialState);
// //     fetch(`https://arcane-lake-46873.herokuapp.com/assessments.[1]`).then((r) => {
// //         r.json().then((assessment) =>
// //           setState({ assessment, error: null, status: "resolved" })
// //         )
// //       })
// //     }, [id]);


    useEffect(() => {
        fetch(`http://localhost:3000/assessments/${id}`)    
        .then((response) => response.json())
        .then(assessments => setAssessments(assessments))
          
        }, [id]);

        const {title, questions, timeLimit} = assessments || {}
    
  return (
    <article>
      <Timer timeLimit={timeLimit} />
      <h1>Assessment Title: {title}</h1>
      <small>
      <p>
          <em>Time: {timeLimit} Min</em>
      </p>
        {/* <p>{question}</p> */}
          {questions && questions.map((q, index) => (
            <div>
            <p key={index}>{index + 1}:{q.question}?</p>
            {/* <p>{choices}?</p> */}
            {q.choices.map((c, index) => (
              <p key={index}>{index + 1}:{c}</p>
              ))}
            </div>
          ))} 
      </small> 
    </article>
  );
}
export default Article;
// export default Post;
