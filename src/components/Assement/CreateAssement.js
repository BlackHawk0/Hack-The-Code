import React, { useState } from "react";
import axios from "axios";


const CreateAssessment = () => {
  const [title, setTitle] = useState("");
  const [timeLimit, setTimeLimit] = useState(0);
  const [questions, setQuestions] = useState([
    { type: "multiple_choice", question: "", choices: [""] },
  ]);
  const [error, setError] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTimeLimitChange = (event) => {
    setTimeLimit(event.target.value);
  };

  const handleQuestionChange = (event, index) => {
    const newQuestions = questions.map((question, i) => {
      if (i === index) {
        return {
          type: question.type,
          question: event.target.value,
          choices: question.choices,
        };
      }
      return question;
    });
    setQuestions(newQuestions);
  };
  const handleChoiceChange = (event, questionIndex, choiceIndex) => {
    const newQuestions = questions.map((question, i) => {
      if (i === questionIndex) {
        const newChoices = question.choices.map((choice, j) => {
          if (j === choiceIndex) {
            return event.target.value;
          }
          return choice;
        });
        return {
          type: question.type,
          question: question.question,
          choices: newChoices,
        };
      }
      return question;
    });
    setQuestions(newQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { type: "multiple_choice", question: "", choices: [""] },
    ]);
  };
  const handleAddChoice = (index) => {
    const newQuestions = [...questions];
    newQuestions[index].choices.push("");
    setQuestions(newQuestions);
  };

  const handleRemoveQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  const handleRemoveChoice = (questionIndex, choiceIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].choices.splice(choiceIndex, 1);
    setQuestions(newQuestions);
  };

  const handleSubmit = () => {
    if (!title || !timeLimit || questions.length === 0) {
      setError("Please enter a title, time limit, and at least one question.");
      return;
    }
    const data = {
      title,
      timeLimit,
      questions,
    };
    fetch("http://localhost:3000/assessments", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create assessment");
        }
        return response.json();
      })
      .then((data) => {
        setTitle("");
        setTimeLimit(0);
        setQuestions([]);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="w-full max-w-4xl mt-16 mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      
      <h2 className="font-bold text-3xl text-center py-6 text-gray-700 bg-gray-200">
        Create Assessment
      </h2>
      <div className="mx-auto max-w-2xl p-4 px-4 py-2 flex-1">
        <div className="mt-4">
          <label className="text-left block font-bold mb-2 text-gray-700">
            Title:
            <input
              className="mt-2 mb-2 focus:oappearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={title}
              onChange={handleTitleChange}
              placeholder="Title of the assessment"
            />
          </label>
        </div>
        <div className="mt-3">
          <label className="text-left block font-bold mb-2 text-gray-700">
            Time Limit (minutes) :
            <input
              className="mt-2 mb-2 text-center focus:oappearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              value={timeLimit}
              min="1"
              onChange={handleTimeLimitChange}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="font-bold"> Questions:</label>
          <label className=" text-left mt-3 block font-bold text mb-2 text-gray-700">
            <div className="mt-1">
              {questions.length > 0 &&
                questions.map((question, index) => (
                  <div key={index} className="mt-2">
                    <label className="block font-bold mb-2 text-gray-700">
                      Question {index + 1}:
                      <input
                        className="mt-2 mb-2 focus:oappearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        value={question.text}
                        placeholder="Enter a question"
                        onChange={(event) => handleQuestionChange(event, index)}
                      />
                    </label>
                    <label className="mt-3 text-center justify-center ml-48">
                      Choices
                    </label>
                    <div className="mt-2">
                      <label className="block font-bold mb-2 text-gray-700">
                        {question.choices.map((choice, choiceIndex) => (
                          <div key={choiceIndex} className="mt-2">
                            <label className="block font-bold mb-2 text-gray-700">
                              Choice {choiceIndex + 1}:
                              <input
                                type="text"
                                value={choice}
                                placeholder="Enter a choice"
                                className="mt-2 mb-2 focus:oappearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                onChange={(event) =>
                                  handleChoiceChange(event, index, choiceIndex)
                                }
                              />
                            </label>
                            <button
                              className=" text-red-500"
                              onClick={() =>
                                handleRemoveChoice(index, choiceIndex)
                              }
                            >
                              Remove Choice
                            </button>
                          </div>
                        ))}
                      </label>
                      <button
                        className=" text-center text-green-500"
                        onClick={() => handleAddChoice(index)}
                      >
                        Add Choice
                      </button>
                    </div>
                    <button
                      className="flex text-red-500"
                      onClick={() => handleRemoveQuestion(index)}
                    >
                      Remove Question
                    </button>
                  </div>
                ))}
            </div>
          </label>
          <button
            className="ml-8 mt-2 mb-3 border-2 rounded-md py-1 px-2 text-sm font-semibold bg-blue-500 hover:bg-blue-700 text-white focus:outline-none focus:bg-gray-100"
            onClick={handleAddQuestion}
          >
            Add Question
          </button>
        </div>
      </div>
      <div className="px-4 py-2 mb-12">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Create Assessment
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
  );
};

export default CreateAssessment;
