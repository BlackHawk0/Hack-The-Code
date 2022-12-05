import React, { useState } from "react";
import axios from "axios";

const CreateAssessment = () => {
  const [title, setTitle] = useState("");
  const [timeLimit, setTimeLimit] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTimeLimitChange = (event) => {
    setTimeLimit(event.target.value);
  };

  const handleQuestionChange = (event, index) => {
    const newQuestions = [...questions];
    newQuestions[index] = event.target.value;
    setQuestions(newQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { type: "multiple_choice", choices: [""] }]);
  };

  const handleSubmit = () => {
    if (!title || !timeLimit || questions.length === 0) {
      setError("Please enter a title, time limit, and at least one question.");
      return;
    }

    axios
      .post("/api/assessments", {
        title,
        timeLimit,
        questions,
      })
      .then(() => {
        setTitle("");
        setTimeLimit(0);
        setQuestions([]);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
      });
      console.log(title);
  };

  return (
    <div className="w-full max-w-md mt-4 mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      <h2 className="font-semibold text-lg text-center py-2 text-gray-700 bg-gray-200">
        Create Assessment
      </h2>
      <div className="px-4 py-2 flex-1">
        <div className="mb-4">
          <label className="block font-bold mb-2 text-gray-700">
            Title:
            <input
              className="form-input mt-1 block w-full"
              type="text"
              value={title}
              onChange={handleTitleChange}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2 text-gray-700">
            Time Limit (minutes):
            <input
              className="form-input mt-1 block w-full"
              type="number"
              value={timeLimit}
              onChange={handleTimeLimitChange}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2 text-gray-700">
            Questions:
            <div className="mt-1">
              {questions.length > 0 &&
                questions.map((question, index) => (
                  <div key={index} className="mt-2">
                    <label className="block font-bold mb-2 text-gray-700">
                      Question {index + 1}:
                      <input
                        className="form-input mt-1 block w-full"
                        type="text"
                        value={question.text}
                        onChange={(event) => handleQuestionChange(event, index)}
                      />
                    </label>
                    <label className="block font-bold mb-2 text-gray-700">
                      Answer:
                      <input
                        className="form-input mt-1 block w-full"
                        type="text"
                        value={question.answer}
                        onChange={(event) => handleQuestionChange(event, index)}
                      />
                    </label>
                  </div>
                ))}
            </div>
            <button
              className="mt-2 py-1 px-2 rounded bg-green-500 text-white"
              type="button"
              onClick={handleAddQuestion}
            >
              Add Question
            </button>
          </label>
        </div>
      </div>
      <div className="px-4 py-2">
        <div className="mb-4 text-red-500 text-sm">{error}</div>
        <button
          className="w-full py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleSubmit}
        >
          Create Assessment
        </button>
      </div>
    </div>
  );
};

export default CreateAssessment;


