import React from "react";
import Logo from "../assets/logo.webp";
import { FaSearch } from "react-icons/fa";

const Navbar = ({ events }) => {
  const noOfMale = events.filter((event) => event.Gender === "Male").length;
  const noOfFemale = events.filter((event) => event.Gender === "Female").length;
  return (
    <div className="bg-sky-900 px-10 py-2 text-white">
      <div className="flex justify-between items-center">
        <img src={Logo} alt="" />
        <div className="flex gap-10">
          <div className="flex items-center gap-3">
            <input type="text" className="bg-inherit px-2" />
            <FaSearch />
          </div>
          <div className="flex gap-3">
            <p className="w-12 h-7 bg-lime-500 text-center leading-7">
              {noOfMale}
            </p>
            <p className="w-12 h-7 bg-orange-600 text-center leading-7">
              {noOfFemale}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
