"use client";

import React from "react";
import {useFormState} from "react-dom";
import SubmitBtn from "@/app/components/Buttons/SubmitBtn";
// import { submitNewSuccessIndicator } from "../actions";
import SuccessIndicatorForm from "../SuccessIndicatorFom/SuccessIndicatorForm";
import {submitNewSuccessIndicator} from "@/app/backendAPIRoutes/success_indicator";

const initState = {
  message: "",
};

const SuccessIndicatorNew = () => {
  const [state, formAction] = useFormState(
    submitNewSuccessIndicator,
    initState
  );

  return (
    <div className="m-auto mt-20 max-w-max rounded-lg bg-white px-4 py-8 text-white shadow sm:px-6 md:px-8 lg:px-10 dark:bg-gray-800">
      <form action={formAction} className="flex w-full flex-col justify-around">
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
