import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-screen flex justify-between  py-[12rem] px-20 text-[#212121]'>
            <div className='uppercase text-[9vw] font-semibold leading-[7vw] font-["Founders_Grotesk"] tracking-tighter'><h1>Eye- <br /> opening</h1></div>

            <div className=' font-["Founders_Grotesk"] '>
                <div className='uppercase text-[7vw] font-semibold leading-[7vw] tracking-tighter'>
                    <h1>presentation</h1>
                </div>
                <div className='flex justify-between'>


                    <div className='capitalize text-[1.5vw] 
                leading-[1.6vw] tracking-tight '>
                        <p>s. <br /> <br />
                            Instagram  <br />
                            Behance <br />
                            Facebook <br />
                            Linkedin
                        </p>
                        <br /> <br />
                        <p>L. <br /> <br />
                            202-1965 W 4th Ave <br />
                            Vancouver, Canada<br />
                            <br />
                            30 Chukarina St<br />
                            Lviv, Ukraine<br />
                        </p>

                    </div>

                    <div className='capitalize text-[1.5vw] 
                leading-[1.6vw] tracking-tight pt-40'>

                        <p>
                            M: <br />
                            <br /> <br />
                            Home <br />
                            Services <br />
                            Our work <br />
                            About us <br />
                            Insights <br />
                            Contact us
                        </p>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Footer
