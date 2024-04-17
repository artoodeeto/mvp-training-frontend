"use client";
import React, {useEffect, useState} from "react";
import {getAllUser} from "./actions";
import {UserWithCount, User} from "../../interface/user";
import Link from "next/link";

const UserPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res: UserWithCount = await getAllUser();
        setUsers(res.users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAll();
  }, []);

  return (
    <div>
      <table className="table-zebra table">
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Email</th>
            <th>First Name</th>
            <th>Position</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <Link href={`user/${user.id}`}>{user.email}</Link>
              </td>
              <td>{user.firstName}</td>
              <td>{user.position}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserPage;
