import Link from 'next/link';
import React from 'react';
import {
  BsLinkedin,
  BsTwitter,
  BsYoutube,
  BsGithub,
  BsStackOverflow,
} from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="hidden md:block">
      <div className="flex flex-col p-1 gap-2">
        <div className="hover:text-softBlack text-gold text-4xl p-3 hover:bg-yellow-300 rounded-md">
          <Link href="">
            <BsLinkedin />
          </Link>
        </div>
        <div className="hover:text-softBlack text-gold text-4xl p-3 hover:bg-yellow-300 rounded-md">
          <Link href="">
            <BsTwitter />
          </Link>
        </div>
        <div className="hover:text-softBlack text-gold text-4xl p-3 hover:bg-yellow-300 rounded-md">
          <Link href="">
            <BsYoutube />
          </Link>
        </div>
        <div className="hover:text-softBlack text-gold text-4xl p-3 hover:bg-yellow-300 rounded-md">
          <Link href="">
            <BsGithub />
          </Link>
        </div>
        <div className="hover:text-softBlack text-gold text-4xl p-3 hover:bg-yellow-300 rounded-md">
          <Link href="">
            <BsStackOverflow />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
