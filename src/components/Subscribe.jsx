import React from 'react'

function Subscribe() {
  return (
    <div className='px-60 py-20'>
        <div className='flex flex-col items-center'>
            <div className='text-6xl text-blue-950 font-bold text-center px-20'>Subscribe Newsletter & get Pet<span className='text-red-500'>.</span>care News</div>
            <div className='mt-10 flex bg-white p-3 rounded-full justify-between shadow-lg shadow-pink-200 border border-pink-200 w-[65%]'>
                <input type="text" className='flex-1 outline-none px-4 text-blue-950 font-semibold' placeholder='Enter your email' />
                <div className='bg-red-500 rounded-full p-3 px-5 font-semibold text-pink-50'>Subscribe Now</div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe