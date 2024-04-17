import {IPSA} from "@/app/interface/performance_standard";
import {
  ICompleteIPCR,
  UserSuccessIndicator,
} from "@/app/interface/success_indicator";
import React, {useEffect, useState} from "react";

interface SuccessIndicatorListProps {
  successIndicators: IPSA[];
}

const SuccessIndicatorList = ({
  successIndicators,
}: SuccessIndicatorListProps) => {
  const [succIn, setSuccessIndicator] = useState<IPSA[]>([]);

  useEffect(() => {
    setSuccessIndicator(setUpCompleteSI(successIndicators));
  }, [successIndicators]);

  const setUpCompleteSI = (psa: IPSA[]): IPSA[] => {
    // FIXME: When creating an IPCR to a specific user their is no
    // ql_qn, timeliness, average, remarks, and accomplishments
    // this is added manually for the form to be created
    // but on the edit of an IPCR said properties are included so
    // this part should be conditional ??
    // NOT SURE THOUGH
    return psa.map((item) => {
      return {
        ql_qn: 0,
        timeliness: 0,
        average: 0,
        remarks: "",
        actual_accomplishment: "",
        ...item,
      };
    });
  };

  const changeHandler = (e: any, i: number) => {
    const {id, value} = e.target;
    let si: any = succIn[i];
    Object.assign(si, {[id]: value});
    const qualityTrueVal = getQualityTrueValue(Number(si["ql_qn"]));
    const average = calcAverage(qualityTrueVal, Number(si["timeliness"]));
    Object.assign(si, {average});
    succIn[i] = {...si};

    setSuccessIndicator([...succIn]);
  };

  const getQualityTrueValue = (i: number): number => {
    const values = [0, 2, 3, 5];
    return values[i];
  };

  const calcAverage = (quality: number, timeliness: number): number => {
    return (quality + timeliness) / 2;
  };

  return (
    <div className="mt-3">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>MFO</th>
              <th>PPA</th>
              <th>Target Measure</th>
              <th>Actual Accomplishments</th>
              <th>Q1</th>
              <th>T3</th>
              <th>A4</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {succIn.map((siItem, index) => (
              <tr key={siItem.id}>
                <td>
                  <input
                    type="hidden"
                    name={`completeSuccessIndicators[${index}].aspectId`}
                    value={siItem.aspect.id}
                  />
                </td>
                <td>{siItem.aspect.successIndicator.major_final_output}</td>
                <td>{siItem.aspect.successIndicator.ppa}</td>
                <td>{siItem.aspect.successIndicator.target_measure}</td>
                <td>
                  <textarea
                    id="actual_accomplishment"
                    name={`completeSuccessIndicators[${index}].actual_accomplishment`}
                    className="textarea textarea-bordered h-24"
                    value={siItem?.actual_accomplishment}
                    onChange={(e) => changeHandler(e, index)}
                    required
                  ></textarea>
                </td>
                <td>
                  <input
                    type="range"
                    min={0}
                    max="3"
                    className="range range-sm"
                    step="1"
                    value={siItem?.ql_qn}
                    onChange={(e) => changeHandler(e, index)}
                    name={`completeSuccessIndicators[${index}].ql_qn`}
                    id="ql_qn"
                    required
                  />
                  <div className="w-full flex justify-between text-xs px-2">
                    <span>0</span>
                    <span>2</span>
                    <span>3</span>
                    <span>5</span>
                  </div>
                </td>
                <td>
                  <input
                    type="range"
                    min={0}
                    max="5"
                    className="range range-sm"
                    step="1"
                    value={siItem?.timeliness}
                    onChange={(e) => changeHandler(e, index)}
                    name={`completeSuccessIndicators[${index}].timeliness`}
                    id="timeliness"
                    required
                  />
                  <div className="w-full flex justify-between text-xs px-2">
                    <span>0</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                  </div>
                </td>
                <td>
                  <input
                    type="hidden"
                    value={siItem?.average}
                    name={`completeSuccessIndicators[${index}].average`}
                    id="average"
                  />
                  <h3>{siItem?.average}</h3>
                </td>
                <td>
                  <textarea
                    id="remarks"
                    name={`completeSuccessIndicators[${index}].remarks`}
                    className="textarea textarea-bordered h-24"
                    value={siItem?.remarks}
                    onChange={(e) => changeHandler(e, index)}
                    required
                  ></textarea>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SuccessIndicatorList;
