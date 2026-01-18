import React, { useEffect, useState, useRef } from 'react'

const Eyess = () => {
    const [rotate, setRotate] = useState(0);
    const [leftEyeRotate, setLeftEyeRotate] = useState(0);
    const [rightEyeRotate, setRightEyeRotate] = useState(0);

    const leftEyeRef = useRef(null);
    const rightEyeRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            if (leftEyeRef.current) {
                const rect = leftEyeRef.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const angle = Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI);
                setLeftEyeRotate(angle - 180);
            }

            if (rightEyeRef.current) {
                const rect = rightEyeRef.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const angle = Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI);
                setRightEyeRotate(angle - 180);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className='w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed="-.7" className=" w-full h-screen bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] flex justify-center gap-[2.5vw] items-center">


                <div className='rounded-full bg-[#F4F4F4] w-[14vw] h-[14vw] flex justify-center items-center '>
                    <div ref={leftEyeRef} className='bg-[#212121] w-[8.5vw] h-[8.5vw] rounded-full flex justify-center items-center overflow-hidden relative '  >
                        <div className='line absolute w-[96%] h-10 flex items-center ' style={{ transform: `rotate(${leftEyeRotate}deg)` }} >

                            <div className=' absolute rounded-full bg-[#F4F4F4] w-[1.5vw] h-[1.5vw] '></div>
                        </div>
                    </div>
                </div>


                <div className='rounded-full bg-[#F4F4F4] w-[14vw] h-[14vw] flex justify-center items-center'>
                    <div ref={rightEyeRef} className='bg-[#212121] w-[8.5vw] h-[8.5vw] rounded-full flex justify-center items-center overflow-hidden relative'>
                        <div className='line absolute  w-[96%] h-10 flex items-center ' style={{ transform: `rotate(${rightEyeRotate}deg)` }}>

                            <div className=' absolute rounded-full bg-[#F4F4F4] w-[1.5vw] h-[1.5vw] '></div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Eyess
