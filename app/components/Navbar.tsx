import Link from "next/link";
import React from "react";

const links = [
  {
    ref: "/ipcr",
    name: "IPCR",
  },
  {
    ref: "/opcr",
    name: "OPCR",
  },
  {
    ref: "/aspect",
    name: "Aspect",
  },
  {
    ref: "/success_indicator",
    name: "Success Indicator",
  },
  {
    ref: "/user",
    name: "User",
  },
];

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link className="btn btn-ghost text-xl" href="/home">
            GENSAN
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links.map((link, i) => (
              <li key={i}>
                <Link href={link.ref}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">~~~~</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
