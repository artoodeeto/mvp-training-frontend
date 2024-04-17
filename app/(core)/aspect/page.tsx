"use client";

import Link from "next/link";
import React, {useEffect, useState} from "react";
import {getAllAspectWithCount} from "@/app/interface/aspects";
import {getAllAspects} from "@/app/backendAPIRoutes/aspect";

const Aspect = () => {
  const [aspects, setAspects] = useState<getAllAspectWithCount>({
    aspects: [],
    count: 0,
  });

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await getAllAspects();
        const {aspects, count} = res;
        setAspects({
          aspects: aspects,
          count: count,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchAll();
  }, []);

  return (
    <div>
      <Link href={"/aspect/new"}>Create New Aspect</Link>

      <div className="m-auto mt-2 w-4/5 overflow-x-auto">
        <table className="table-zebra table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Success Indicator</th>
              <th>MOV</th>
              <th>Aspect Of Work</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {aspects.aspects.map((aspect) => (
              <tr key={aspect.id}>
                <td>{aspect.id}</td>
                <td>{aspect.successIndicator?.ppa ?? ""}</td>
                <td>{aspect.mov}</td>
                <td className="whitespace-pre-wrap">
                  {aspect.aspects_of_work}
                </td>
                <td>
                  <Link href={`aspect/${aspect.id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Aspect;
