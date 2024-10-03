import React, { useEffect, useRef } from 'react'

import Landingpage from './components/landingpage'
import About from './components/about'
import Marquee from './components/Marquee'
import Eyess from './components/Eyess'
import Featured from './components/featured'
import About2 from './components/about2'
import Cards from './components/Cards'
import Footer from './components/footer'
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/locomotive-scroll.css'
import Navbar from './components/Navbar'
const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.01, // Adjust this value for smoother scrolling
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} className='w-full min-h-screen bg-[#F1F1F1]'>
      <Navbar />
      <Landingpage />
      <Marquee />
      <About />
      <Eyess />
      <Featured />
      <About2 />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
