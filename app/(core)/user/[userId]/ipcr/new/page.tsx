"use client";
import {IPCRForm} from "@/app/(core)/ipcr/components/IPCRForm";
import {useUserContext} from "@/app/context/user";
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import {getAllUser} from "../../../actions";
import {User} from "@/app/interface/user";
import {useFormState} from "react-dom";
import {IPCRNew} from "@/app/(core)/ipcr/actions";
import SuccessIndicatorList from "@/app/(core)/ipcr/components/SuccessIndicatorList";

const initState = {
  message: "",
};

const CreateIPCR = ({params}: {params: {userId: string}}) => {
  const id = Number(params.userId);
  const userCon = useUserContext();
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [state, formAction] = useFormState(IPCRNew, initState);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await getAllUser();
        console.log(res, userCon);
        setUsers(res.users);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, [router, id, userCon]);

  if (!userCon?.user) return router.push(`/user/${id}`);

  return (
    <div>
      <IPCRForm
        users={users}
        formAction={formAction}
        formState={state}
        user={userCon.user}
        completeSuccessIndicator={userCon.user.performanceStandard.psa}
      ></IPCRForm>
    </div>
  );
};

export default CreateIPCR;
