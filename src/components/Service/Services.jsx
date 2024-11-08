import React, { useRef, useState } from "react";
import { TbAward } from "react-icons/tb";
import { FiArrowUpRight } from "react-icons/fi";
import { IoPlay, IoPause } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { SiCodeigniter } from "react-icons/si";
import { IoShieldHalfOutline } from "react-icons/io5";

import AnimatedCounter from "./AnimatedCounter";

import dog from '../../assets/dog.mp4'

function Services() {

    
    const videoRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        videoRef.current.play();
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        videoRef.current.pause();
        videoRef.current.currentTime = 0; // Reset video to start
    };


    return (
        <div className='py-10 mt-20'>
            <div className='flex justify-between items-center pb-32 px-60'>
                <div className="relative">
                    <div
                        className="relative w-56 h-48 overflow-hidden rounded-[90px]"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* Display Image Initially */}
                        {!isHovered && (
                            <img
                                src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Video Thumbnail"
                                className="w-full h-full object-cover"
                            />
                        )}

                        {/* Video element */}
                        <video
                            ref={videoRef}
                            src={dog}
                            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
                                }`}
                            muted
                            loop
                        />
                    </div>
                    <div className='p-4 rounded-full bg-white w-fit absolute top-0 right-5 object-cover' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{isHovered? <IoPause/>:<IoPlay/>}</div>
                </div>
                <div className='text-center flex flex-col gap-3'>
                    <div className='text-blue-950 font-normal tracking-widest'>How can we help</div>
                    <div className='text-4xl font-bold text-blue-950'>While you are on vacation or at work can be stressfull</div>
                </div>
                <div className='relative'>
                    <div className='w-52 h-52 rounded-full overflow-hidden border-4 border-white'>
                        <img src="https://images.unsplash.com/photo-1422565096762-bdb997a56a84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""
                            className='w-full h-full object-cover' />
                    </div>
                    <div className='w-52 h-52 rounded-full overflow-hidden border-4 border-white absolute right-[-120px] top-0'>
                        <img src="https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""
                            className='w-full h-full object-cover' />
                    </div>
                </div>
            </div>
            {/* <div className='px-60 flex justify-center items-center'>
                <div className='flex justify-center items-center gap-16 bg-pink-100 w-full rounded-[100px] p-10'>
                    <div className='flex flex-col justify-center items-center gap-4 bg-pink-50 p-10 w-40 rounded-full shadow-lg'>
                        <div className='bg-sky-500 text-pink-50 p-4 text-2xl rounded-full'><TbAward /></div>
                        <div className='text-5xl font-bold text-blue-950'>85+</div>
                        <div className='font-semibold'>Award</div>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-4 bg-pink-50 p-10 w-40 rounded-full shadow-lg'>
                        <div className='bg-red-500 text-pink-50 p-4 text-2xl rounded-full'><FaPeopleGroup /></div>
                        <div className='text-5xl font-bold text-blue-950'>96K</div>
                        <div className='font-semibold'>Clients</div>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-4 bg-pink-50 p-10 w-40 rounded-full shadow-lg'>
                        <div className='bg-yellow-500 text-pink-50 p-4 text-2xl rounded-full'><SiCodeigniter /></div>
                        <div className='text-5xl font-bold text-blue-950'>89%</div>
                        <div className='font-semibold'>Employee</div>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-4 bg-pink-50 p-10 w-40 rounded-full shadow-lg'>
                        <div className='bg-blue-500 text-pink-50 p-4 text-2xl rounded-full'><IoShieldHalfOutline /></div>
                        <div className='text-5xl font-bold text-blue-950'>100%</div>
                        <div className='font-semibold'>Protection</div>
                    </div>



                </div>
            </div> */}
            <div className='px-60 flex justify-center items-center'>
                <div className='flex justify-center items-center gap-16 bg-pink-100 w-full rounded-[100px] p-10'>
                    <div className='flex flex-col justify-center items-center gap-4 bg-pink-50 p-10 w-40 rounded-full shadow-lg'>
                        <div className='bg-sky-500 text-pink-50 p-4 text-2xl rounded-full'><TbAward /></div>
                        <div className='text-5xl font-bold text-blue-950'>
                            <AnimatedCounter end={85} duration={4} suffix="+" />
                        </div>
                        <div className='font-semibold'>Award</div>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-4 bg-pink-50 p-10 w-40 rounded-full shadow-lg'>
                        <div className='bg-red-500 text-pink-50 p-4 text-2xl rounded-full'><FaPeopleGroup /></div>
                        <div className='text-5xl font-bold text-blue-950'>
                            <AnimatedCounter end={96000} duration={4} />
                        </div>
                        <div className='font-semibold'>Clients</div>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-4 bg-pink-50 p-10 w-40 rounded-full shadow-lg'>
                        <div className='bg-yellow-500 text-pink-50 p-4 text-2xl rounded-full'><SiCodeigniter /></div>
                        <div className='text-5xl font-bold text-blue-950'>
                            <AnimatedCounter end={89} duration={4} suffix="%" />
                        </div>
                        <div className='font-semibold'>Employee</div>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-4 bg-pink-50 p-10 w-40 rounded-full shadow-lg'>
                        <div className='bg-blue-500 text-pink-50 p-4 text-2xl rounded-full'><IoShieldHalfOutline /></div>
                        <div className='text-5xl font-bold text-blue-950'>
                            <AnimatedCounter end={100} duration={4} suffix="%" />
                        </div>
                        <div className='font-semibold'>Protection</div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between gap-20 mt-40 px-60'>
                <div>
                    <div className='w-72 h-[400px] overflow-hidden rounded-full border-4 border-white shadow-lg shadow-pink-200'>
                        <img src="https://images.unsplash.com/photo-1730112636370-991b05c45d4b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""
                            className='w-full h-full object-cover' />
                    </div>
                </div>
                <div className='flex-1 flex items-center'>
                    <div className='flex flex-col gap-10'>
                        <div className='text-6xl text-blue-950 font-bold'>Your furry friend is in safe hand</div>
                        <div className='text-blue-950'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur accusamus ducimus molestias. Pariatur id eaque minus molestiae voluptate, quae dolorum temporibus molestias cum vitae fugit aliquid. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero fugit distinctio, provident eaque, sit quidem neque cum atque eius voluptas impedit nesciunt rerum quis minus facere accusantium, illum at. Libero!</div>
                        <div className='flex gap-1 items-center font-semibold text-red-500 underline'>Read more <FiArrowUpRight /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services