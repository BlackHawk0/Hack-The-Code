// import React from "react";
// import Post from "./Assement/article";

// function Posts(props) {
//   const posts = [
//     {
//       title: 'Post 1',
//       body: 'This is the body of post 1'
//     },
//     {
//       title: 'Post 2',
//       body: 'This is the body of post 2'
//     }
//   ];
//     var disp = posts.map(function(post) {
//       return <Post title={post.title} body={post.body} />;
//     });
//     return (
//       <div>
//         {disp}
//       </div>
//     );
//   }
//  export default Posts; 

import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Each from './each';
// import axios from 'axios';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/reviews')
      .then((response) => response.json())
      .then(blogs => setBlogs(blogs))
    //   .then((comments) => comments.forEach(review => renderOneReview(review)));
}, [])

function handleClick () {
  return (
    <Each key={blogs.id}/>
  )
}

  return (
    <div>
      {blogs.map(blog => (
        <div key={blog.id} className="bg-slate-500 m-3" onClick={handleClick}>
          <h3>{blog.message}</h3>
          {/* <h3>
              <Link to={`./each/${blog.id}`}>{blog.message}</Link>
            </h3> */}
          <p>{blog.answer_id}</p>
        </div>
      ))}
      {/* <Each blogs={blogs} /> */}
    </div>
  );
};

export default BlogList;
