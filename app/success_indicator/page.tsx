"use client";

import Link from "next/link";
import React, {useEffect, useState} from "react";
import {getALlSuccessIndicatorWithCount} from "@/app/interface/success_indicator/success_indicator";
import {useRouter, usePathname, useSearchParams} from "next/navigation";

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
        const res = await fetch("http://localhost:3000/api/success_indicator", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "same-origin",
          cache: "no-cache",
        });

        if (!res.ok) throw new Error(`${res.statusText}`);
        const json = await res.json();
        setSI({
          successIndicators: json.data.successIndicators,
          count: json.data.count,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getSuccessIndicators();
  }, []);

  return (
    <div>
      <h1>SuccessIndicator</h1>
      <Link href={"/success_indicator/new"}>Create New Success Indicator</Link>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Major Final Output</th>
            <th>Title</th>
            <th>Target Measure</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {sI.successIndicators.map((si) => (
            <tr key={si.id}>
              <td>{si.id}</td>
              <td>{si.target_measure}</td>
              <td>{si.major_final_output}</td>
              <td>{si.title}</td>
              <td>
                <Link href={`success_indicator/${si.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SuccessIndicatorPage;
