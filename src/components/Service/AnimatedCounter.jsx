import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({ end, suffix, duration }) => {
    // Use the intersection observer hook to track visibility
    const { ref, inView } = useInView({
        triggerOnce: true,  // Trigger only once
        threshold: 0.5,     // 50% of the component should be visible to start counting
    });

    return (
        <div ref={ref}>
            {inView ? (
                <CountUp end={end} duration={duration} suffix={suffix} />
            ) : (
                // Initial value before it comes into view
                <span>0{suffix}</span>
            )}
        </div>
    );
};

export default AnimatedCounter;
