import React from "react";
import banner from '../../public/banner.png';

const Banner = () => {
  return (
    <>
      <div className="max-w-space-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-9 ">
        <div className="order-2 md:order-1 w-full md:w-1/2  mt-15 md:mt-32">
          <div className="space-y-10">
            <h1 className="text-5xl font-bold mt-10">
              Hello, Welcome here to learn{" "}
              <span className="text-pink-500 text-4xl">Something new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              facere quam repellat, quae blanditiis ipsa earum quas, adipisci
              maiores nam praesentium?
            </p>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn btn-secondary mt-6">Secondary</button>
        </div>
        <div className="order-1 w-full md:w-1/2">
           <img className="mt-28 ml-20 w-140 h-100" src={banner} alt="" />

        </div>
      </div>
    </>
  );
};

export default Banner;
