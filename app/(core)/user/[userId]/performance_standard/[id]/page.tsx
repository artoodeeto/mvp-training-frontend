"use client";
import React, {useEffect, useState} from "react";
import {
  deletePerformanceStandard,
  getPerformanceStandard,
} from "../../../actions";
import {
  IGetPerformanceStandard,
  IPSA,
} from "@/app/interface/performance_standard";

const PerformanceStandardEdit = ({
  params,
}: {
  params: {userId: string; id: string};
}) => {
  const id = Number(params.id);
  const [performanceStandard, setPerformanceStandard] = useState<IPSA[]>([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await getPerformanceStandard(id);
        setPerformanceStandard(res.psa);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAll();
  }, [id]);

  const handleClick = (event: any) => {
    event.preventDefault();
    deletePerformanceStandard(id);
  };

  return performanceStandard ? (
    <div className="p-5">
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
          </tr>
        </thead>

        <tbody>
          {performanceStandard.map((ps: any) => (
            <tr key={ps.id}>
              <td>{ps.aspect.successIndicator.ppa}</td>
              <td>{ps.aspect.successIndicator.target_measure}</td>
              <td>{ps.aspect.mov}</td>
              <td>{ps.aspect.aspects_of_work}</td>
              <td>
                <p>{ps.zero}</p>
              </td>
              <td>
                <p>{ps.one}</p>
              </td>
              <td>
                <p>{ps.two}</p>
              </td>
              <td>
                <p>{ps.three}</p>
              </td>
              <td>
                <p>{ps.four}</p>
              </td>
              <td>
                <p>{ps.five}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <h3>Please Create Performance Standard </h3>
  );
};

export default PerformanceStandardEdit;
