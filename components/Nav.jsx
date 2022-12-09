import React, { useState } from 'react';
// import Button from './Button';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Nav = () => {
  let Links = [
    { title: '01.', name: 'Home', link: '/' },
    { title: '02.', name: 'About', link: '/' },
    { title: '03.', name: 'Experience', link: '/' },
    { title: '04.', name: 'Contact', link: '/' },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 bg-softBlack">
      <div className="md:flex items-center justify-between  py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gold">
          D
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden  text-gold">
          <button>{open ? <AiOutlineClose /> : <AiOutlineMenu />}</button>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto text-gray-400 hover:text-gold z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20 ' : 'top-[-490px]'
          }`}>
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <div className="flex gap-1 group">
                <div className="text-gold group-hover:border-gray-400">
                  {link.title}
                </div>
                <a
                  href={link.link}
                  className="text-gray-400 font-bold hover:text-gold duration-500">
                  {link.name}
                </a>
              </div>
            </li>
          ))}
          {/* <div className="flex flex-col md:flex-row gap-4 md:gap-0 w-1/2">
            <Button>Log In</Button>
            <Button>Log Out</Button>
          </div> */}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
