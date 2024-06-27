"use client";

import {getUserIpcrList} from "@/app/backendAPIRoutes/User";
import {useUserContext} from "@/app/context/user";
import {IPCRUserList} from "@/app/interface/ipcr";
import {User} from "@/app/interface/user";
import Link from "next/link";
import React, {useEffect, useState} from "react";

const UserIPCR = ({params}: {params: {userId: string}}) => {
  const {userId} = params;
  const [user, setUser] = useState<User>();
  const [ipcrs, setIPCR] = useState<IPCRUserList>({
    id: 0,
    ratee: [],
  });
  const userCon = useUserContext();

  useEffect(() => {
    const getIPCR = async () => {
      try {
        const ipcrList = await getUserIpcrList(userId);
        setIPCR(ipcrList);
        setUser(userCon?.user);
      } catch (error) {
        console.log(error);
      }
    };
    getIPCR();
  }, [userId, userCon]);

  return <div> IPCR LIST</div>;
};

export default UserIPCR;
