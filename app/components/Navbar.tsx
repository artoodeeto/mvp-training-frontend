import Link from "next/link";
import React from "react";

const links = [
  {
    key: 0,
    ref: "/ipcr",
    name: "IPCR",
  },
  {
    key: 1,
    ref: "/aspect",
    name: "Aspect",
  },
  {
    key: 2,
    ref: "/success_indicator",
    name: "Success Indicator",
  },
  {
    key: 3,
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
            {links.map((link) => (
              <li key={link.key}>
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
