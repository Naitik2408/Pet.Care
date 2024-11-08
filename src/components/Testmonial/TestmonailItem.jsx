import React, {useState} from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

import data from '../../data';

function TestmonailItem() {
    const [myDataIndex, setMyDataIndex] = useState(0);

    const handleNext = ()=>{
        if(myDataIndex==data.testmonial.length-1){
            setMyDataIndex(0);
            return;
        }
        setMyDataIndex(myDataIndex+1);
    }

    const handlePrevious = ()=>{
        if(myDataIndex==0){
            setMyDataIndex(data.testmonial.length-1);
            return;
        }
        setMyDataIndex(myDataIndex-1);
    }

    const handleSelected = (index)=>{
        setMyDataIndex(index);
    }


  return (
    <div className='flex justify-between gap-20'>
        <div className='flex flex-col justify-between'>
            <div className='flex flex-col gap-5'>
            <div className='text-6xl text-blue-950 font-bold'>{data.testmonial[myDataIndex].title}</div>
            <div className='text-blue-950'>{data.testmonial[myDataIndex].subtitle}</div>
            </div>
            <div className='w-full flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                    {
                        data.testmonial.map((item, index) =>{
                            return (<div>
                                <div className={`rounded-full shadow-md shadow-pink-300 hover:w-2 hover:h-6 hover:bg-red-500 transition-all delay-100 cursor-pointer ${index==myDataIndex? 'bg-red-500 w-2 h-6': 'bg-red-300 w-[5px] h-4'}`}  onClick={()=>{handleSelected(index)}}></div>
                            </div>)
                        })
                    }
                </div>
                <div className='flex gap-10'>
                    <div className='p-3 bg-white rounded-full shadow-md shadow-pink-200 border border-pink-200 cursor-pointer hover:scale-125 transition-all duration-200' onClick={handlePrevious}><FaArrowLeft/></div>
                    <div className='p-3 bg-white rounded-full shadow-md shadow-pink-200 border border-pink-200 cursor-pointer hover:scale-125 transition-all duration-200' onClick={handleNext}><FaArrowRight/></div>
                </div>
            </div>
        </div>
        <div>
            <div className='w-72 h-[450px] overflow-hidden rounded-full border-4 border-white shadow-pink-400'>
                <img src={data.testmonial[myDataIndex].image} alt=""
                className='w-full h-full object-cover' />
            </div>
        </div>
    </div>
  )
}

export default TestmonailItem