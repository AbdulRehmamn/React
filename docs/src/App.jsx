import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Button  from './Components/Button'
import Trust from './Components/Trust'

import AboutSection from './Components/About'
import StickyProjectSection from './Components/Sticky'
import ValueStatement from './Components/Value'


import PricingCard from './Components/Pricing'
import Reviews from './Components/Review'

import TestimonialCard from './Components/Ex'
import Expertise from './Components/Expertise'

import How from './Components/How'
import Footer from './Components/Footer'

















function App() {
  return (
    <div className='w-full max-h-screen h-auto  bg-zinc-950  '>
    
    < Navbar />
    < Header />
    <div className='flex justify-center mt-[30px]'>
    < Button  text="See Plans " className="flex justify-center"/>
    </div>

    <Trust />
     <AboutSection />
   
 <StickyProjectSection />
    <div className='flex justify-center mt-4 '>
   < Button text="View Our Work" />
   </div>
 <div className='"w-full min-h-screen flex flex-col items-center"'>
   < ValueStatement />
   

  </div> 
  <div className=''><PricingCard /></div>
  
 < Reviews />
< TestimonialCard />
< Expertise />

< How />
< Footer />





 


</div>

  );
}


export default App