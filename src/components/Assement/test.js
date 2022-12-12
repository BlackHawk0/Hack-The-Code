import React,{useState, useEffect} from 'react'
import { AiOutlineConsoleSql } from 'react-icons/ai';
import Timer from '../Timer/timer';

const Test = () => {


  const [title, setTitle] = useState("");
  const [timeLimit, setTimeLimit] = useState(0);
  // const [questions, setQuestions] = useState([
  //   { type: "multiple_choice", question: "", choices: [""] },
  // ]);
    // const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");
  const [assessments, setAssessments] = useState([]);

  useEffect(() => {
    fetch('https://arcane-lake-46873.herokuapp.com/assessments/1')
      .then((response) => response.json())
      .then(assessments => setAssessments(assessments))
  }, [])

  // const test =(assess)=>{
  //   assess.map( t => console.log(t.title))
    
  //   assess.map((arr) =>{
  //     arr.questions.map(q => console.log(q.question))
  //   })
  // }
  // console.log(test(assessments))



// useEffect(() => {
//   fetch('http://localhost:3000/assessments/1/questions')
//     .then((response) => response.json())
//     .then(questions => setQuestions(questions))
// }, [])

  // const handleTimeLimitChange = (event) => {
  //   setTimeLimit(event.target.value);
  // };


  const handleSubmit = () => {
    const data = {
      title,
      timeLimit,
      // questions,
    };
    fetch("https://arcane-lake-46873.herokuapp.com/assessments", {
      method: "POST",
      body: JSON.stringify(data),
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
        setTitle("");
        setTimeLimit(0);
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
    <div className="w-full max-w-4xl mt-16 mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      <h2 className="font-bold text-4xl text-center py-6 text-gray-700 bg-gray-200">
        Take Assessment
        <Timer />
      </h2>
      {/* {const test = ({assessments}) => {
        return ( */}
    <div className="mx-auto max-w-2xl p-2 flex-1">
        <div className="m-2">
          <label className="text-center text-2xl block font-bold mb-2 text-gray-700">
            Title: {console.log(title)} <br />
          </label>

        </div>
        {/* )} */}
        
        <div className=" w-full bg-blue-500 max-w-4xl mx-auto rounded-lg shadow-lg flex flex-col">
          <label className="font-bold text-white">Questions:</label>
          <label className=" text-left block font-bold text text-gray-700">
            {/* <div className=" w-full max-w-4xl mt-16 mx-auto bg-yellow-500 rounded-lg shadow-lg overflow-hidden flex flex-col"> */}
            {assessments.questions.map((arr, index) => (
                  <div key={index} className="w-full max-w-4xl mx-auto bg-blue rounded-lg shadow-lg flex flex-col">
                    <label className="block font-bold text-xl mb-2 p-2 text-black">
                      Question {index + 1}:{arr.question}
                    </label>
                    <h3 className="text-center text-white justify-center">
                      Choices:
                    </h3>

                    <div className="m-2">
                    <label
                        htmlFor="students"
                        className=" focus:oappearance-none border w-full bg-gray-200 rounded p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <h1 className=" px-3 text-sm font-bold text-gray-800">
                        Select Answer
                        </h1>
                        <select
                        className="mt-2 rounded-lg w-full"
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

                    
                      {/* <label className="block font-bold mb-2 text-gray-700">
                        {arr.choices.map((c, choiceIndex) => (
                          <div key={choiceIndex} className="mt-2">
                            <label className="block font-bold mb-2 text-gray-700">
                              Choice {choiceIndex + 1}:
                              <input
                                type="radio"
                                value={c}
                                placeholder="Enter a choice"
                                className="mt-2 mb-2 focus:oappearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                // onChange={(event) =>
                                //   handleChoiceChange(event, index, choiceIndex)
                                // }
                              />
                              <div class="inline-block relative w-64">
  <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
    <option>{choiceIndex + 1}:{c}</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>

                            </label>
                          </div>
                        ))}
                      </label> */}
                    </div>
                  </div>
                ))}
            {/* </div> */}
          </label>
        </div>
      </div>
      {/* ))} */}
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

export default Test