import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from './Cards'
import {Link} from 'react-router-dom'

const Course = () => {

 const [book,setBook]=useState([]);

 useEffect(()=>{
  const getBook=async()=>{
        try {
          const res=await axios.get("http://localhost:4001/book");
          console.log(res.data);
          setBook(res.data)
          
        } catch (error) {
           console.log(error);
        }
  };
  getBook();
},[])

  return (
    <>
    <div className='max-w-space-2xl container mx-auto md:px-20 px-4'>
       <div className='mt-15 items-center  justify-center text-center'>
        <h1 className='pt-20 font-semibold text-2xl md:text-4xl' >We're delighted to have you <span className='text-pink-500'>Here!:)</span></h1>
        <p className='mt-4 md:mt-5 text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit sequi assumenda neque enim! Aliquam aut expedita ut illo odio suscipit asperiores alias. Nesciunt possimus, assumenda beatae perferendis ipsam a maxime cum officiis laborum, in iusto necessitatibus ipsum quod reiciendis numquam nemo dolore dignissimos asperiores optio ut accusamus, vitae eaque! Repellendus.</p>
        <Link to={"/"}>
        <button className='bg-pink-500 px-3 py-1 rounded-md hover:bg-pink-700 duration-300 cursor-pointer hover:text-white font-semibold mt-4'>Back</button>
        </Link>
       </div>
       <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
        {book.map((item)=>(
          <Cards item={item} key={item.id}/>
        ))

        }
       </div>
    </div>
    </>
  )
}

export default Course 