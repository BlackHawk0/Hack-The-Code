import React from 'react'
import dp from '../assets/SteveJobs1.jpg'

export const ReviewCard = ({review: {body}}) => {
  return (
    <div className='grid justify-items-center ml-8 mb-4'>
        <div className="bg-slate-100 w-1/2 rounded-xl p-9 md:p-0 dark:bg-slate-900">
            <figure class="bg-slate-100 rounded-lg p-8 md:p-0 dark:bg-slate-900">
            <div className="flex bg-slate-100 rounded-xl p-9 dark:bg-slate-900">
  <img className="rounded-full h-14 w-14 mx-auto" src={dp} alt=""/>
  {/* <figcaption class="font-medium"> */}
  <div className="pt-6 flex-initial w-96 text-center space-y-4">
    <blockquote>
    <div className="text-teal-500 font-medium">
        Steve Jobs, TM
      </div>
      <p className="text-l">
        {body}
        {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum dicta modi hic */}
      </p>
    </blockquote>
  </div>
</div>
  {/* <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button> */}
</figure>
        </div>
   </div>
  )
}
