import React,{useState, useEffect} from 'react'
import { AiOutlineConsoleSql } from 'react-icons/ai';
import Timer from '../Timer/timer';
import { useParams } from "react-router-dom";

const Assessment = () => {

  // const [title, setTitle] = useState("");
  // const [timeLimit, setTimeLimit] = useState(0);
  
  // const [questions, setQuestions] = useState([
  //   { type: "multiple_choice", question: "", choices: [""] },
  // ]);
    // const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");

  const [assessments, setAssessments] = useState();
  const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/assessments/${id}`)    
        .then((response) => response.json())
        .then(assessments => setAssessments(assessments))
          
        }, [id]);

        const {title, questions, timeLimit} = assessments || {}
  // const test =(assess)=>{
  //   assess.map( t => console.log(t.title))
    
  //   assess.map((arr) =>{
  //     arr.questions.map(q => console.log(q.question))
  //   })
  // }
  // console.log(test(assessments))


  const handleSubmit = () => {
    // const data = {
    //   title,
    //   timeLimit,
    //   questions,
    // };
    fetch("https://arcane-lake-46873.herokuapp.com/assessments", {
      method: "POST",
      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Submission failed!");
        }
        return response.json();
      })
      .then((data) => {
        // setTitle("");
        // setTimeLimit(0);
        // setQuestions([]);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
      });
  };


  // const handleChoiceChange = (event, questionIndex, choiceIndex) => {
  //   const newQuestions = questions.map((question, i) => {
  //     if (i === questionIndex) {
  //       const newChoices = question.choices.map((choice, j) => {
  //         if (j === choiceIndex) {
  //           return event.target.value;
  //         }
  //         return choice;
  //       });
  //       return {
  //         type: question.type,
  //         question: question.question,
  //         choices: newChoices,
  //       };
  //     }
  //     return question;
  //   });
  //   setQuestions(newQuestions);
  // };


  return (
    <div key={id} className="w-full max-w-4xl mt-2 mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      <h2 className="font-bold text-4xl text-center py-6 text-gray-700 bg-gray-200">
        Take Assessment
        <Timer />
      </h2>
      
      <div className="mx-auto max-w-2xl p-4 px-4 py-2 flex-1">
   
        <div className="mb-4 w-full mt-7">
        <h2 className='text-3xl font-bold'>Assessment: {title}</h2>
          <div className="font-bold mt-4 mb-3 text-2xl text-blue-300"> Questions:</div>
          {/* <label className=" text-left mt-3 block font-bold text mb-2 text-gray-700"> */}
            {/* <div className=" w-full max-w-4xl mt-2 mx-auto bg-yellow-500 rounded-lg shadow-lg overflow-hidden flex flex-col"> */}
            {questions && questions.map((arr, index) => (
                  <div key={index} className="w-full max-w-4xl mt-2 mb-4 mx-auto bg-blue rounded-lg shadow-lg overflow-hidden flex flex-col">
                    <label className="block text-lg font-bold mb-2 mt-3 text-gray-700">
                      Qn {index + 1}: {arr.question}
                    </label>
                    <label
        htmlFor="students"
        className="mt-2 mb-2 focus:oappearance-none border w-96 bg-blue-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <h1 className="mt-2 px-3 text-sm font-bold text-gray-800">
          Select Answer
        </h1>
        <select
          className="mt-2 px-3 py-2 rounded-lg w-full"
          name="students"
          value={arr.choices}
          // onChange={handleChange}
        >
          {arr.choices &&
            arr.choices.map((c, choiceIndex) => (
              <option key={choiceIndex} value={c.id}>
                {c}
              </option>
            ))}
        </select>
      </label>
                  </div>
                ))}
            {/* </div> */}
          {/* </label> */}
        </div>
      </div>
      <div className="px-4 py-2 mb-12">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">{error}</span>
        </div>
      )}
    </div>
  
  )
}

export default Assessment