"use server"

import { cookies } from 'next/headers'

export async function getAllMfo() {
  const acc_tok = cookies().get('access_token');
  try {

    const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/mfo`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${acc_tok?.value}`,
      },
      cache: 'no-cache'
    });

    if (!res.ok) throw new Error('GET ALL USER ERROR')
    return await res.json();
  } catch (error) {
    console.log(error)
    return { message: 'Error' }
  }

}