import React, { useRef } from 'react';

const Magnet = () => {
    const buttonRef = useRef(null);

    const handleMouseMove = (e) => {
        const button = buttonRef.current;
        if (!button) return;

        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform = `translate(${x / 2}px, ${y / 2}px)`;
    };

    const handleMouseLeave = () => {
        const button = buttonRef.current;
        if (button) button.style.transform = 'translate(0, 0)';
    };

    return (
        <div className="flex items-center justify-center ">
            <button
                ref={buttonRef}
                className="relative px-5 py-2 text-lg  uppercase text-white transition-transform duration-200 ease-out bg-[rgba(25,25,112,0.4)] rounded-full shadow-lg border border-[#E6C373]"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                Explore
            </button>
        </div>
    );
};

export default Magnet;
