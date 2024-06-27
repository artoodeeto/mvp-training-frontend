import {IPCRForm} from "@/app/(core)/ipcr/components/IPCRForm";
import React from "react";

const CreateUserIPCR = ({params}: {params: {userId: string}}) => {
  const id = Number(params.userId);

  return (
    <div className="flex justify-center">
      <IPCRForm />
    </div>
  );
};

export default CreateUserIPCR;
