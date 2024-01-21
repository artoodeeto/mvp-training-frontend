"use server"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from 'next/headers'

export async function submitNewSuccessIndicator(prevState: any, formData: any) {
  try {

    const res = await fetch("http://localhost:3000/api/success_indicator/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cookie": cookies().toString()
      },
      body: JSON.stringify(Object.fromEntries(formData))
    });

    console.log(res.statusText, 'SUCCESS INDICATOR!')
    if (!res.ok) throw new Error('Cant create new Success Indicator')

    revalidatePath('/success_indicator')
  } catch (error) {
    console.log(error)
    return { message: 'Error' }
  } finally {
    redirect('/success_indicator')
  }

}

export async function deleteSuccessIndicator(id: string) {
  console.log('broooo')
  try {
    const res = await fetch(`http://localhost:3000/api/success_indicator/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Cookie": cookies().toString()
      },
      cache: 'no-cache'
    });

    console.log(res.statusText, 'DELETE SUCCESS INDICATOR!', res.redirected)
    if (!res.ok) throw new Error(res.statusText)

    revalidatePath('/success_indicator')
  } catch (error) {
    console.log(error)
  } finally {
    redirect('/success_indicator')
  }

}

export async function updateSuccessIndicator(prevState: any, formData: any) {
  const id = formData.get("id");

  try {
    const res = await fetch(`http://localhost:3000/api/success_indicator/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Cookie": cookies().toString()
      },
      body: JSON.stringify(Object.fromEntries(formData)),
      cache: 'no-cache'
    });

    // console.log(res.statusText, 'DELETE SUCCESS INDICATOR!', res.redirected)
    if (!res.ok) throw new Error(res.statusText)
    const data = await res.json()
    console.log('wwwww', { data })
    revalidatePath('/success_indicator')
    return data;
  } catch (error) {
    console.log(error)
  } finally {
    redirect('/success_indicator')
  }
}


export async function getSuccessIndicator(id: string) {

  try {
    const res = await fetch(`http://localhost:3000/api/success_indicator/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Cookie": cookies().toString()
      },
      cache: 'no-cache'
    });

    if (!res.ok) throw new Error(res.statusText)
    return await res.json();
  } catch (error) {
    console.log(error)
  }
}