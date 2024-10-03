import React, { useEffect, useState } from 'react'

const Eyess = () => {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", (elem) => {
            let mouseX = elem.clientX;
            let mouseY = elem.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
            setRotate(angle - 180);
        })
    })

    return (
        <div className='w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed="-.7"  className=" w-full h-screen bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] flex justify-center gap-[2.5vw] items-center">


                <div className='rounded-full bg-[#F4F4F4] w-[14vw] h-[14vw] flex justify-center items-center '>
                    <div className='bg-[#212121] w-[8.5vw] h-[8.5vw] rounded-full flex justify-center items-center overflow-hidden relative '  >
                        <div className='line absolute w-[96%] h-10 flex items-center ' style={{ transform: `rotate(${rotate}deg)` }} >

                            <div className=' absolute rounded-full bg-[#F4F4F4] w-[1.5vw] h-[1.5vw] '></div>
                        </div>
                    </div>
                </div>


                <div className='rounded-full bg-[#F4F4F4] w-[14vw] h-[14vw] flex justify-center items-center'>
                    <div className='bg-[#212121] w-[8.5vw] h-[8.5vw] rounded-full flex justify-center items-center overflow-hidden relative'>
                        <div className='line absolute  w-[96%] h-10 flex items-center ' style={{ transform: `rotate(${rotate}deg)` }}>

                            <div className=' absolute rounded-full bg-[#F4F4F4] w-[1.5vw] h-[1.5vw] '></div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Eyess
