import React from "react";
import {
  useFormikContext,
  Field,
  ErrorMessage,
  FieldArray,
  ArrayHelpers,
} from "formik";
import SuccessIndicatorForm from "./SuccessIndicatorForm";
import {IOPCR, ISuccessIndicator} from "@/app/interface/opcr";
import FormBtn from "./FormBtn";
import {IPpa} from "@/app/interface/mfo";

const SIPreValues: ISuccessIndicator = {
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
};

interface IPPAForm {
  mfoIndex: number;
  ppaHelper: ArrayHelpers;
}

const PpaForm = ({mfoIndex, ppaHelper}: IPPAForm) => {
  const {values} = useFormikContext<IOPCR>();
  return (
    <>
      {values.mfo[mfoIndex].ppa.map((val: IPpa, i: number) => (
        <React.Fragment key={i}>
          <div className="m-2 flex flex-row justify-between">
            <div className="flex flex-row gap-3">
              <h1 className="prose-headings:h1">PPA:</h1>
              <Field
                name={`mfo[${mfoIndex}].ppa[${i}].title`}
                id="title"
                className="input input-bordered input-xs w-full max-w-xs"
                placeholder="Title here..."
              />
              <ErrorMessage
                className="text-red-600"
                name={`mfo[${mfoIndex}].ppa[${i}].title`}
                component="div"
              />
            </div>
          </div>
          <FieldArray name={`mfo[${mfoIndex}].ppa[${i}].successIndicators`}>
            {(SIArrayHelpers: ArrayHelpers) => (
              <>
                {/* <button
                  type="button"
                  className="btn btn-xs btn-outline btn-primary ml-2"
                  onClick={() => SIArrayHelpers.push(SIPreValues)}
                >
                  Add Success Indicator
                </button> */}
                <FormBtn
                  push={() => SIArrayHelpers.push(SIPreValues)}
                  pop={() => SIArrayHelpers.pop()}
                  name="Success Indicator"
                  index={0}
                  length={values.mfo[mfoIndex].ppa[i].successIndicators.length}
                />
                <SuccessIndicatorForm
                  mfoIndex={mfoIndex}
                  ppaIndex={i}
                  SIHelpers={SIArrayHelpers}
                />
              </>
            )}
          </FieldArray>
        </React.Fragment>
      ))}
    </>
  );
};

export default PpaForm;
