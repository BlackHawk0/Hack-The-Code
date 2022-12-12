import React, { useEffect, useState } from "react";
import { ReviewForm } from "./ReviewForm";
import { ReviewCard } from "./ReviewCard";
import { useNavigate } from "react-router-dom";

export default function Reviews() {
  const history = useNavigate();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/StephenKairu/dummydbserver/Reviews"
    )
      .then((response) => response.json())
      .then((reviews) => setReviews(reviews));
    //   .then((comments) => comments.forEach(review => renderOneReview(review)));
  }, []);

  const handleNewReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div>
      <br></br>
      <button
        onClick={() => history(-1)}
        className="bg-blue-500 justify-center rounded-lg h-10 w-20 py-2 px-2"
      >
        Go Back
      </button>
      <div className="reviews items-center">
        <br />
        <br />
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
        <ReviewForm handleNewReview={handleNewReview} reviews={reviews} />
      </div>
    </div>
  );
}
