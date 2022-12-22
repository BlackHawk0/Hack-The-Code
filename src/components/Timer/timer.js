import React, { useState, useEffect } from 'react';

function Timer({timeLimit}) {
  const [count, setCount] = useState(timeLimit);
  console.log(timeLimit)
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);
    return (
      <div class="mt-auto bg-blue-500 flex items-center justify-center px-2 py-2" x-data="beer()" x-init="start()">
    <div class="text-yellow-100">
        <h1 class="text-xl text-center mb-3 font-extralight">Time Remaining*</h1>
        <div class="text-3xl text-center flex w-full items-center justify-center">
            {/* <div class="w-24 mx-1 p-2 bg-white text-yellow-500 rounded-lg">
                <div class="font-mono leading-none" x-text="minutes">00</div>
                <div class="font-mono uppercase text-sm leading-none">Minutes</div>
            </div>
            <div class="text-2xl mx-1 font-extralight">and</div> */}
            <div class="mx-1 p-2 w-auto bg-white text-yellow-500  rounded-lg">
                <div class="font-mono leading-none" x-text="seconds">{count < 0 ? "00:00:00 Time's Up" : count} </div>
                <div class="font-mono uppercase text-sm leading-none">Seconds</div>
            </div>
        </div>
    </div>
</div>
  )
}
export default Timer;


