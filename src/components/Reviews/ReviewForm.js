import React from 'react'
import { useState } from 'react';

export const ReviewForm = ({handleNewReview}) => {

  const [formData,setFormData]=useState([{
    answer_id: "",
    user_id: "",
    message:"",
  }])

  const handleSaveReview = async (e) => {
        e.preventDefault();
        console.log(formData);
        const data = {
          message: formData.message,
          answer_id: formData.answer_id,
          user_id: formData.user_id,

      }
            const res = await fetch("https://arcane-lake-46873.herokuapp.com/reviews", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify( data
                  ),
            });
            console.log(data)

            const response = await res.json();
            handleNewReview(response);
            setFormData([{
              answer_id: "",
              user_id: "",
              message:"",
            }]);
    };

  function handleChange(e){
    setFormData({...formData, [e.target.name]:e.target.value})
  }



  return (
    <div className='grid justify-items-center'>
      <div className="w-full max-w-4xl mt-16 mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      <div className="grid justify-items-center font-bold text-3xl text-center py-6 text-gray-700 bg-gray-200">
        <h2>Leave a Review</h2>
        <form class="w-1/2 max-w-sm mt-4 flex flex-column" onSubmit={handleSaveReview} >
      <div class="flex items-center border-b border-teal-500 py-2 mb-4">
      <input class="appearance-none bg-transparent border-none text-base w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Remarks" aria-label="Full name" name="message" value={formData.message} onChange={handleChange} required />
      <input class="appearance-none bg-transparent border-none text-base w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="integer" placeholder="Remarks" aria-label="Full name" name="answer_id" value={formData.answer_id} onChange={handleChange} required />
      <input class="appearance-none bg-transparent border-none text-base w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="integer" placeholder="Remarks" aria-label="Full name" name="user_id" value={formData.user_id} onChange={handleChange} required />

      <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
        Send
      </button>
      <button class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
        Cancel
      </button>
      </div>
    </form>
    </div>
    </div>
</div>
  )
}

