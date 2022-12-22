import React from 'react'

function AssessCard({assessments: {id, questions:[{choices, question}]}}) {
  return (
    <div>              
    <h2>{id}</h2>
    <h2>{choices}</h2>
    <h2>{question}</h2>
    </div>
  )
}

export default AssessCard