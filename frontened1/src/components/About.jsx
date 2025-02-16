import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
    <Navbar/>
    <div className='h-screen mt-30 max-w-space-2xl container mx-auto md:px-20 px-4'>
       <h1 className='text-4xl font-bold'>About_<span className='text-pink-500'> Us</span></h1>
       <div className='mt-3'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit adipisci recusandae minima laudantium quisquam doloremque, eaque iusto, quam modi, animi repellat nesciunt ipsum.</p>
       </div>
    </div>
    <Footer/>
    </>
  )
}

export default About