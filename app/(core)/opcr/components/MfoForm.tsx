import {
  ArrayHelpers,
  ErrorMessage,
  Field,
  FieldArray,
  useFormikContext,
} from "formik";
import React from "react";
import PpaForm from "./PpaForm";
import {IOPCR} from "@/app/interface/opcr";
import FormBtn from "./FormBtn";
import {IMfo, IPpa} from "@/app/interface/mfo";

const MFOPreValues: Omit<IMfo, "id"> = {
  title: "",
  ppa: [
    {
      title: "",
      successIndicators: [
        {
          title: "",
          target_measure: "",
          weight: 0,
          appropriation: "",
          divisions: "",
          physical: "",
          financial: "",
          q: 0,
          e: 0,
          t: 0,
          a: 0,
          eps: 0,
          remarks: "",
        },
      ],
    },
  ],
};

const PPAPreValues: IPpa = {
  title: "",
  successIndicators: [
    {
      title: "",
      target_measure: "",
      weight: 0,
      appropriation: "",
      divisions: "",
      physical: "",
      financial: "",
      q: 0,
      e: 0,
      t: 0,
      a: 0,
      eps: 0,
      remarks: "",
    },
  ],
};

// FIXME: Fix formik types
const MfoForm = ({
  move,
  swap,
  push,
  insert,
  unshift,
  pop,
  form,
}: ArrayHelpers & any) => {
  const {values} = useFormikContext<IOPCR>();
  return (
    <div className="h-9/12">
      {values.mfo.map((val: IMfo, i: number) => (
        <React.Fragment key={i}>
          <div className="card bg-base-300 rounded-box">
            <div className="m-2 flex flex-row justify-between">
              <div className="flex flex-row gap-3">
                <h1 className="prose-headings:h1">MFO:</h1>
                <Field
                  name={`mfo[${i}].title`}
                  id="title"
                  className="input input-bordered input-xs w-full max-w-xs"
                  placeholder="Title here..."
                />
                <ErrorMessage
                  className="text-red-600"
                  name={`mfo[${i}].title`}
                  component="div"
                />
              </div>
              {/* <div className="flex gap-2 w-44 flex-row">
                <button
                  type="button"
                  className="btn btn-xs btn-outline btn-primary mb-2"
                  onClick={() => push(MFOPreValues)}
                >
                  Add MFO
                </button>
                <button
                  type="button"
                  className="btn btn-xs btn-outline btn-error mb-2"
                  onClick={() => pop()}
                >
                  Delete MFO
                </button>
              </div> */}
              <FormBtn
                push={() => push(MFOPreValues)}
                pop={() => pop()}
                name="MFO"
                index={i}
                length={values.mfo.length}
              />
            </div>
            <FieldArray name={`mfo[${i}].ppa`}>
              {(PpaArrayHelpers: ArrayHelpers) => (
                <div>
                  {/* <button
                    type="button"
                    className="btn btn-xs btn-outline btn-primary ml-2"
                    onClick={() => PpaArrayHelpers.push(PPAPreValues)}
                  >
                    Add PPA
                  </button> */}
                  <FormBtn
                    push={() => PpaArrayHelpers.push(PPAPreValues)}
                    pop={() => PpaArrayHelpers.pop()}
                    name="PPA"
                    index={0}
                    length={values.mfo[i].ppa.length}
                  />
                  <PpaForm ppaHelper={PpaArrayHelpers} mfoIndex={i} />
                </div>
              )}
            </FieldArray>
          </div>
          <div className="divider"></div>
          {/* <div className="grid h-20 card bg-base-300 rounded-box place-items-center"></div> */}
        </React.Fragment>
      ))}
    </div>
  );
};

export default MfoForm;
