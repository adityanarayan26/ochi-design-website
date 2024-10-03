import React from 'react'

const About2 = () => {
    return (
        <div className='w-full  font-[Neue_Montreal] text-zinc-800 text-2xl'>
            <div className='px-20 pb-10 pt-10 border-t-[1.6px] border-zinc-500'><h1 className='  text-[3.5vw]  capitalize'>client reviews</h1></div>
            <div className='flex justify-between p-20 w-[85vw] '>
                <div className=''><h1 className=''>Karman Ventures</h1></div>
                <div className='flex  flex-col items-start '>
                    <h1 className=''>Services:</h1><br /><br /><br /><br />
                    <button className='px-5 py-[10px] border-zinc-500 rounded-full uppercase border-[1.9px] mb-[1vw]'><h1 className='text-[20px] font-[400] leading-none '>investor deck</h1></button>
                    <button className='px-5 py-[10px]   border-zinc-600 rounded-full uppercase border-[1.9px]'>
                        <h1 className='text-[20px] font-[400] leading-none'>sales deck</h1></button>
                </div>
                <div className=''>
                    <h1 className='capitalize'>William Barnes</h1><br /><br />
                    <img className='bg-cover bg-center h-[6vw] w-[6vw] mb-10 rounded-xl' src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="" />
                    <h1 className='w-[30vw]'>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</h1>

                </div>
            </div>

            <div className='box w-full py-20   flex flex-col  '>
                <div className='px-10 flex justify-between  border-t-[1.6px]  p-5 border-zinc-400'>
                    <h1 className='w-[161.484px]'>
                        Brendan Goss</h1>
                    <h1  >
                        Hypercare Systems</h1>
                    <h1>READ</h1>
                </div>
                <div className=' px-10 flex justify-between border-t-[1.6px]  p-5 border-zinc-400'>
                    <h1 className='w-[161.484px]'>Planetly</h1>
                    <h1 className='w-[199.812px]'>Nina Walloch</h1>
                    <h1>READ</h1>
                </div>
                <div className='px-10  flex justify-between  border-t-[1.6px]  p-5 border-zinc-400 '>
                    <h1 className='w-[161.484px]'>Workiz Easy</h1>
                    <h1 className='w-[199.812px]'> Tomer Levy</h1>
                    <h1>READ</h1>
                </div>
                <div className='px-10  flex justify-between  border-t-[1.6px]  p-5 border-zinc-400 '>
                    <h1 className='w-[161.484px]'>Black Book</h1>
                    <h1 className='w-[199.812px]'>
                        Jaci Smith</h1>
                    <h1>READ</h1>
                </div>
                <div className='px-10  flex justify-between  border-t-[1.6px] border-b-[1.6px] p-5 border-zinc-400'>
                    <h1 >Premium Blend</h1>
                    <h1 className='w-[199.812px]'>

                        Ellen Kim</h1>
                    <h1>READ</h1>
                </div>
            </div>

        </div>
    )
}

export default About2
