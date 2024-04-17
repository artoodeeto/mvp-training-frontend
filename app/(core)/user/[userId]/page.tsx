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
    <div className="flex flex-col h-[calc(100vh-80px)] justify-between">
      <div className="m-2">
        <div className="card card-side bg-neutral shadow-xl w-80">
          <div className="card-body">
            <h2 className="card-title">Email: {user?.email}</h2>
            <p>
              Name: {user?.firstName} {user?.lastName}
            </p>
            <p>Role: {user?.role}</p>
          </div>
        </div>

        <ul className="menu bg-base-200 w-80 rounded-box mt-2">
          {user?.hasPerformanceStandard ? (
            <>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <Link
                  href={`${id}/performance_standard/${user.performanceStandard.id}`}
                >
                  Go to performance standard
                </Link>
              </li>

              <li>
                <Link href={`${user?.id}/ipcr`}>IPCR</Link>
              </li>
            </>
          ) : (
            <li>
              <Link href={`${user?.id}/performance_standard`}>
                Create performance standard
              </Link>
            </li>
          )}
        </ul>
      </div>

      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div role="alert" className="alert alert-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <p>
            <span className="font-bold">
              {user?.firstName} {user?.lastName}
            </span>{" "}
            needs performance standard
          </p>
        </div>
      </footer>
    </div>
  );
};

export default UserEdit;
