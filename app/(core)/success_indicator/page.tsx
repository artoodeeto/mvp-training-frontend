"use client";

import Link from "next/link";
import React, {useEffect, useState} from "react";
import {getALlSuccessIndicatorWithCount} from "@/app/interface/success_indicator";
import {useRouter, usePathname, useSearchParams} from "next/navigation";
import {getAllSuccessIndicators} from "@/app/backendAPIRoutes/success_indicator";

const SuccessIndicatorPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [sI, setSI] = useState<getALlSuccessIndicatorWithCount>({
    successIndicators: [],
    count: 0,
  });

  useEffect(() => {
    const getSuccessIndicators = async () => {
      try {
        const data = await getAllSuccessIndicators();
        setSI({
          successIndicators: data.successIndicators,
          count: data.count,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getSuccessIndicators();
  }, []);

  return (
    <div>
      <Link href={"/success_indicator/new"}>Create New Success Indicator</Link>
      <div className="m-auto mt-2 w-4/5 overflow-x-auto">
        <table className="table-zebra table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Major Final Output</th>
              <th>PPA</th>
              <th>Title</th>
              <th>Target</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {sI.successIndicators.map((si) => (
              <tr key={si.id}>
                <td>{si.id}</td>
                <td>{si.major_final_output}</td>
                <td>{si.parent_id ? si.parent_id.ppa : ""}</td>
                <td>{si.ppa}</td>
                <td>{si.target_measure}</td>
                <td>
                  <Link href={`success_indicator/${si.id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SuccessIndicatorPage;
