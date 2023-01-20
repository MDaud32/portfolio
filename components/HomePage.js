import React from "react";
import SocialMedia from "./SocialMedia";
import { CgMailForward } from "react-icons/cg";
import Background from "./Background";
``;
const HomePage = () => {
  return (
    <div className="" id="/">
      {/* <Background /> */}
      <div className=" flex flex-row py-40 ">
        <div className="">
          <SocialMedia />
        </div>
        <div className="contianer md:ml-28 mx-auto md:p-0 p-8 space-y-4">
          <h1 className="text-xl text-gold">Hi, my name is</h1>
          <h1 className="text-gray-100 text-5xl md:text-[5rem] font-bold hover:tracking-widest duration-300">
            Muhammad Daud
          </h1>
          <h1 className="text-gray-300 text-4xl md:text-[4rem] font-bold">
            I build things for the web
          </h1>
          <p className="text-gray-300 max-w-lg text-xl pt-4">
            I’m a Frontend focused Web Developer building the Frontend of
            Websites and Web Applications that leads to the success of the
            overall product.
          </p>
          <button className="group bg-gold btn text-2xl text-softBlack h over:text-black font-semibold rounded-full">
            Projects
            <span className="bg-white group-hover:bg-softBlack">
              <CgMailForward className="text-black group-hover:text-white absolute text-center mx-auto text-5xl" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
