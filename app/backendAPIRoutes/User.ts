"use server"

import { cookies } from 'next/headers'
import { User } from '../interface/user';

export async function getAllUser() {
  const acc_tok = cookies().get('access_token');
  try {

    const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${acc_tok?.value}`,
      },
      cache: 'no-cache'
    });

    console.log(res.statusText, 'I GOT ALL USER')
    if (!res.ok) throw new Error('GET ALL USER ERROR')
    return await res.json();
  } catch (error) {
    console.log(error)
    return { message: 'Error' }
  }

}


export async function getUserIpcrList(userId: string) {
  const acc_tok = cookies().get('access_token');
  try {

    const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/user/${userId}/ipcrs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${acc_tok?.value}`,
      },
      cache: 'no-cache'
    });

    if (!res.ok) throw new Error('Creating IPCR ERROR')
    return await res.json();
  } catch (error) {
    console.log(error)
    return { message: 'Error' }
  }

}

