"use client";
import React, {useEffect, useState} from "react";
import SuccessIndicatorForm from "../SuccessIndicatorFom/SuccessIndicatorForm";
import {useFormState} from "react-dom";
// import {
//   deleteSuccessIndicator,
//   getSuccessIndicator,
//   updateSuccessIndicator,
// } from "../actions";
import SubmitBtn from "@/app/components/Buttons/SubmitBtn";
import DeleteBtn from "@/app/components/Buttons/DeleteBtn";
import {
  deleteSuccessIndicator,
  getSuccessIndicator,
  updateSuccessIndicator,
} from "@/app/backendAPIRoutes/success_indicator";

const initState = {
  message: "",
};

const SuccessIndicatorEdit = ({params}: {params: {id: string}}) => {
  const id = params.id;
  const [si, setSI] = useState({
    major_final_output: "",
    ppa: "",
    target_measure: "",
  });
  useEffect(() => {
    const getSIWithID = async () => {
      try {
        const res = await getSuccessIndicator(id);
        setSI({...res});
      } catch (error) {
        console.log(error);
      }
    };
    getSIWithID();
  }, [id]);

  const [state, formAction] = useFormState(updateSuccessIndicator, initState);
  const handleClick = (event: any) => {
    event.preventDefault();
    deleteSuccessIndicator(id);
  };
  return (
    <div className="m-auto mt-20 max-w-max rounded-lg bg-white px-4 py-8 text-white shadow sm:px-6 md:px-8 lg:px-10 dark:bg-gray-800">
      <form action={formAction} className="flex w-full flex-col justify-around">
        <div className="relative">
          <input type="hidden" name="id" value={id} />
          <div className="flex flex-col justify-between">
            <SuccessIndicatorForm formValues={{...si}} />
          </div>
          <div className="flex justify-between">
            <SubmitBtn />
            {/* <DeleteBtn handleClick={handleClick} /> */}
          </div>
        </div>
        <p role="status">{state?.message}</p>
      </form>
    </div>
  );
};

export default SuccessIndicatorEdit;
