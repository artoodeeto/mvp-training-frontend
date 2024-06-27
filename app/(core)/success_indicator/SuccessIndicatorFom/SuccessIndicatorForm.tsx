"use client";
import {SuccessIndicatorProps} from "@/app/interface/success_indicator";
import React, {FC, useEffect, useState} from "react";
import Select from "@/app/components/Select";
import {getAllPPA} from "@/app/backendAPIRoutes/success_indicator";
// import {getAllPPA} from "../actions";

const SuccessIndicatorForm: FC<SuccessIndicatorProps> = ({formValues}) => {
  const [dataForm, setFormValues] = useState({
    major_final_output: "",
    ppa: "",
    target_measure: "",
  });

  const [siData, setSI] = useState({
    successIndicators: [],
    count: 0,
  });

  useEffect(() => {
    if (formValues) setFormValues({...formValues});
    const fetchAllPPA = async () => {
      try {
        const res = await getAllPPA();
        setSI(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllPPA();
  }, [formValues]);

  const changeHandler = (e: any) => {
    setFormValues({...dataForm, [e.target.name]: e.target.value});
  };

  return (
    <>
      <div className="mb-4 flex flex-col">
        <label htmlFor="major_final_output">
          <div className="label">
            <span className="label-text">Major Final Output:</span>
          </div>
          <textarea
            value={dataForm.major_final_output}
            onChange={changeHandler}
            id="major_final_output"
            name="major_final_output"
            placeholder="MFO 1: Human Resource Management and Development Services"
            className="textarea"
            required
          ></textarea>
        </label>
      </div>

      <div>
        <label htmlFor="parent_id">
          PPA Parent:
          <Select
            data={siData.successIndicators}
            name="parent_id"
            id="parent_id"
            display1="ppa"
            display2=""
            klass="select select-bordered select-sm w-40 ml-2"
            setDefaultValue={1}
          />
        </label>
      </div>

      <div>
        <label htmlFor="ppa">PPA Title:</label>
        <input
          value={dataForm.ppa}
          onChange={changeHandler}
          type="text"
          id="ppa"
          name="ppa"
          placeholder="SI 3.1.1.2"
          className="input input-bordered input-sm w-full max-w-xs"
        />
      </div>

      <div className="mb-4 flex flex-col">
        <label htmlFor="target_measure">Target Measure:</label>
        {/* <input
          value={dataForm.target_measure}
          onChange={changeHandler}
          type="text"
          id="target_measure"
          name="target_measure"
          placeholder="Updates employee training records on LnD dbase 3WD after receipt of the document (Ql, T)"
          className="m-2 rounded-lg px-1 py-1 text-black"
          required
        /> */}
        <textarea
          value={dataForm.target_measure}
          onChange={changeHandler}
          id="target_measure"
          name="target_measure"
          className="textarea"
          placeholder="Updates employee training records on LnD dbase 3WD after receipt of the document (Ql, T)"
        ></textarea>
      </div>
    </>
  );
};

export default SuccessIndicatorForm;
