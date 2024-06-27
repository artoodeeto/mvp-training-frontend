"use client";
import {IPCRForm} from "@/app/(core)/ipcr/components/IPCRForm";
import {updateIPCR, readIPCR} from "@/app/backendAPIRoutes/Ipcr";
import {getAllUser} from "@/app/backendAPIRoutes/User";
import {useUserContext} from "@/app/context/user";
import {IIPCR} from "@/app/interface/ipcr";
import {IPSA} from "@/app/interface/performance_standard";
import {ICompleteIPCR} from "@/app/interface/success_indicator";
import {User} from "@/app/interface/user";
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import {useFormState} from "react-dom";

const initState = {
  message: "",
};

const EditUserIPCR = ({params}: {params: {userId: string; ipcrId: string}}) => {
  const {userId, ipcrId} = params;
  const userCon = useUserContext();
  const router = useRouter();
  const [comIPCR, setcomIPCR] = useState<IPSA[]>([]);
  const [ipcr, setIPCR] = useState<IIPCR>();
  const [users, setUsers] = useState<User[]>([]);
  const [state, formAction] = useFormState(updateIPCR, initState);

  useEffect(() => {
    const getIPCR = async () => {
      try {
        const dataIpcr = await readIPCR(ipcrId);
        const res = await getAllUser();
        setcomIPCR(dataIpcr.completeSuccessIndicators);
        setIPCR(dataIpcr);
        setUsers(res.users);
      } catch (error) {
        console.log(error);
      }
    };
    getIPCR();
  }, [userId, ipcrId]);

  if (!userCon?.user) return router.push(`/user/${userId}`);
  return (
    <div>
      {/* <IPCRForm
        users={users}
        formAction={formAction}
        formState={state}
        user={userCon?.user}
        ipcr={ipcr}
        completeSuccessIndicator={comIPCR}
      /> */}
    </div>
  );
};

export default EditUserIPCR;
