// "use server"
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
// import { cookies } from 'next/headers'
// import { construct } from "radash";

// export async function getAllAspects() {
//   try {
//     const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/api/aspect`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         "Cookie": cookies().toString()
//       },
//       credentials: "same-origin",
//       cache: "no-cache",
//     });

//     console.log(res.statusText, 'GOT ALL ASPECTS YOW')
//     if (!res.ok) throw new Error('ERROR FETCHING ASPECTS')

//     const data = await res.json();
//     console.log(data, 'data')
//     return data
//   } catch (error) {
//     console.log(error)
//     return { message: 'Error' }
//   }
// }

// export async function getAspect(id: string) {

//   try {
//     const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/api/aspect/${id}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         "Cookie": cookies().toString()
//       },
//       cache: 'no-cache'
//     });

//     if (!res.ok) throw new Error(res.statusText)
//     return await res.json();
//   } catch (error) {
//     console.log(error)
//   }
// }

// export async function deleteAspect(id: string) {

//   try {
//     await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/api/aspect/${id}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         "Cookie": cookies().toString()
//       },
//       cache: 'no-cache'
//     });

//     revalidatePath('/aspect')
//   } catch (error) {
//     console.log(error)
//     return { message: 'Error' }
//   } finally {
//     redirect('/aspect')
//   }
// }

// export async function updateAspect(prevState: any, formData: FormData) {
//   const id = formData.get("id");
//   console.log(formData, 'nyahaha');

//   try {
//     const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/api/aspect/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         "Cookie": cookies().toString()
//       },
//       body: JSON.stringify({
//         mov: formData.get('mov-0'),
//         aspects_of_work: formData.get('aspects_of_work-0'),
//         successIndicators: [formData.get('successIndicator-0')],
//       }),
//       cache: 'no-cache'
//     });

//     if (!res.ok) throw new Error(res.statusText)
//     const data = await res.json()
//     // revalidatePath('/aspect')
//     return data;
//   } catch (error) {
//     console.log(error)
//   } finally {
//     // redirect('/aspect')
//   }
// }

// export async function submitNewAspect(prevState: any, formData: FormData) {
//   // FIXME: use radash.construct to create formdata
//   const formDataObject = Object.fromEntries(formData.entries())
//   const finalObject = construct(formDataObject)

//   const newFormData = new Map();
//   const aspectData: Array<{ [key: string]: string }> = [];
//   newFormData.set('aspects', aspectData);


//   for (const [key, value] of formData) {

//     if (key.startsWith('$')) continue; // skip user prop

//     const [name, index] = key.split('-');

//     if (aspectData[Number(index)]) {
//       aspectData[Number(index)][`${name}`] = `${value}`
//     } else {
//       aspectData[Number(index)] = { [`${name}`]: `${value}` }
//     }
//   }

//   try {

//     const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/api/aspect/new`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Cookie": cookies().toString()
//       },
//       body: JSON.stringify(Object.fromEntries(newFormData))
//     });

//     console.log(res.statusText, 'RAAAA')

//     revalidatePath('/aspect')
//   } catch (error) {
//     console.log(error)
//     return { message: 'Error' }
//   } finally {
//     redirect('/aspect')
//   }

// }
