import React from "react";
import { Link } from "react-router-dom";
// import Footer from "./Footer";

const Head = () => {
  return (
    <div className=" flex space-x-64 h-16 text-white items-center  bg-black col-span-8 ">
      <li className="z-50 ml-6 w-60">Logo</li>
      <ul className="absolute space-x-36 flex right-0 p-10">
        <Link to="/about"></Link>
        <li className="z-50">
          <a href="/"> Home </a>
        </li>
        <li className="z-50">
          <Link to="https://www.facebook.com/login/">About</Link>
        </li>
        <li>Contacts</li>
        <li>Shop</li>
      </ul>
    </div>
  );
};

export default Head;
