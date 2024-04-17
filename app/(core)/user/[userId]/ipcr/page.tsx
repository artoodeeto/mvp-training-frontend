"use client";

import {getUserIpcrList} from "@/app/backendAPIRoutes/User";
import {useUserContext} from "@/app/context/user";
import {IPCRUserList} from "@/app/interface/ipcr";
import {User} from "@/app/interface/user";
import Link from "next/link";
import React, {useEffect, useState} from "react";

const UserIPCR = ({params}: {params: {userId: string}}) => {
  const {userId} = params;
  const [user, setUser] = useState<User>();
  const [ipcrs, setIPCR] = useState<IPCRUserList>({
    id: 0,
    ratee: [],
  });
  const userCon = useUserContext();

  useEffect(() => {
    const getIPCR = async () => {
      try {
        const ipcrList = await getUserIpcrList(userId);
        setIPCR(ipcrList);
        setUser(userCon?.user);
      } catch (error) {
        console.log(error);
      }
    };
    getIPCR();
  }, [userId, userCon]);

  return (
    <div className="ml-5">
      <div className="card card-side bg-neutral text-neutral-content w-2/5">
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content rounded-full w-24">
            <span className="text-3xl">{`${user?.firstName.charAt(
              0
            )} ${user?.lastName.charAt(0)}`}</span>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            Name: {`${user?.firstName} ${user?.lastName}`}
          </h2>
          <p>email: {user?.email}</p>
          <p>role: {user?.role}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <Link className="link" href={`ipcr/new`}>
                Create IPCR
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mt-5">
        <table className="table table-zebra table-xs">
          <thead>
            <tr>
              <th>Final Average Rating</th>
              <th>OPCR Efficiency</th>
              <th>Comments</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {ipcrs.ratee.map(
              ({
                id,
                final_average_rating,
                OPCR_efficiency_rating,
                comments,
              }) => (
                <tr key={id}>
                  <td>{final_average_rating}</td>
                  <td>{OPCR_efficiency_rating}</td>
                  <td>{comments}</td>
                  <td>
                    <Link className="link" href={`ipcr/${id}/edit`}>
                      Edit
                    </Link>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserIPCR;
