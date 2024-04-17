"use client";
import SubmitBtn from "@/app/components/Buttons/SubmitBtn";
import React, {useState} from "react";
import {useFormState} from "react-dom";
import AspectForm from "../AspectForm/AspectForm";
import {AspectRowForm} from "@/app/interface/aspects";
import {submitNewAspect} from "@/app/backendAPIRoutes/aspect";

const initState = {
  message: "",
};

const AspectNew = () => {
  const newRow = {
    si: {
      major_final_output: "",
      ppa: "",
      target_measure: "",
    },
    mov: "",
    aow: "",
  };

  const [state, formAction] = useFormState(submitNewAspect, initState);
  const [rows, setInputRows] = useState<AspectRowForm[]>([newRow]);
  const addRow = () => setInputRows([newRow]);

  return (
    <div className="max-w-max px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 m-auto mt-20 text-white">
      <button
        type="button"
        className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-fit transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        onClick={addRow}
      >
        Add row
      </button>

      <form action={formAction} className="flex flex-col w-full justify-around">
        <div className="relative">
          <div className="flex flex-col justify-between">
            <AspectForm inputRows={rows} />
          </div>
          <div className="mt-2 w-32">
            <SubmitBtn />
          </div>
        </div>
        <p role="status">{state?.message}</p>
      </form>
    </div>
  );
};

export default AspectNew;
