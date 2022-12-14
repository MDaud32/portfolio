import Link from "next/link";
import React from "react";
import { CgMailForward } from "react-icons/cg";
import Skills from "./Skills";

const About = () => {
  return (
    <div id="about" className="bg-softBlack text-center mx-auto py-10">
      <div className="flex flex-col">
        <h1 className="text-5xl text-white font-bold">About Me</h1>
        <div className="border-b-8 rounded-full border-gold w-20 mx-auto mt-4"></div>
        <p className="max-w-2xl mx-auto text-gray-400 text-xl mt-4 font-semibold p-4">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>
      {/* skills and bio */}
      <div className="w-full p-8 flex flex-col md:flex-row mt-24">
        {/* about me and my web development */}
        <div className="md:w-1/2 ">
          <h1 className="text-4xl text-white font-bold md:text-start text-center">
            Get to know me!
          </h1>
          <p className="max-w-xl text-gray-300 text-xl text-start mt-6">
            I&apos;m a{" "}
            <span className="font-bold text-white border-b-2 border-gold">
              Frontend Web Developer
            </span>{" "}
            building the Front-end of Websites and Web Applications that leads
            to the success of the overall product. Check out some of my work in
            the{" "}
            <span className="font-bold text-white border-b-2 border-gold">
              Projects
            </span>{" "}
            section. <br />
            <br /> I also like sharing content related to the stuff that I have
            learned over the years in{" "}
            <span className="font-bold text-white border-b-2 border-gold">
              Web Development
            </span>{" "}
            so it can help other people of the Dev Community. Feel free to
            Connect or Follow me on my{" "}
            <Link href="/" className="text-gold underline font-bold">
              Linkedin
            </Link>{" "}
            where I post useful content related to Web Development and
            Programming <br /> <br /> I&apos;m{" "}
            <span className="font-bold text-white border-b-2 border-gold">
              open
            </span>{" "}
            to Job opportunities where I can contribute, leahrn and grow. If you
            have a good opportunity that matches my skills and experience then
            don&apos;t hesitate to{" "}
            <span className="font-bold text-white border-b-2 border-gold">
              contact
            </span>{" "}
            me.
          </p>
          <button className="group bg-gold btn text-2xl text-softBlack h over:text-black font-semibold rounded-md mt-8 mx-auto md:mx-0">
            Contact
            <span className="bg-white group-hover:bg-softBlack">
              <CgMailForward className="text-black group-hover:text-white absolute text-center mx-auto text-5xl" />
            </span>
          </button>
        </div>
        {/* skill section */}

        <div className="flex flex-col md:w-1/2 mt-10 md:mt-0">
          <h1 className="text-4xl text-white font-bold md:text-start text-center">
            My Skills
          </h1>
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;
