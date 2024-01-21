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
];

const Main = () => {
  return (
    <>
      <h1>Main</h1>
      <ul>
        {links.map((link) => (
          <li key={link.key}>
            <Link href={link.ref}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Main;

// export default function HomeLayout({children}: {children: React.ReactNode}) {
//   return (
//     <section>
//       <h1>qwe</h1>
//       {children}
//     </section>
//   );
// }
