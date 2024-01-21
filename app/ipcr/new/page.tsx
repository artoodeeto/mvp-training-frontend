"use client";

import React, {useState, useEffect} from "react";
import {useFormState} from "react-dom";
import {submitIPCR} from "../actions";
import Options from "../components/options";
import {User} from "@/app/interface/user/user";
import SubmitBtn from "@/app/components/SubmitBtn";

const initState = {
  message: "",
};

const NewIPCR = () => {
  const [state, formAction] = useFormState(submitIPCR, initState);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch("http://localhost:8000/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "same-origin",
          cache: "no-store",
        });

        setUsers(await res.json());
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="max-w-max px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 m-auto mt-20 text-black">
      <form action={formAction} className="flex flex-col w-full justify-around">
        <div className="relative">
          <div className="flex flex-col justify-end border-2 border-white-500">
            <div>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                beatae perspiciatis dicta accusantium quos ipsa esse cupiditate
                iure omnis incidunt nulla ipsam reprehenderit autem minima,
                magni repellendus iste enim ut?
              </span>
            </div>
            <div className="mt-2 flex flex-col max-w-xs">
              <div>
                <label htmlFor="ratee">Ratee:</label>
                <Options users={users} name="ratee" id="ratee" />
              </div>
              <div>
                <label htmlFor="ratee_date">Date:</label>
                <input
                  type="date"
                  id="ratee_date"
                  name="ratee_date"
                  className="rounded-lg py-1 px-1"
                />
              </div>
            </div>
          </div>

          <div className="mt-2 flex flex-row justify-between">
            <div className="max-w-xs">
              <span>Reviewed by:</span>
              <div>
                <label htmlFor="reviewed_by">Division Chief:</label>
                <Options users={users} name="reviewed_by" id="reviewed_by" />
              </div>
              <div>
                <label htmlFor="reviewed_by_date">Date:</label>
                <input
                  type="date"
                  id="reviewed_by_date"
                  name="reviewed_by_date"
                  className="rounded-lg py-1 px-1"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col max-w-xs">
              <span>Approved by:</span>
              <div>
                <label htmlFor="approved_by">Department Head:</label>
                <Options users={users} name="approved_by" id="approved_by" />
              </div>
              <div>
                <label htmlFor="approved_by_date">Date:</label>
                <input
                  type="date"
                  id="approved_by_date"
                  name="approved_by_date"
                  className="rounded-lg py-1 px-1"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between border-2 border-white-500">
            <span>
              Success Indicator HERE, It should be dynamic. So before visiting
              this page there should be a request for Success Indicators
            </span>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <label htmlFor="final_average_rating">
                final Average Rating:
              </label>
              <input
                type="text"
                id="final_average_rating"
                name="final_average_rating"
                placeholder="Final Average Rating"
                className="rounded-lg py-1 px-1 m-2"
                required
              />
            </div>
            <div>
              <label htmlFor="OPCR_efficiency_rating">
                Efficiency (OPCR Efficiency Rating):
              </label>
              <input
                type="text"
                id="OPCR_efficiency_rating"
                name="OPCR_efficiency_rating"
                placeholder="Efficiency (OPCR Efficiency Rating)"
                className="rounded-lg py-1 px-1 m-2"
                required
              />
            </div>
            <div>
              <label htmlFor="comments">
                Comments and Recommendations for Development Purposes:
              </label>
              <input
                type="text"
                id="comments"
                name="comments"
                placeholder="Comments"
                className="rounded-lg py-1 px-1 m-2"
                required
              />
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <div>
              <div className="flex flex-col">
                <label htmlFor="discussed_with">Discussed with:</label>
                <Options
                  users={users}
                  name="discussed_with"
                  id="discussed_with"
                />
                <span>Employee</span>
              </div>
              <div>
                <label htmlFor="discussed_with_date">Date:</label>
                <input
                  type="date"
                  id="discussed_with_date"
                  name="discussed_with_date"
                  placeholder=""
                  className="rounded-lg py-1 px-1"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex flex-col">
                <label htmlFor="assessed_by">Assessed by:</label>
                <Options users={users} name="assessed_by" id="assessed_by" />
                <span>Supervisor</span>
              </div>
              <div>
                <label htmlFor="assessed_by_date">Date:</label>
                <input
                  type="date"
                  id="assessed_by_date"
                  name="assessed_by_date"
                  placeholder=""
                  className="rounded-lg py-1 px-1"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex flex-col">
                <label htmlFor="final_rating_by">Final Rating by:</label>
                <Options
                  users={users}
                  name="final_rating_by"
                  id="final_rating_by"
                />
                <span>Department Head</span>
              </div>
              <div>
                <label htmlFor="final_rating_by_date">Date:</label>
                <input
                  type="date"
                  id="final_rating_by_date"
                  name="final_rating_by_date"
                  placeholder=""
                  className="rounded-lg py-1 px-1"
                  required
                />
              </div>
            </div>
          </div>
          <SubmitBtn />

          {/* <input
            type="text"
            id="rounded-email"
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Your email"
          /> */}
        </div>
        <p role="status">{state?.message}</p>
      </form>
    </div>
  );
};

export default NewIPCR;
