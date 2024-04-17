import {AspectRowForm} from "@/app/interface/aspects";
import {getALlSuccessIndicatorWithCount} from "@/app/interface/success_indicator";
import Options from "@/app/components/Options";
// import {getAllSuccessIndicators} from "@/app/(core)/success_indicator/actions";
import React, {FC, useEffect, useState} from "react";
import {getAllSuccessIndicators} from "@/app/backendAPIRoutes/success_indicator";

export interface AspectFormProps {
  inputRows: AspectRowForm[];
}

const AspectForm: FC<AspectFormProps> = ({inputRows}) => {
  const [dataForm, setFormValues] = useState<AspectRowForm[]>([]);
  const [sI, setSI] = useState<getALlSuccessIndicatorWithCount>({
    successIndicators: [],
    count: 0,
  });

  const changeHandler = (e: any, i: number) => {
    const propName = e.target.id;
    const value = e.target.value;
    let row = dataForm[i];
    // @ts-ignore
    row[`${propName}`] = value;
    row = {...row};
    dataForm[i] = row;
    setFormValues([...dataForm]);
  };

  useEffect(() => {
    setFormValues([...dataForm, ...inputRows]);
    const initData = async () => {
      try {
        const allSI = await getAllSuccessIndicators();
        setSI({
          successIndicators: allSI.successIndicators,
          count: allSI.count,
        });
      } catch (error) {
        console.log(error);
      }
    };
    initData();
  }, [inputRows]);
  return (
    <>
      <table className="mt-5">
        <thead>
          <tr>
            <th>Success Indicator</th>
            <th>MOV</th>
            <th>Aspect Of Work</th>
          </tr>
        </thead>

        <tbody>
          {dataForm.map((item: AspectRowForm, i: number) => (
            <tr key={i}>
              <td>
                <Options
                  data={sI.successIndicators}
                  name={`successIndicator-${i}`}
                  id="successIndicator"
                  display1="major_final_output"
                  display2="ppa"
                  klass="select select-bordered select-sm w-full max-w-xs"
                  setDefaultValue={item.si.id}
                />
              </td>

              <td>
                <input
                  type="text"
                  key={i}
                  name={`mov-${i}`}
                  id="mov"
                  placeholder="MOV"
                  className="input input-bordered input-sm w-full max-w-xs"
                  value={item.mov}
                  onChange={(e) => changeHandler(e, i)}
                  required
                />
              </td>

              <td>
                <textarea
                  key={i}
                  name={`aspects_of_work-${i}`}
                  id="aow"
                  placeholder="Aspect of work"
                  className="textarea"
                  value={item.aow}
                  onChange={(e) => changeHandler(e, i)}
                  required
                ></textarea>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AspectForm;
