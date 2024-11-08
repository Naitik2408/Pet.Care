import React from 'react'
import { FiPhone } from "react-icons/fi";
import { useSelector } from 'react-redux';

function SheduleCall() {
    const isCallVisible = useSelector(state => state.call.isVisible)
    return (

        <div className={`flex justify-center items-center fixed w-screen h-screen left-0 top-0 bg-gray-400/70 z-50 ${isCallVisible ? '' : 'hidden'}`}>
            <div className='p-16 bg-pink-50 rounded-2xl w-[600px] shadow-lg shadow-black/70'>
                <div className='text-4xl font-bold text-blue-950'>Provide your phone number</div>
                <div className='text-sm mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore aut odio expedita. Commodi veritatis et ex, nihil quas dignissimos iste!</div>
                <div className='grid grid-cols-4 gap-5 mt-10'>
                    <div className='flex items-center justify-center p-3 rounded-lg bg-white border-2'>
                        <select className='rounded-lg bg-transparent outline-none'>
                            <option value="91">+91</option>
                            <option value="91">+91</option>
                            <option value="91">+91</option>
                            <option value="91">+91</option>
                            <option value="91">+91</option>
                        </select>
                    </div>
                    <input type="text" placeholder='000 000 0000' className='p-2 col-span-3 w-full border rounded-lg bg-white outline-none h-full' />
                </div>
                <div className='flex justify-end mt-5'><div className='text-pink-50 p-4 mt-6 hover:scale-105 transition-all duration-200 cursor-pointer w-fit bg-red-500 rounded-full font-semibold flex gap-2 items-center'><FiPhone /><span>Schedule a call</span></div></div>
            </div>
        </div>

    )
}

export default SheduleCall