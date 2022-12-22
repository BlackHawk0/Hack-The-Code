import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';


function Each() {
    const [blogs, setBlogs] = useState("");
    const { id } = useParams();
    useEffect(() => {
        fetch('http://localhost:3000/reviews/${blog.id}')
          .then((response) => response.json())
          .then(blogs => setBlogs(blogs))
        //   .then((comments) => comments.forEach(review => renderOneReview(review)));
    }, [id])

return (
   
  <div className="bg-yellow-600">
    <h1>{blogs.answer_id}</h1>
    <p>{blogs.message}</p>
  </div>
)
}

export default Each;
