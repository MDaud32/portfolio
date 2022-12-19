import React from "react";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import {
  DiCss3,
  DiReact,
  DiGit,
  DiResponsive,
  DiNodejsSmall,
} from "react-icons/di";
import {
  SiJavascript,
  SiSass,
  SiTailwindcss,
  SiMaterialui,
  SiTypescript,
  SiMysql,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";
import { BsFillTerminalFill } from "react-icons/bs";

const Skills = () => {
  return (
    <div className="flex flex-row mt-8 flex-wrap max-w-xl gap-4">
      <div className="flex flex-row items-center bg-gray-100 p-2 rounded-lg text-4xl shadow-md shadow-black  duration-100 ease-in-out hover:bg-yellow-100 hover:animate-bounce">
        <AiFillHtml5 className="text-red-600" />
        <p className="text-xl font-semibold">HTML</p>
      </div>
      <div className="flex flex-row items-center bg-gray-100 p-2 rounded-lg text-4xl shadow-md shadow-black  duration-100 ease-in-out hover:bg-yellow-100 hover:animate-bounce">
        <DiCss3 className="text-blue-600" />
        <p className="text-xl font-semibold">CSS</p>
      </div>
      <div className="flex flex-row items-center bg-gray-100 p-2 rounded-lg text-4xl shadow-md shadow-black  duration-100 ease-in-out hover:bg-yellow-100 hover:animate-bounce">
        <SiJavascript className="text-yellow-500 text-3xl mr-1" />
        <p className="text-xl font-semibold">JavaScript</p>
      </div>
      <div className="flex flex-row items-center bg-gray-100 p-2 rounded-lg text-4xl shadow-md shadow-black  duration-100 ease-in-out hover:bg-yellow-100 hover:animate-bounce">
        <DiReact className="text-blue-600" />
        <p className="text-xl font-semibold">React.Js</p>
      </div>
      <div className="flex flex-row items-center bg-gray-100 p-2 rounded-lg text-4xl shadow-md shadow-black  duration-100 ease-in-out hover:bg-yellow-100 hover:animate-bounce">
        <TbBrandNextjs className="text-black" />
        <p className="text-xl font-semibold">Next.Js</p>
      </div>
      <div className="flex flex-row items-center bg-gray-100 p-2 rounded-lg text-3xl shadow-md shadow-black  duration-100 ease-in-out hover:bg-yellow-100 hover:animate-bounce">
        <SiSass className="text-pink-600 mr-1" />
        <p className="text-xl font-semibold">SASS</p>
      </div>
      <div className="flex flex-row items-center bg-gray-100 p-2 rounded-lg text-4xl shadow-md shadow-black  duration-100 ease-in-out hover:bg-yellow-100 hover:animate-bounce">
        <DiGit className="text-red-600" />
        <p className="text-xl font-semibold">GIT</p>
      </div>
      <div className="flex flex-row items-center bg-gray-100 p-2 rounded-lg text-4xl shadow-md shadow-black  duration-100 ease-in-out hover:bg-yellow-100 hover:animate-bounce">
        <AiFillGithub className="text-black " />
        <p className="text-xl font-semibold">Github</p>
      </div>
      <div className="flex flex-row items-center bg-gray-100 p-2 rounded-lg text-4xl shadow-md shadow-black  duration-100 ease-in-out hover:bg-yellow-100 hover:animate-bounce">
        <SiTailwindcss className="text-blue-600 mr-1" />
        <p className="text-xl font-semibold">Tailwind CSS</p>
      </div>
      <div className="flex flex-row items-center bg-gray-100 p-2 rounded-lg text-4xl shadow-md shadow-black  duration-100 ease-in-out hover:bg-yellow-100 hover:animate-bounce">
        <FcGoogle className="text-red-600" />
        <p className="text-xl font-semibold">SEO</p>
      </div>
      <div className="flex flex-row items-center bg-gray-100 p-2 rounded-lg text-4xl shadow-md shadow-black  duration-100 ease-in-out hover:bg-yellow-100 hover:animate-bounce">
        <DiResponsive className="text-black" />
        <p className="text-xl font-semibold">Responsive Design</p>
      </div>
      <div className="flex flex-row items-center bg-gray-100 p-2 rounded-lg text-4xl shadow-md shadow-black  duration-100 ease-in-out hover:bg-yellow-100 hover:animate-bounce">
        <SiMaterialui className="text-blue-600 mr-1" />
        <p className="text-xl font-semibold">Material UI</p>
      </div>
      <div className="flex flex-row items-center bg-gray-100 p-2 rounded-lg text-4xl shadow-md shadow-black  duration-100 ease-in-out hover:bg-yellow-100 hover:animate-bounce">
        <BsFillTerminalFill className="text-black mr-1 text-3xl" />
        <p className="text-xl font-semibold">Terminal</p>
      </div>
      <div className="flex flex-row items-center bg-gray-100 p-2 rounded-lg text-4xl shadow-md shadow-black  duration-100 ease-in-out hover:bg-yellow-100 hover:animate-bounce">
        <DiNodejsSmall className="text-green-600" />
        <p className="text-xl font-semibold">Node.Js</p>
      </div>
      <div className="flex flex-row items-center bg-gray-100 p-2 rounded-lg text-4xl shadow-md shadow-black  duration-100 ease-in-out hover:bg-yellow-100 hover:animate-bounce">
        <SiTypescript className="text-blue-600 mr-1 text-3xl" />
        <p className="text-xl font-semibold">TypeScript</p>
      </div>
      <div className="flex flex-row items-center bg-gray-100 p-2 rounded-lg text-4xl shadow-md shadow-black  duration-100 ease-in-out hover:bg-yellow-100 hover:animate-bounce">
        <DiNodejsSmall className="text-green-600" />
        <p className="text-xl font-semibold">Express Basics</p>
      </div>
      <div className="flex flex-row items-center bg-gray-100 p-2 rounded-lg text-4xl shadow-md shadow-black  duration-100 ease-in-out hover:bg-yellow-100 hover:animate-bounce">
        <SiMysql className="text-red-600 mr-1" />
        <p className="text-xl font-semibold">SQL Basics</p>
      </div>
    </div>
  );
};

export default Skills;
