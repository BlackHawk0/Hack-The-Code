import React,{useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import Posts from '../posts';
import Article from './article';
import { ReviewCard } from '../Reviews/ReviewCard';

const MyAssessment = () => {

  const [assessments, setAssessments] = useState([]);
  const [reviews, setReviews] = useState(false);

  useEffect(() => {
    fetch('https://arcane-lake-46873.herokuapp.com/assessments')
      .then((response) => response.json())
      .then(assessments => setAssessments(assessments))
}, [])


const handleClick = () => {
  fetch("http://localhost:3000/assessments/1")
  // fetch("http://localhost:3000/reviews/1")
  .then((res) => res.json())
  .then((reviews) => setReviews(reviews));
}

// const handleClick = () => {
//   fetch("http://localhost:3000/reviews/1")
//   .then((res) => res.json())
//   .then((reviews) => setReviews(reviews));
// }

  return (
    <div>
    <div className="w-full max-w-4xl mt-16 mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      <h2 className="font-bold text-4xl text-center py-6 text-gray-700 bg-gray-200">
        My Assessments
      </h2>
      {/* <Posts /> */}
      {/* <Article/> */}
      </div>
        {assessments.map((assessment, index) => (
            <div key={assessment.id} className="w-full max-w-4xl mt-16 mx-auto bg-blue rounded-lg shadow-lg overflow-hidden flex flex-col">
                <Link to={`/article/${assessment.id}`}>
                  <div className="mt-4 ont-bold text-2xl text-center py-6 text-white bg-blue-400">
                 {index+ 1} <br />
                 Title: {assessment.title} <br />
                  {/* <Article key={assessment.id} assessment={assessment}/> */}
                </div>
                </Link>
                {assessment.title}            
                <div className="px-4 py-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleClick}
              >
                Take Test
              </button>
              {/* {reviews.map((review) => (
					<ReviewCard key={review.id} review={review} />))} */}
					      {/* <ReviewCard reviews={reviews} /> */}
         
      </div>
      {
        reviews && <div><ReviewCard key={reviews.id} reviews={reviews} /></div>
      }

      {/* {
        reviews && <div><Article key={reviews.id} reviews={reviews} /></div>
      } */}
    </div>    
          ))}       
    </div>
  
  )
}

export default MyAssessment


// import React, { useState } from 'react';

// function MyComponent() {
//   // Declare a state variable named "showContent" with a default value of false
//   const [showContent, setShowContent] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setShowContent(!showContent)}>
//         Toggle Content
//       </button>
//       {showContent && <div>This is the content that will be shown/hidden</div>}
//     </div>
//   );
// }
