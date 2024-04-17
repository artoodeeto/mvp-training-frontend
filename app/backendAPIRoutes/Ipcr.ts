"use server"

import { cookies } from 'next/headers'
import { IIPCR } from '../interface/ipcr';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { construct } from 'radash';

const acc_tok = cookies().get('access_token');

export async function createIPCR(data: IIPCR) {
  try {

    const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/ipcr`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${acc_tok?.value}`,
      },
      cache: 'no-cache',
      body: JSON.stringify(data)
    });

    if (!res.ok) throw new Error('Creating IPCR ERROR')
    return await res.json();
  } catch (error) {
    console.log(error)
    return { message: 'Error' }
  }

}

export async function readIPCR(ipcrId: string) {
  try {

    const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/ipcr/${ipcrId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${acc_tok?.value}`,
      },
      cache: 'no-cache'
    });

    return await res.json();
  } catch (error) {
    console.log(error)
    return { message: 'Error' }
  }
}


export async function updateIPCR(prevState: any, formData: FormData) {
  const userId = formData.get('ratee');
  const ipcrId = formData.get('ratee');
  const formDataObject = Object.fromEntries(formData.entries())
  const finalObject = construct(formDataObject) as IIPCR
  console.log({ finalObject }, ipcrId, formData)
  try {

    // const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/ipcr/${ipcrId}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${acc_tok?.value}`,
    //   },
    //   cache: 'no-cache'
    // });
    // revalidatePath(`/user/${userId}/ipcr`);
    return { message: 'Successfully' }
  } catch (error) {
    console.log(error)
    return { message: 'Error' }
  } finally {
    // redirect(`/user/${userId}/ipcr`);
  }

}