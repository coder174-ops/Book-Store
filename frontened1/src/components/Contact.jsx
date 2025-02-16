import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className=" flex  justify-center mt-15 h-screen dark:bg-slate-900 dark:text-white dark:border">
        <div className="mt-20 space-y-2 w-[400px] h-[400px] border-0 shadow-2xl px-4 py-9">
          <h1 className="text-3xl font-bold flex justify-center ">
            Contact-<span className="text-pink-500">Us</span>
          </h1>
          {/* name */}
          <label className=" flex items-center rounded-md gap-2 text-2sm">
            Name
            <input
              type="name"
              className="grow rounded px-3 py-0.5"
              placeholder="Enter Your fullName"
            />
          </label>
          {/* Email */}
          <label className=" flex items-center  gap-2 text-2sm">
            Email
            <input
              type="email"
              className="grow rounded px-3 py-0.5 "
              placeholder="tech_neeraj123@gmail.com"
            />
          </label>
          {/* Phone No. */}
          <label className=" flex items-center  gap-2 text-2sm">
            phone No.
            <input
              type="email"
              className="grow rounded px-3 py-0.5 "
              placeholder="Enter your phoneNo."
            />
        </label>
          {/* message */}
        <textarea className="textarea outline-none border-1 h-30 dark:bg-slate-900 dark:text-white dark:border-white" placeholder="Message me"></textarea>
        <button className="bg-blue-700 rounded px-3 py-1 hover:bg-blue-800 duration-200 text-white">Submit</button>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
