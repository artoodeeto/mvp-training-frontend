"use client";
import React, {useEffect, useState} from "react";
import {getUser} from "../actions";
import {User} from "@/app/interface/user";
import Link from "next/link";
import {useUserContext} from "@/app/context/user";
import Image from "next/image";

const UserEdit = ({params}: {params: {userId: string}}) => {
  const id = Number(params.userId);
  const [user, setUser] = useState<User>();
  const userCon = useUserContext();

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await getUser(id);
        userCon?.setUser(res); // !!! ?? remove ??
        setUser(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAll();
  }, [id]);
  return (
    <div className="ml-5">
      <div className="card card-side bg-neutral text-neutral-content w-2/5 flex justify-between gap-4">
        <div className="flex justify-center flex-column gap-4 ml-4">
          <div className="avatar placeholder h-24 m-auto">
            <div className="bg-neutral text-neutral-content rounded-full w-24 border border-gray-500">
              <span className="text-3xl uppercase">{`${user?.firstName.charAt(
                0
              )} ${user?.lastName.charAt(0)}`}</span>
            </div>
          </div>
          <div className="card-body ">
            <h2 className="card-title">
              Name: {`${user?.firstName} ${user?.lastName}`}
            </h2>
            <p>Email: {user?.email}</p>
            <p>Role: {user?.role}</p>
          </div>
        </div>

        <div className="card-actions justify-end m-2">
          <button className="btn btn-primary mt-auto">
            <Link className="link" href={`${user?.id}/ipcr/new`}>
              Create IPCR
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserEdit;
