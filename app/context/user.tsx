import {createContext, useContext, useState} from "react";
import {User} from "../interface/user";

type UserTypeContext = {user: User | undefined; setUser: any} | null;

export const UserContext = createContext<UserTypeContext>(null);

export function UserProvider({children}: {children: React.ReactNode}) {
  let [user, setUser] = useState<User>();
  // !! Fixme: value type
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
