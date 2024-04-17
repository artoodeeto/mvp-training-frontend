"use client";

import Options from "@/app/components/Options";
import {Aspect, getAllAspectWithCount} from "@/app/interface/aspects";
import React, {useEffect, useState} from "react";
import {useFormState} from "react-dom";
import {createPerformanceStandard} from "../../actions";
import SubmitBtn from "@/app/components/Buttons/SubmitBtn";
import {getAllAspects} from "@/app/backendAPIRoutes/aspect";

const initState = {
  message: "",
};

const UserCreatePerformanceStandard = ({
  params,
}: {
  params: {userId: string};
}) => {
  const {userId} = params;
  const [aspectState, setAspects] = useState<getAllAspectWithCount>({
    aspects: [],
    count: 0,
  });

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await getAllAspects();
        console.log({res});
        setAspects({
          aspects: res.aspects,
          count: res.count,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchAll();
  }, []);

  const [state, formAction] = useFormState(
    createPerformanceStandard,
    initState
  );

  return (
    <div className="">
      <form action={formAction} className=" ">
        <input type="hidden" name="userId" value={userId} />
        <table className="table-zebra table">
          <thead>
            <tr>
              <th>PPA</th>
              <th>Target Measure</th>
              <th>MOV</th>
              <th>Aspect Of Work</th>
              <th>Zero</th>
              <th>One</th>
              <th>Two</th>
              <th>Three</th>
              <th>Four</th>
              <th>Five</th>
              <th>select</th>
            </tr>
          </thead>

          <tbody>
            {aspectState.aspects.map((item: Aspect, i: number) => (
              <tr key={i}>
                <td>{item.successIndicator.ppa}</td>
                <td>{item.successIndicator.target_measure}</td>
                <td>
                  <h3>{item.mov}</h3>
                </td>
                <td>
                  <h3>{item.aspects_of_work}</h3>
                </td>
                <td>
                  <textarea name={`psa[${i}]zero`}></textarea>
                </td>
                <td>
                  <textarea name={`psa[${i}]one`}></textarea>
                </td>
                <td>
                  <textarea name={`psa[${i}]two`}></textarea>
                </td>
                <td>
                  <textarea name={`psa[${i}]three`}></textarea>
                </td>
                <td>
                  <textarea name={`psa[${i}]four`}></textarea>
                </td>
                <td>
                  <textarea name={`psa[${i}]five`}></textarea>
                </td>
                <td>
                  <input
                    type="checkbox"
                    name={`psa[${i}]id`}
                    value={item.id}
                    // checked={checked}
                    // onChange={handleChange}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p role="status">{state?.message}</p>
        <div className="mt-2 w-40 m-auto">
          <SubmitBtn />
        </div>
      </form>
    </div>
  );
};

export default UserCreatePerformanceStandard;
