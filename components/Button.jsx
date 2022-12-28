import React from "react";
import { CgMailForward } from "react-icons/cg";

const Button = (props) => {
  return (
    <button className="group bg-gold btn text-2xl text-softBlack h over:text-black font-semibold rounded-full">
      {props.children}
      <span className="bg-white group-hover:bg-softBlack">
        <CgMailForward className="text-black group-hover:text-white absolute text-center mx-auto text-5xl" />
      </span>
    </button>
  );
};

export default Button;
