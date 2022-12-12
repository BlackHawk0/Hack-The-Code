import React,{useState, useEffect} from 'react'

const MyAssessment = () => {

  const [assessments, setAssessments] = useState([]);

  useEffect(() => {
    fetch('https://arcane-lake-46873.herokuapp.com/assessments')
      .then((response) => response.json())
      .then(assessments => setAssessments(assessments))
}, [])


  return (
    <div>
    <div className="w-full max-w-4xl mt-16 mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      <h2 className="font-bold text-4xl text-center py-6 text-gray-700 bg-gray-200">
        My Assessments
      </h2>
      </div>
        {assessments.map((assessment) => (
            <div className="w-full max-w-4xl mt-16 mx-auto bg-blue rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="mt-4 ont-bold text-2xl text-center py-6 text-white bg-blue-400">
            Title: {assessment.title} <br />
          </div>
          <div className="px-4 py-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          
        >
          Take Test
        </button>
      </div>
      </div>
          ))}
    </div>
  
  )
}

export default MyAssessment