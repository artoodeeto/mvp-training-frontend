"use client";
import React, {useEffect, useState} from "react";
import SuccessIndicatorForm from "../SuccessIndicatorFom/successIndicatorForm";
import {useFormState} from "react-dom";
import {
  deleteSuccessIndicator,
  getSuccessIndicator,
  updateSuccessIndicator,
} from "../actions";
import SubmitBtn from "@/app/components/SubmitBtn";

const initState = {
  message: "",
};

const SuccessIndicatorUpdate = ({params}: {params: {id: string}}) => {
  const id = params.id;
  const [si, setSI] = useState({
    major_final_output: "",
    title: "",
    target_measure: "",
  });
  useEffect(() => {
    console.log("WTF");
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
    <div className="max-w-max px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 m-auto mt-20 text-white">
      <form action={formAction} className="flex flex-col w-full justify-around">
        <div className="relative">
          <input type="hidden" name="id" value={id} />
          <div className="flex flex-col justify-between">
            <SuccessIndicatorForm formValues={{...si}} />
          </div>
          <div className="flex justify-between">
            <SubmitBtn />
            <button
              onClick={handleClick}
              type="submit"
              className="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Delete
            </button>
          </div>
        </div>
        <p role="status">{state?.message}</p>
      </form>
    </div>
  );
};

export default SuccessIndicatorUpdate;
