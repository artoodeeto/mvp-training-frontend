"use client";
import {SuccessIndicatorProps} from "@/app/interface/success_indicator/success_indicator";
import React, {FC, useEffect, useState} from "react";

const SuccessIndicatorForm: FC<SuccessIndicatorProps> = ({formValues}) => {
  const [dataForm, setFormValues] = useState({
    major_final_output: "",
    title: "",
    target_measure: "",
  });

  useEffect(() => {
    if (formValues) setFormValues({...formValues});
  }, [formValues]);

  const changeHandler = (e: any) => {
    setFormValues({...dataForm, [e.target.name]: e.target.value});
  };

  return (
    <>
      <div>
        <label htmlFor="major_final_output">Major Final Output:</label>
        <input
          value={dataForm.major_final_output}
          onChange={changeHandler}
          type="text"
          id="major_final_output"
          name="major_final_output"
          placeholder="MFO 1: Human Resource Management and Development Services"
          className="rounded-lg py-1 px-1 m-2 text-black"
          required
        />
      </div>

      <div>
        <label htmlFor="title">Title:</label>
        <input
          value={dataForm.title}
          onChange={changeHandler}
          type="text"
          id="title"
          name="title"
          placeholder="SI 3.1.1.2"
          className="rounded-lg py-1 px-1 m-2 text-black"
          required
        />
      </div>

      <div>
        <label htmlFor="target_measure">Target Measure:</label>
        <input
          value={dataForm.target_measure}
          onChange={changeHandler}
          type="text"
          id="target_measure"
          name="target_measure"
          placeholder="Updates employee training records on LnD dbase 3WD after receipt of the document (Ql, T)"
          className="rounded-lg py-1 px-1 m-2 text-black"
          required
        />
      </div>
    </>
  );
};

export default SuccessIndicatorForm;
