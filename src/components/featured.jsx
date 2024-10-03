import { motion } from 'framer-motion'
import React from 'react'

const Featured = () => {

    return (
        <div data-scroll data-scroll-section className='w-full py-20 rounded-tl-3xl rounded-tr-3xl  '>
            <div className='w-full border-b-[1.6px] border-zinc-500 px-20 py-20'>
                <h1 className='text-[4vw] text-zinc-800 tracking-tight  font-["Neue_Montreal"] capitalize'>featured projects</h1>
            </div>

            <div className="card-main-container w-full  px-10  mt-32  ">

                <div className="cardcontainer relative flex justify-between gap-10 py-10" >
                    {/* text  */}

                    <h1 className='absolute text-[#CDEA68] text-[7vw] uppercase font-bold leading-none top-1/2 -translate-y-[3vw]  left-1/2 -translate-x-[7vw] font-["Neue_Montreal"] tracking-tight'>{"fyde".split("").map((item, index) => (<span>{item}</span>))}</h1>
                    <h1 className='absolute text-[#CDEA68] text-[7vw] uppercase font-bold leading-none top-1/2 -translate-y-[3vw]  left-1/2 -translate-x-[7vw] font-["Neue_Montreal"] tracking-tight overflow-hidden'>{"vise".split("").map((item, index) => (<span className='inline-block  translate-y-full'>{item}</span>))}</h1>
                    {/* text  */}

                    <div className="cards w-1/2 h-[75vh]  rounded-xl overflow-hidden " >
                        <img className='w-full h-full bg-cover bg-center' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>

                    <div className="cards w-1/2 h-[75vh] rounded-xl overflow-hidden " >
                        <img className='w-full h-full bg-cover bg-center  ' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </div>
                </div>



                <div className="cardcontainer relative flex justify-between gap-10 py-10" >
                    {/* text  */}

                    <div className='absolute text-[#CDEA68] text-[7vw] uppercase font-bold leading-none top-1/2 -translate-y-[3vw]  left-1/2 -translate-x-[7vw] font-["Neue_Montreal"] tracking-tight'>{"trawa".split("").map((item, index) => (<span>{item}</span>))}</div>
                    <div className='absolute text-[#CDEA68] text-[7vw] uppercase font-bold leading-none top-1/2 -translate-y-[3vw]  left-1/2 -translate-x-[7vw] font-["Neue_Montreal"] tracking-tight'>{"premium blend".split("").map((item, index) => (<span>{item}</span>))}</div>
                    {/* text  */}

                    <div className="cards w-1/2 h-[75vh]  rounded-xl overflow-hidden " >
                        <img className='w-full h-full bg-cover bg-center' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                    </div>

                    <div className="cards w-1/2 h-[75vh] rounded-xl overflow-hidden " >
                        <img className='w-full h-full bg-cover bg-center  ' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
                    </div>
                </div>




            </div>
        </div>
    )
}

export default Featured
