import Options from "@/app/components/Options";
import {CreateIPCR} from "@/app/interface/ipcr";
import {IMfo, MfoWithId} from "@/app/interface/mfo";
import {ArrayHelpers, Field, FieldArray, useFormikContext} from "formik";
import React, {useEffect, useState} from "react";

interface IMfoIpcrForm {
  mfo: MfoWithId[];
  arrayHelpers: ArrayHelpers;
}

const MfoIpcrForm = ({mfo}: IMfoIpcrForm) => {
  const {values, setFieldValue, setValues} = useFormikContext<CreateIPCR>();

  const testing = (e: React.FormEvent<HTMLInputElement>, i: number): void => {
    console.log(e.currentTarget.value, "curr val");
    const mfoId = Number(e.currentTarget.value);
    const targetMfo = mfo.filter((data) => mfoId === Number(data.id));
    values.mfo[i].id = `${mfoId}`;
    values.mfo[i].ppa = targetMfo[0].ppa;
    // setFieldValue(`mfo[${i}].id`, e.currentTarget.value);
    // const balyus = {...values, OPCR_efficiency_rating: "12"};
    setValues(values, false);
    console.log(values.mfo, "ss");
  };

  useEffect(() => {
    console.log(values.mfo, "qwqwe");

    // const test = values.mfo.map((item) => {});
    // console.log({test});
  }, [values]);

  return (
    <>
      <h1>MFO:</h1>
      {values.mfo.map((val, i: number) => (
        <Field
          name={`mfo[${i}].id`}
          id={`mfo[${i}].id`}
          as="select"
          onChange={(e: React.FormEvent<HTMLInputElement>) => testing(e, i)}
          className="input input-bordered input-sm mt-2 w-80"
        >
          <Options display="title" items={mfo} />
          {/* {({field, form, meta}: any) => {
            setMetaValue(meta.value);
            return (
              <div>
                <select
                  {...field}
                  className="input input-bordered input-sm mt-2 w-80"
                >
                  <Options display="title" items={mfo} />
                </select>
              </div>
            );
          }} */}
        </Field>
      ))}
    </>
  );
};

export default MfoIpcrForm;
