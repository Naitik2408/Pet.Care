import React from 'react'

function Navbar() {

  return (
    <div className='px-32'>
        <div className='py-6 grid grid-cols-3 text-xl text-blue-950 border-b-blue-950'>
        <div className='font-extrabold text-3xl'><span className='animate-spin-slow'>Pet</span><span className='text-orange-500'>.</span><span>care</span></div>
        <div className='flex justify-center items-center gap-6'>
            {/* <div>Home</div>
            <div>Services</div>
            <div>Traning</div>
            <div>Mid-care</div> */}
        </div>
        <div></div>
    </div>
    </div>
  )
}

export default Navbar