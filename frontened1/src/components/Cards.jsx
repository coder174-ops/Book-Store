import React from 'react'

const Cards = ({item}) => {
  return (
    <>
    <div className='mt-4 mb-2 flex flex-col md:flex flex-row'>
    <div className="card bg-base-100  sm:w-50 md:w-90 lg:w-105 shadow-xl cursor-pointer hover:scale-103 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src={item.image}
      alt="books" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline px-2 py-2 rounded-md ">${item.price}</div>
      <div className="badge badge-outline hover:bg-pink-500 hover:text-white px-1 py-3 rounded-md cursor-pointer">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards