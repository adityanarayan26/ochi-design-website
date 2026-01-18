import { motion, useAnimation } from 'framer-motion'
import React from 'react'

const Featured = () => {
    const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];

    return (
        <div data-scroll data-scroll-section className='w-full py-20 rounded-tl-3xl rounded-tr-3xl  '>
            <div className='w-full border-b-[1.6px] border-zinc-500 px-20 py-20'>
                <h1 className='text-[4vw] text-zinc-800 tracking-tight  font-["Neue_Montreal"] capitalize'>featured projects</h1>
            </div>

            <div className="card-main-container w-full  px-10  mt-32  ">

                <div className="cardcontainer relative flex justify-between gap-10 py-10" >
                    <div className='absolute flex overflow-hidden text-[#CDEA68]  left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] text-[7vw] uppercase font-bold leading-none font-["Neue_Montreal"] tracking-tight'>
                        {"fyde".split("").map((item, index) => (
                            <motion.span initial={{ y: "100%" }} animate={cards[0]} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * .03 }} className='inline-block'>{item}</motion.span>
                        ))}
                    </div>
                    <div className='absolute flex overflow-hidden text-[#CDEA68]  left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] text-[7vw] uppercase font-bold leading-none font-["Neue_Montreal"] tracking-tight'>
                        {"vise".split("").map((item, index) => (
                            <motion.span initial={{ y: "100%" }} animate={cards[1]} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * .03 }} className='inline-block'>{item}</motion.span>
                        ))}
                    </div>

                    <motion.div onHoverStart={() => cards[0].start({ y: "0" })} onHoverEnd={() => cards[0].start({ y: "100%" })} className="cards w-1/2 h-[75vh]  rounded-xl overflow-hidden " >
                        <img className='w-full h-full bg-cover bg-center' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </motion.div>

                    <motion.div onHoverStart={() => cards[1].start({ y: "0" })} onHoverEnd={() => cards[1].start({ y: "100%" })} className="cards w-1/2 h-[75vh] rounded-xl overflow-hidden " >
                        <img className='w-full h-full bg-cover bg-center  ' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </motion.div>
                </div>



                <div className="cardcontainer relative flex justify-between gap-10 py-10" >
                    <div className='absolute flex overflow-hidden text-[#CDEA68]  left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] text-[7vw] uppercase font-bold leading-none font-["Neue_Montreal"] tracking-tight'>
                        {"trawa".split("").map((item, index) => (
                            <motion.span initial={{ y: "100%" }} animate={cards[2]} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * .03 }} className='inline-block'>{item}</motion.span>
                        ))}
                    </div>
                    <div className='absolute flex overflow-hidden text-[#CDEA68]  left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] text-[7vw] uppercase font-bold leading-none font-["Neue_Montreal"] tracking-tight'>
                        {"premium blend".split("").map((item, index) => (
                            <motion.span initial={{ y: "100%" }} animate={cards[3]} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * .03 }} className='inline-block'>{item}</motion.span>
                        ))}
                    </div>

                    <motion.div onHoverStart={() => cards[2].start({ y: "0" })} onHoverEnd={() => cards[2].start({ y: "100%" })} className="cards w-1/2 h-[75vh]  rounded-xl overflow-hidden " >
                        <img className='w-full h-full bg-cover bg-center' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                    </motion.div>

                    <motion.div onHoverStart={() => cards[3].start({ y: "0" })} onHoverEnd={() => cards[3].start({ y: "100%" })} className="cards w-1/2 h-[75vh] rounded-xl overflow-hidden " >
                        <img className='w-full h-full bg-cover bg-center  ' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
                    </motion.div>
                </div>




            </div>
        </div>
    )
}

export default Featured
