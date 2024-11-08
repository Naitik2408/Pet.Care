import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiPhone } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { showPopup } from "../Redux/callPopupSlice";

import data from "../data";

const images = data.homeImage;

function Home() {
    const dispatch = useDispatch();
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    const nextIndex = (currentIndex + 1) % images.length;

    return (
        <div className="grid grid-cols-2 pb-12 h-full border-b">
            <div className="pl-32 flex items-end">
                <div className="flex flex-col gap-12 text-blue-950">
                    <div className="text-8xl font-extrabold">Care Of Your Little Pets.</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolore voluptate sunt, sequi repellat ratione nulla doloremque velit ipsum totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, nemo minima ab quod ipsam asperiores quia voluptates porro. Aliquam, nemo.</div>
                    <div className="flex gap-10">
                        <div className="bg-red-500 text-pink-50 font-semibold py-3 px-10 rounded-full flex gap-1 items-center shadow-xl cursor-pointer shadow-red-300 hover:scale-105 transition-all duration-200">
                            Our Service <span><FiArrowUpRight /></span>
                        </div>
                        <div className="font-semibold py-3 px-10 rounded-full flex gap-1 items-center shadow-md border cursor-pointer shadow-gray-300 hover:scale-105 transition-all duration-200" onClick={() => dispatch(showPopup())}>
                            <span><FiPhone /></span> Schedule a Call
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center w-full h-full py-10">
                <div className="relative w-full h-full rounded-3xl overflow-hidden flex items-center justify-center">
                    <div className="relative w-full h-full">
                        {/* Main Image */}
                        <AnimatePresence>
                            <motion.img
                                key={currentIndex}
                                src={images[currentIndex]}
                                className="absolute left-24 w-80 h-[530px] rounded-full object-cover z-10 overflow-hidden border-4 border-white shadow-lg shadow-pink-200"
                                initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                                exit={{ opacity: 0, scale: 0.5, x: -50, y: 50 }}
                                transition={{ duration: 0.5 }}
                            />
                        </AnimatePresence>

                        {/* Secondary Image on Right */}
                        <AnimatePresence>
                            <motion.img
                                key={nextIndex}
                                src={images[nextIndex]}
                                className="absolute right-[-20px] w-64 h-[400px] rounded-full object-cover z-0 border-4 border-white shadow-md shadow-pink-200"
                                initial={{ opacity: 0, scale: 0.5, x: 100 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            />
                        </AnimatePresence>
                    </div>

                    {/* Next Button */}
                    <button
                        className="absolute bottom-10 right-32 bg-gray-50 shadow-md border text-gray-700 rounded-full p-2 font-semibold focus:outline-none focus:ring-2 focus:ring-gray-400 flex items-center hover:pl-3 hover:scale-105 hover:gap-3 group transition-all"
                        onClick={handleNext}
                    >
                        <div className="group-hover:w-fit w-0 overflow-hidden transition-all duration-700">Next</div> <div className="bg-pink-300 p-2 rounded-full"><FiArrowUpRight /></div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
