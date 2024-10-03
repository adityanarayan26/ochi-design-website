import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { motion } from 'framer-motion';

const Landingpage = () => {


    return (

        <div data-scroll data-scroll-section data-scroll-speed="-0.3" className=' w-full  h-screen mb-40'>
            <div className="text-structure ml-[4vw] pt-[15rem] ">

                {["we create", "eye-opening", "presentation"].map((item, index) => {
                    return (
                        <div className='masker'>
                            <div className='w-fit flex '>
                                {index === 1 && (<motion.div initial={{ width: 0 }} animate={{ width: "8.5vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .9, delay: .3 }} className='w-[8vw]  h-[5vw]  relative -top-[.89vw] rounded  bg-cover  bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")]'></motion.div>)}
                                <h1 href="" className={'  font-["Founders_Grotesk"] text-[7.5vw] font-[600] text-[#212121] tracking-tighter leading-[6vw] uppercase'}>{item}</h1>
                            </div>
                        </div>
                    )
                })}

            </div>

            <div className=" w-full mt-[10vw] mb-[10vw] border-t-[1.5px] border-[#B2B2B2] pt-[25px]">
                <div className="bottom-text-structure flex justify-between px-[4vw]">
                    {["For public and private companies",
                        "From the first pitch to IPO"].map((item, index) => (
                            <h2 className='text-[1vw] capitalize font-regular'>{item}</h2>
                        ))}

                    <div className="btn  flex items-center">
                        <button className='rounded-full border-[1.5px] border-black px-4 py-1 text-[1vw] uppercase font-regular'>Start the project</button>
                        <div className="arrow rounded-full border-[1.5px] border-black p-3 ml-2 cursor-pointer">

                            <GoArrowUpRight className='text-xl' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landingpage
