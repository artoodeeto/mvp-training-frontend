import Link from "next/link";
import React from "react";

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="navbar bg-base-100">
        <Link className="btn btn-ghost text-xl" href={"/"}>
          Blog
        </Link>
      </div>
      {children}
    </>
  );
}
