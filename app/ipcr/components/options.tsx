"use client";

import { User } from "@/app/interface/user/user";
import React, { useEffect, useState } from "react";

interface OptionProps {
  users: User[];
  name: string;
  id: string;
}

const Options = ({ users, name, id }: OptionProps) => {
  return (
    <>
      <select
        className="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        name={name}
        id={id}
        required
      >
        <option value="0">Select employee...</option>
        {users.map((user) => (
          <option value={user.id} key={user.id}>
            {user.firstName} {user.lastName}
          </option>
        ))}
      </select>
    </>
  );
};

export default Options;
