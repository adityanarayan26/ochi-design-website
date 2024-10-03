import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-0.1"  className='w-full  bg-[#004D43] overflow-hidden rounded-tl-3xl rounded-tr-3xl'>
            <div className="flex whitespace-nowrap mt-[5vw] mb-[5vw]  border-t-[1.5px] border-b-[1.5px] border-[#4D837C] ">

                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 8 }} className='text-[#FFFFFF] tracking-tight text-[22vw] font-[700] font-["Neue_Montreal"]  uppercase leading-none px-20'>we are ochi
                </motion.h1>

                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 8 }} className=' text-[#FFFFFF] tracking-tight text-[22vw] font-[700] font-["Neue_Montreal"]  uppercase leading-none px-20'>we are ochi
                </motion.h1>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 8 }} className=' text-[#FFFFFF] tracking-tight text-[22vw] font-[700] font-["Neue_Montreal"]  uppercase leading-none px-20'>we are ochi
                </motion.h1>

            </div>
        </div>
    )
}

export default Marquee
 