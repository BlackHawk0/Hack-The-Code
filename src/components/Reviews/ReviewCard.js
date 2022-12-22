import React from 'react'
import dp from '../assets/SteveJobs1.jpg'

export const ReviewCard = ({review: {message, id, user}}) => {
  return (
    <div className='grid justify-items-center ml-8 mb-4'>
        <div className="bg-slate-100 w-1/2 rounded-xl p-9 md:p-0 dark:bg-slate-900">
            <div className="flex flex-row bg-slate-100 m-4 justify-center text-teal-500 rounded-xl dark:bg-slate-900">
      <img className="rounded-full mx-9 h-14 w-14" src={dp} alt=""/>
      {/* {user && user.map((u) => (
     <div className="text-teal-500 font-medium">
        Steve Jobs, TM 
      </div>
      ))} */}
      <div className="text-teal-500 font-medium">{user.username}</div>
      </div>
      <div>
      <p className="text-l">
        {message}
      </p>
      </div>
      <button class="flex-none m-2 flex items-center justify-center w-6 h-6 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
        {id}
        {/* <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg> */}
      </button>
        </div>
   </div>
  )
}
