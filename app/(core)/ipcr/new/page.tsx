"use client";

import React, {useState, useEffect} from "react";
import {useFormState} from "react-dom";
import {IPCRNew} from "../actions";
import Options from "../../../components/Options";
import {User} from "@/app/interface/user";
import SubmitBtn from "@/app/components/Buttons/SubmitBtn";
import {getAllUser} from "@/app/backendAPIRoutes/User";
import SuccessIndicatorList from "../components/SuccessIndicatorList";
import LabeledTextArea from "@/app/components/LabeledTextArea";
import NameDate from "../components/NameDate";

const NewIPCR = () => {
  // const [state, formAction] = useFormState(IPCRNew, initState);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await getAllUser();

        setUsers(res.users);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  return <div className="w-10/12 m-auto">{/* <IPCRForm/> */}</div>;
};

export default NewIPCR;
