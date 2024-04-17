import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">GENSAN</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/login"}>Login</Link>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
