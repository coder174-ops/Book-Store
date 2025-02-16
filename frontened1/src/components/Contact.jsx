import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className=" flex  justify-center mt-15 h-screen dark:bg-slate-900 dark:text-white dark:border">
      <div className="mt-20 ">
          <h1 className="text-4xl font-semibold my-4">Contact-<span className="text-pink-500">Us</span> </h1>
          <div className="flex flex-col shadow-2xl space-y-2 w-[300px]">
            <label className="">Name
          <input type="text" placeholder="Enter your fullname" className="outline-none border border-gray-600 hover:border-gray-300  p-2 rounded-md  w-full max-w-xs" />
          </label>
          <label className="">Email
          <input type="text" placeholder="Hello123@gmail.com" className="outline-none border border-gray-600 hover:border-gray-300  p-2 rounded-md w-full max-w-xs" />
          </label>
          <label className="">Message
          <textarea className="outline-none border border-gray-600 hover:border-gray-300  p-2 rounded-md w-full max-w-xs h-[130px]" placeholder="Type your Message... " ></textarea>
          </label>
          </div>
          <button className="bg-blue-600 hover:bg-blue-800 duration-200 rounded-md px-3 py-1.5 cursor-pointer">Submit</button>
        </div>
  
      </div>
      <Footer />
    </>
  );
};

export default Contact;
