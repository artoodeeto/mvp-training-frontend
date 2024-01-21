import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
      {/* <a
        href="#"
        className="flex px-6 py-2 text-indigo-500 border-b-2 border-indigo-500"
      >
        Home
      </a>
      <a href="#" className="flex px-6 py-2 hover:text-indigo-500">
        Watch
      </a>
      <a href="#" className="flex px-6 py-2 hover:text-indigo-500">
        Product
      </a>
      <a href="#" className="flex px-6 py-2 hover:text-indigo-500">
        Contact
      </a>
      <a href="#" className="flex px-6 py-2 hover:text-indigo-500">
        Carrer
      </a> */}
      <Link href={"/login"}>Login</Link>
    </nav>
  );
};

export default Navbar;
