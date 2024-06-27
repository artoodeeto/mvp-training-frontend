import {
  useFormikContext,
  Field,
  ErrorMessage,
  FormikHelpers,
  ArrayHelpers,
} from "formik";
import React from "react";
import Td from "./Td";
import {IOPCR, ISuccessIndicator} from "@/app/interface/opcr";
import Options from "@/app/components/Options";

interface ISuccessIndicatorForm {
  mfoIndex: number;
  ppaIndex: number;
  SIHelpers: ArrayHelpers;
}

const SuccessIndicatorForm = ({
  mfoIndex,
  ppaIndex,
  SIHelpers,
}: ISuccessIndicatorForm) => {
  const {values} = useFormikContext<IOPCR>();
  return (
    <div className="overflow-x-auto m-2">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th className="text-slate-500 text-center">Success Indicator</th>
            <th className="text-slate-500 text-center">Target Measure</th>
            <th className="text-slate-500 text-center">Weight</th>
            <th className="text-slate-500 text-center">Appropriation</th>
            <th className="text-slate-500 text-center">Divisions</th>
            <th className="text-center" colSpan={2}>
              Actual Accomplishments
            </th>
            <th className="text-center" colSpan={5}>
              Rating
            </th>
            <th className="text-slate-500 text-center">Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="text-slate-500 text-center">Physical</td>
            <td className="text-slate-500 text-center">Financial</td>
            <td className="text-slate-500 text-center">Q</td>
            <td className="text-slate-500 text-center">E</td>
            <td className="text-slate-500 text-center">T</td>
            <td className="text-slate-500 text-center">A</td>
            <td className="text-slate-500 text-center">EPS</td>
            <td></td>
          </tr>

          {values.mfo[mfoIndex].ppa[ppaIndex].successIndicators.map(
            (val: ISuccessIndicator, i: number) => {
              return (
                <tr key={i}>
                  <Td
                    mfoIndex={mfoIndex}
                    ppaIndex={ppaIndex}
                    index={i}
                    name={"title"}
                  />
                  <Td
                    mfoIndex={mfoIndex}
                    ppaIndex={ppaIndex}
                    index={i}
                    name={"target_measure"}
                  >
                    <Options
                      display="name"
                      items={[
                        {id: "Qn", name: "Qn"},
                        {id: "Qi", name: "Qi"},
                        {id: "T", name: "T"},
                      ]}
                    />
                  </Td>
                  <Td
                    mfoIndex={mfoIndex}
                    ppaIndex={ppaIndex}
                    index={i}
                    name={"weight"}
                    type="number"
                  />
                  <Td
                    mfoIndex={mfoIndex}
                    ppaIndex={ppaIndex}
                    index={i}
                    name={"appropriation"}
                    type="number"
                  />
                  <Td
                    mfoIndex={mfoIndex}
                    ppaIndex={ppaIndex}
                    index={i}
                    name={"divisions"}
                  />
                  <Td
                    mfoIndex={mfoIndex}
                    ppaIndex={ppaIndex}
                    index={i}
                    name={"physical"}
                  />
                  <Td
                    mfoIndex={mfoIndex}
                    ppaIndex={ppaIndex}
                    index={i}
                    name={"financial"}
                    type="number"
                  />
                  <Td
                    mfoIndex={mfoIndex}
                    ppaIndex={ppaIndex}
                    index={i}
                    name={"q"}
                    type="number"
                  />
                  <Td
                    mfoIndex={mfoIndex}
                    ppaIndex={ppaIndex}
                    index={i}
                    name={"e"}
                    type="number"
                  />
                  <Td
                    mfoIndex={mfoIndex}
                    ppaIndex={ppaIndex}
                    index={i}
                    name={"t"}
                    type="number"
                  />
                  <Td
                    mfoIndex={mfoIndex}
                    ppaIndex={ppaIndex}
                    index={i}
                    name={"a"}
                    type="number"
                  />
                  <Td
                    mfoIndex={mfoIndex}
                    ppaIndex={ppaIndex}
                    index={i}
                    name={"eps"}
                    type="number"
                  />
                  <Td
                    mfoIndex={mfoIndex}
                    ppaIndex={ppaIndex}
                    index={i}
                    name={"remarks"}
                    as="textarea"
                  />
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SuccessIndicatorForm;
