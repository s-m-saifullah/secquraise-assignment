import React from "react";
import { FaBars } from "react-icons/fa";
import { RiLoginBoxLine } from "react-icons/ri";

const LeftSideBar = () => {
  return (
    <div className="col-span-1 h-full bg-sky-400 flex flex-col items-end justify-between px-7 py-5 -translate-x-1/2">
      <FaBars className="text-2xl text-gray-600 cursor-pointer" />
      <RiLoginBoxLine className="text-2xl text-white cursor-pointer" />
    </div>
  );
};

export default LeftSideBar;
