"use server"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from 'next/headers'
import { construct } from "radash";

const acc_tok = cookies().get('access_token');

console.log(acc_tok)

export async function getAllAspects() {
  try {
    const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/aspect`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${acc_tok?.value}`,
      },
      cache: "no-cache",
    });

    if (!res.ok) throw new Error('ERROR FETCHING ASPECTS')
    return await res.json()
  } catch (error) {
    console.log(error)
    return { message: 'Error' }
  }
}

export async function getAspect(id: string) {

  try {
    const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/aspect/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${acc_tok?.value}`,
      },
      cache: 'no-cache'
    });

    if (!res.ok) throw new Error(res.statusText)
    return await res.json();
  } catch (error) {
    console.log(error)
  }
}

export async function deleteAspect(id: string) {

  try {
    await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/aspect/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${acc_tok?.value}`,
      },
      cache: 'no-cache'
    });

    revalidatePath('/aspect')
  } catch (error) {
    console.log(error)
    return { message: 'Error' }
  } finally {
    redirect('/aspect')
  }
}

export async function updateAspect(prevState: any, formData: FormData) {
  const id = formData.get("id");
  console.log(formData, 'nyahaha');

  try {
    const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/aspect/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${acc_tok?.value}`,
      },
      body: JSON.stringify({
        mov: formData.get('mov-0'),
        aspects_of_work: formData.get('aspects_of_work-0'),
        successIndicators: [formData.get('successIndicator-0')],
      }),
      cache: 'no-cache'
    });

    if (!res.ok) throw new Error(res.statusText)
    const data = await res.json()
    // revalidatePath('/aspect')
    return data;
  } catch (error) {
    console.log(error)
  } finally {
    // redirect('/aspect')
  }
}

export async function submitNewAspect(prevState: any, formData: FormData) {
  // FIXME: use radash.construct to create formdata
  const formDataObject = Object.fromEntries(formData.entries())
  const finalObject = construct(formDataObject)

  const newFormData = new Map();
  const aspectData: Array<{ [key: string]: string }> = [];
  newFormData.set('aspects', aspectData);


  for (const [key, value] of formData) {

    if (key.startsWith('$')) continue; // skip user prop

    const [name, index] = key.split('-');

    if (aspectData[Number(index)]) {
      aspectData[Number(index)][`${name}`] = `${value}`
    } else {
      aspectData[Number(index)] = { [`${name}`]: `${value}` }
    }
  }

  console.log(JSON.stringify(Object.fromEntries(newFormData)))

  try {

    const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/aspect`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${acc_tok?.value}`,
      },
      body: JSON.stringify(Object.fromEntries(newFormData))
    });


    revalidatePath('/aspect')
  } catch (error) {
    console.log(error)
    return { message: 'Error' }
  } finally {
    redirect('/aspect')
  }

}
