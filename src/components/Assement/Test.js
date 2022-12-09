// import React, { useState } from "react";
// import axios from "axios";

// const CreateAssessment = () => {
//   const [title, setTitle] = useState("");
//   const [timeLimit, setTimeLimit] = useState(0);
//   const [questions, setQuestions] = useState([]);
//   const [error, setError] = useState("");

//   const handleTitleChange = (event) => {
//     setTitle(event.target.value);
//   };

//   const handleTimeLimitChange = (event) => {
//     setTimeLimit(event.target.value);
//   };

//   const handleQuestionChange = (event, index) => {
//     const newQuestions = [...questions];
//     newQuestions[index] = event.target.value;
//     setQuestions(newQuestions);
//   };

//   const handleAddQuestion = (event) => {
//     event.preventDefault();
//     setQuestions([...questions, { type: "multiple_choice", choices: [""] }]);
//   };

//   const handleAddChoice = (event, index) => {
//     const newQuestions = [...questions];
//     newQuestions[index].choices.push("");
//     setQuestions(newQuestions);
//   };

//   const handleChoiceChange = (event, questionIndex, choiceIndex) => {
//     const newQuestions = [...questions];
//     newQuestions[questionIndex].choices[choiceIndex] = event.target.value;
//     setQuestions(newQuestions);
//   };

//   const handleSubmit = () => {
//     if (!title || !timeLimit || !questions) {
//       setError("Please fill in all fields");
//     } else {
//       axios
//         .post("http://localhost:8000/api/assessments", {
//           title,
//           timeLimit,
//           questions,
//         })
//         .then((response) => {
//           setTitle("");
//           setTimeLimit("");
//           setQuestions("");
//           setError("");
//         })
//         .catch((err) => {
//           setError(err.message);
//         });
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 offset-md-3">
//           <div className="card">
//             <div className="card-body">
//               <h1>Create Assessment</h1>
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label>Title</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={title}
//                     onChange={handleTitleChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Time Limit</label>
//                   <input
//                     type="number"
//                     className="form-control"
//                     value={timeLimit}
//                     onChange={handleTimeLimitChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Questions</label>
//                   {questions.map((question, index) => (
//                     <div key={index}>
//                       <label>{index + 1}</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         value={question.text}
//                         onChange={(event) => handleQuestionChange(event, index)}
//                       />
//                       <label>Choices</label>
//                       {question.choices.map((choice, choiceIndex) => (
//                         <div key={choiceIndex}>
//                           <input
//                             type="text"
//                             className="form-control"
//                             value={choice}
//                             onChange={(event) =>
//                               handleChoiceChange(event, index, choiceIndex)
//                             }
//                           />
//                         </div>
//                       ))}
//                       <button
//                         className="btn btn-outline-primary"
//                         onClick={(event) => handleAddChoice(event, index)}
//                       >
//                         Add Choice
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//                 <button
//                   className="btn btn-outline-primary"
//                   onClick={handleAddQuestion}
//                 >
//                   Add Question
//                 </button>
//                 <button className="btn btn-outline-primary">Submit</button>
//               </form>
//               {error && <p className="text-danger">{error}</p>}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateAssessment;


// import React, { useState } from "react";
// import axios from "axios";

// const CreateAssessment = () => {
//   const [title, setTitle] = useState("");
//   const [timeLimit, setTimeLimit] = useState(0);
//   const [questions, setQuestions] = useState([]);
//   const [error, setError] = useState("");

//   const handleTitleChange = (event) => {
//     setTitle(event.target.value);
//   };

//   const handleTimeLimitChange = (event) => {
//     setTimeLimit(event.target.value);
//   };

//   const handleAddQuestion = (event) => {
//     event.preventDefault();
//     setQuestions([
//       ...questions,
//       {
//         question: "",
//         multiple_choice: "",
//         answer: "",
//       },
//     ]);
//   };

//   const handleQuestionChange = (event) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[event.target.dataset.idx][event.target.className] =
//       event.target.value;
//     setQuestions(updatedQuestions);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios
//       .post("https://lambda-study-app.herokuapp.com/api/assessments/", {
//         title: title,
//         time_limit: timeLimit,
//         questions: questions,
//       })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   console.log(questions);

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Title: </label>
//           <input
//             type="text"
//             required
//             className="form-control"
//             value={title}
//             onChange={handleTitleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Time Limit: </label>
//           <input
//             type="number"
//             required
//             className="form-control"
//             value={timeLimit}
//             onChange={handleTimeLimitChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Questions: </label>
//           <button onClick={handleAddQuestion} className="btn btn-primary">
//             Add Question
//           </button>
//           {questions.map((val, idx) => {
//             const questionId = `question-${idx}`;
//             const multipleChoiceId = `multiplechoice-${idx}`;
//             const answerId = `answer-${idx}`;
//             return (
//               <div key={idx}>
//                 <label htmlFor={questionId}>{`Question #${idx + 1}`}</label>
//                 <input
//                   type="text"
//                   name={questionId}
//                   data-idx={idx}
//                   id={questionId}
//                   className="question"
//                   value={questions[idx].question}
//                   onChange={handleQuestionChange}
//                 />
//                 <label htmlFor={multipleChoiceId}>Multiple Choice</label>
//                 <input
//                   type="text"
//                   name={multipleChoiceId}
//                   data-idx={idx}
//                   id={multipleChoiceId}
//                   className="multiple_choice"
//                   value={questions[idx].multiple_choice}
//                   onChange={handleQuestionChange}
//                 />
//                 <label htmlFor={answerId}>Answer</label>
//                 <input
//                   type="text"
//                   name={answerId}
//                   data-idx={idx}
//                   id={answerId}
//                   className="answer"
//                   value={questions[idx].answer}
//                   onChange={handleQuestionChange}
//                 />
//               </div>
//             );
//           })}
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateAssessment;
import React, { useState } from "react";
import { Form, Button, Input } from "semantic-ui-react";

const AssessmentForm = () => {
  const [title, setTitle] = useState("");
  const [timeLimit, setTimeLimit] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentChoices, setCurrentChoices] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [error, setError] = useState({})


  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        question: currentQuestion,
        choices: currentChoices,
        answer: currentAnswer,
      },
    ]);
    setCurrentQuestion("");
    setCurrentChoices([]);
    setCurrentAnswer("");
  };

  const handleSubmit = () => {
    if (!title || !timeLimit || questions.length === 0) {
      setError(
        "Please fill in all the required fields and add at least one question."
      );
      return;
    }

    // push the assessment data to the backend here
  };
  console.log(questions);

  return (
    <div className="w-full max-w-4xl mt-16 mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      <h2 className="font-semibold text-lg text-center py-2 text-gray-700 bg-gray-200">
        Create Assessment
      </h2>

      <div div className="mx-auto max-w-2xl p-4 px-4 py-2 flex-1">
        <Form>
          <Form.Field className="mt-4">
            <label className="">Title</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title of the assessment"
              className="focus:oappearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </Form.Field>
          <Form.Field className="mt-3">
            <label>Time Limit</label>
            <Input
              value={timeLimit}
              type="number"
              onChange={(e) => setTimeLimit(e.target.value)}
              placeholder="Time limit for the assessment"
            />
          </Form.Field>
          <Form.Field className="mt-3">
            <label>Question</label>
            <Input
              value={currentQuestion}
              onChange={(e) => setCurrentQuestion(e.target.value)}
              placeholder="Enter a question"
              className="focus:oappearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </Form.Field>
          <Form.Field className="mt-3">
            <label>Choices</label>
            <Input
              value={currentChoices.join(", ")}
              onChange={(e) => setCurrentChoices(e.target.value.split(","))}
              placeholder="Enter multiple choices, separated by commas"
              className="focus:oappearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </Form.Field>
          <Form.Field className="mt-3">
            <label>Answer</label>
            <Input
              value={currentAnswer}
              onChange={(e) => setCurrentAnswer(e.target.value)}
              placeholder="Enter the correct answer"
              className=" form-input focus:oappearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </Form.Field>
          <div className="mt-4 px-2">
            <Button
              className="mt-2 py-1 px-2 rounded bg-green-500 text-white"
              onClick={addQuestion}
            >
              Add Question
            </Button>
          </div>
          <div className="mt-4 mb-8">
            <Button
              className="w-full py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AssessmentForm;
