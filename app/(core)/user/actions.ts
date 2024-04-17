"use server"

import { cookies } from 'next/headers'
import { User } from '../../interface/user';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { construct } from 'radash';
import { removeObjectInArray } from '@/app/utils/removeObjectInArray';

const acc_tok = cookies().get('access_token');

export async function getAllUser() {
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

export async function getUser(id: number) {
  try {

    const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/user/${id}`, {
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

export async function createPerformanceStandard(prevState: any, formData: FormData) {
  const userId = formData.get('userId')
  const data = construct(Object.fromEntries(formData.entries())) as any

  data.psa = removeObjectInArray(data.psa)
  try {

    await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/performance-standard/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${acc_tok?.value}`,
      },
      body: JSON.stringify(data)
    });

  } catch (error) {
    console.log(error)
    return { message: 'Error' }
  } finally {
    redirect(`/user/${userId}`)
  }
}

export async function getPerformanceStandard(id: number) {

  try {

    const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/performance-standard/${id}`, {
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
  } finally {
  }
}

export async function editPerformanceStandard(prevState: any, formData: FormData) {
  const userId = formData.get('userId')
  const id = formData.get('perfStand')
  try {

    const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/performance-standard/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${acc_tok?.value}`,
      },
      body: JSON.stringify({
        userId: userId,
        aspects: formData.getAll('aspects')
      })
    });

    // revalidatePath(`/performance_standard/${performanceId}`)
  } catch (error) {
    console.log(error)
    return { message: 'Error' }
  } finally {
    redirect(`/user/${userId}`)
  }
}

export async function deletePerformanceStandard(id: number) {
  try {

    const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/performance-standard/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${acc_tok?.value}`,
      },
    });

    // revalidatePath(`/performance_standard/${performanceId}`)
  } catch (error) {
    console.log(error)
    return { message: 'Error' }
  } finally {
    // redirect(`/user/${userId}`)
  }
}