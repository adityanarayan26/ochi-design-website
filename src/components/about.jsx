import React from 'react'

const About = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-0.05"  className='w-full py-20 bg-[#CDEA68]  rounded-3xl   z-[2]'>
            <div className=" flex justify-start px-[3vw]  border-[#99AD53] border-b-[1.6px] ">

                <h1 className='w-[76vw]  text-[#212121] text-[3.5vw] leading-[4vw] tracking-tight font-["Neue_Montreal"] pb-10 '>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
            </div>

            <div className="about2 flex  px-10  py-10 font-regular text-2xl border-b-[1.5px] border-[#99AD53] font-[400]">
                <div className="w-[65vw] text-3xl "><h1>What you can expect:</h1></div>
                <div className="w-[25vw] "><h1>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people. <br /> <br />We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</h1></div>
                <div className="w-[20vw] pl-20 pt-20 "><h1>S:<br /><br />
                    <a href="">Instagram </a>  <br />
                    <a href="">Behance  </a>  <br />
                    <a href="">Facebook </a>  <br />
                    <a href="">Linkedin </a>  <br />
                </h1></div>
            </div>

            <div className="our_approach w-full flex justify-between px-20 py-20 font-['Neue_Montreal'] -mb-[3vw]">
                <div className="">
                    <h1 className='text-[4vw] '>Our approach : </h1>
                    <div className='rounded-full bg-[#000000]   cursor-pointer w-[13vw] px-7 py-6 flex justify-between items-center mt-3'>
                        <button className='text-white uppercase text-xl'>reach more</button>
                        <div className='w-[10px] h-[10px] bg-zinc-100 rounded-full leading-none tracking-none '></div>
                    </div>
                </div>
                <div className="h-[30vw] w-[40vw] bg-cover bg-center rounded-xl bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg')]"  >

                </div>
            </div>

        </div>
    )
}

export default About
