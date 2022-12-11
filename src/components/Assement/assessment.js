import React,{useState, useEffect} from 'react'
import Timer from '../Timer/timer';

const Assessment = () => {


  const [title, setTitle] = useState("");
  const [timeLimit, setTimeLimit] = useState(0);
  // const [questions, setQuestions] = useState([
  //   { type: "multiple_choice", question: "", choices: [""] },
  // ]);
    // const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");
  const [assessments, setAssessments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/assessments')
      .then((response) => response.json())
      .then(assessments => setAssessments(assessments))
}, [])

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
      <h2 className="font-bold text-3xl text-center py-6 text-gray-700 bg-gray-200">
        Take Assessment
        <Timer />
      </h2>
      <div className="mx-auto max-w-2xl p-4 px-4 py-2 flex-1">
      <div className="mt-4">
        {assessments.map((assm) => (
          <label className="text-left block font-bold mb-2 text-gray-700">
            Title: {assm.title} <br />
            Queshon: {assm.title}
          </label>
          ))}
        </div>
        
        
        {/* <div className="mb-4">
          <label className="font-bold"> Questions:</label>
          <label className=" text-left mt-3 block font-bold text mb-2 text-gray-700">
            <div className="mt-1">
              {questions.map((q, index) => (
                  <div key={index} className="mt-2">
                    <label className="block font-bold mb-2 text-gray-700">
                      Question {index + 1}:{q.question}
                    </label>
                    <label className="mt-3 text-center justify-center ml-48">
                      Choices
                    </label> */}
                    {/* <div className="mt-2">
                      <label className="block font-bold mb-2 text-gray-700">
                        {assessments.map((q, choiceIndex) => (
                          <div key={choiceIndex} className="mt-2">
                            <label className="block font-bold mb-2 text-gray-700">
                              Choice {choiceIndex + 1}:
                              <input
                                type="radio"
                                value={q.questions.choice}
                                placeholder="Enter a choice"
                                className="mt-2 mb-2 focus:oappearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                // onChange={(event) =>
                                //   handleChoiceChange(event, index, choiceIndex)
                                // }
                              />
                              <div class="inline-block relative w-64">
  <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
    <option>{q.questions.choice}Answer1</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>

                            </label>
                          </div>
                        ))}
                      </label>
                    </div> */}
                  {/* </div>
                ))}
            </div>
          </label>
        </div> */}
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