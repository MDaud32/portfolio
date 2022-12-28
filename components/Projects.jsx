import Image from "next/image";
import React from "react";
import metrika from "../public/images/metrika.png";
import game from "../public/images/memory-game.png";
import portfolio from "../public/images/portfolio.png";
import cocktail from "../public/images/cocktail.png";
import Button from "./Button";

const Projects = () => {
  return (
    <div className="" id="work">
      <div className="flex flex-col mx-auto text-center">
        <h1 className="text-5xl text-white font-bold">PROJECTS</h1>
        <div className="border-b-8 rounded-full border-gold w-20 mx-auto mt-4"></div>
        <p className="max-w-2xl mx-auto text-gray-400 text-xl mt-4 font-semibold p-4">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </p>
      </div>
      <div className="">
        <div className="w-full flex flex-col md:flex-row mx-auto justify-center items-center">
          <Image src={metrika} alt="project 1" className="md:w-1/2 z-10" />
          <div className="md:w-1/2 mx-8 text-center md:text-left bg-gray-600/40 p-3 rounded-md mt-8">
            <h1 className="text-3xl font-bold items-center text-white">
              Metrika
            </h1>
            <p className="text-gray-300 text-lg max-w-xl mt-4 mb-8">
              Metrika is a website that offers web development and design
              services to its clients. The team at Metrika is dedicated to
              creating user-friendly, visually appealing websites that meet the
              needs of their clients and help businesses succeed online.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button>Detail</Button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row mx-auto justify-center items-center">
          <Image src={game} alt="project 1" className="md:w-1/2 z-10" />
          <div className="md:w-1/2 mx-8 text-center md:text-left bg-gray-600/40 p-3 rounded-md mt-8">
            <h1 className="text-3xl font-bold items-center text-white">
              Memory game
            </h1>
            <p className="text-gray-300 text-lg max-w-xl mt-4 mb-8">
              A memory game is a game designed to test and improve a
              person&apos;s memory. It usually consists of a set of cards or
              other game pieces with images or words on them. The goal is to
              turn over pairs of matching cards or game pieces by remembering
              where they are located on the board.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button>Detail</Button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row mx-auto justify-center items-center">
          <Image src={portfolio} alt="project 1" className="md:w-1/2 z-10" />
          <div className="md:w-1/2 mx-8 text-center md:text-left bg-gray-600/40 p-3 rounded-md mt-8">
            <h1 className="text-3xl font-bold items-center text-white">
              Portfolio Website
            </h1>
            <p className="text-gray-300 text-lg max-w-xl mt-4 mb-8">
              A portfolio website is a personal website or online platform that
              showcases the work and achievements of an individual or
              organization. It typically includes a selection of projects,
              accomplishments, and creative works, along with information about
              the creator&apos;s skills, experience, and background.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button>Detail</Button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row mx-auto justify-center items-center">
          <Image src={cocktail} alt="project 1" className="md:w-1/2 z-10" />
          <div className="md:w-1/2 mx-8 text-center md:text-left bg-gray-600/40 p-3 rounded-md mt-8">
            <h1 className="text-3xl font-bold items-center text-white">
              Cocktail-Db
            </h1>
            <p className="text-gray-300 text-lg max-w-xl mt-4 mb-8">
              A cocktail website that provides information about cocktails,
              including cocktail recipes, ingredients, and history. It may also
              provide information about different types of alcohol and how to
              mix them, as well as tips for hosting a cocktail party or event.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button>Detail</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
// Metrika is a website that offers web development and design services to its clients. The team at Metrika is dedicated to creating user-friendly, visually appealing websites that meet the needs of their clients and help businesses succeed online. Whether you need a new website built from scratch, an existing website redesigned, or ongoing support and maintenance, Metrika has the skills and expertise to help you achieve your goals. With a focus on quality and customer satisfaction, Metrika aims to be the go-to choice for all your web development and design needs.
// A memory game is a game designed to test and improve a person's memory. It usually consists of a set of cards or other game pieces with images or words on them. The goal is to turn over pairs of matching cards or game pieces by remembering where they are located on the board.
//There are many variations of memory games, but the basic concept is the same. The game may be played with a specific theme, such as animals, food, or famous people, or it may simply consist of a set of randomly chosen images or words. Some memory games may have additional elements, such as time limits or challenges to remember sequences of cards rather than just matching pairs. Memory games can be played by people of all ages and can be a fun and educational activity for both children and adults.
