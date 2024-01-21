import Link from "next/link";
import React from "react";

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Link href={"/"}> Home </Link>
      {children}
    </>
  );
}
