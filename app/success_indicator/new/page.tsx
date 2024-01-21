"use client";

import React from "react";
import {useFormState} from "react-dom";
import SubmitBtn from "@/app/components/SubmitBtn";
import {submitNewSuccessIndicator} from "../actions";
import SuccessIndicatorForm from "../SuccessIndicatorFom/successIndicatorForm";

const initState = {
  message: "",
};

const SuccessIndicatorNew = () => {
  console.log("this some bullshit");
  const [state, formAction] = useFormState(
    submitNewSuccessIndicator,
    initState
  );

  return (
    <div className="max-w-max px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 m-auto mt-20 text-white">
      <form action={formAction} className="flex flex-col w-full justify-around">
        <div className="relative">
          <div className="flex flex-col justify-between">
            <SuccessIndicatorForm />
          </div>
          <SubmitBtn />
        </div>
        <p role="status">{state?.message}</p>
      </form>
    </div>
  );
};

export default SuccessIndicatorNew;
