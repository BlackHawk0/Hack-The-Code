import React from 'react'
import { useState } from 'react';

export const ReviewForm = ({handleNewReview}) => {

  const [formData,setFormData]=useState([{
    body:"",
  }])

  const handleSaveReview = async (e) => {
        e.preventDefault();
        console.log(formData);
            const res = await fetch("https://my-json-server.typicode.com/StephenKairu/dummydbserver/Reviews", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    body: formData.body,
                }),
            });
            const response = await res.json();
            handleNewReview(response);
            setFormData([{
              body:"",
            }]);
    };

  function handleChange(e){
    setFormData({...formData, [e.target.name]:e.target.value})
  }



  return (
    <div className='grid justify-items-center'>
    <div>ReviewCard</div>
    <form class="w-1/2 max-w-sm" onSubmit={handleSaveReview} >
      <div class="flex items-center border-b border-teal-500 py-2 mb-4">
      <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Leave Remarks" aria-label="Full name" name="body" value={formData.body} onChange={handleChange} required />
      <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
        Send
      </button>
      <button class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
        Cancel
      </button>
      </div>
    </form>
</div>
  )
}

