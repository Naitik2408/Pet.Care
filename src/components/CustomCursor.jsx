import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function CustomCursor() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    // Track the mouse position
    const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    // Add event listener for mouse movement
    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 z-[9999] pointer-events-none w-16 h-16 rounded-full bg-pink-400 shadow-lg"
            style={{
                translateX: '-50%',
                translateY: '-50%',
                mixBlendMode: 'difference'
            }}
            animate={{
                x: cursorPosition.x,
                y: cursorPosition.y,
            }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
            }}
        />
    );
}

export default CustomCursor;