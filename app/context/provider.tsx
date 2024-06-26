"use client";
import {UserProvider} from "./user";

export function Providers({children}: {children: React.ReactNode}) {
  return <UserProvider>{children}</UserProvider>;
}
