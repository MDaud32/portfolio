import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
// import Button from './Button';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from '../public/images/mainlogo.png';

const Nav = () => {
  let Links = [
    { title: '01.', name: 'About', link: '/' },
    { title: '02.', name: 'Experience', link: '/' },
    { title: '03.', name: 'Work', link: '/' },
    { title: '04.', name: 'Contact', link: '/' },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="z-20 shadow-md w-full fixed top-0 left-0 md:bg-gray-700 md:opacity-70">
      <div className="md:flex items-center justify-between  py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gold">
          <Link href="/">
            <Image src={logo} alt="" className="text-gold w-16" />
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden  text-gold">
          <button>{open ? <AiOutlineClose /> : <AiOutlineMenu />}</button>
        </div>

        <ul
          className={`md:flex md:items-center items-end text- md:pb-0 pb-12 absolute md:static md:z-auto text-white md:bg-gray-700 bg-gray-900 opacity-80 hover:text-gold z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in font-rubik ${
            open ? 'top-20 ' : 'top-[-490px]'
          }`}>
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl md:px-2 px-10 md:my-0 my-7 justify-end flex">
              <div className="flex items-end gap-1 group">
                <div className="text-sm text-gold group-hover:border-gray-400">
                  {link.title}
                </div>
                <Link
                  href={link.link}
                  className="text-white font-bold hover:text-gold duration-500">
                  {link.name}
                </Link>
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
