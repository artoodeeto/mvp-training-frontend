'use server'

import { cookies } from "next/headers";
import { ResponseError } from "./error/responseError";


const acc_tok = cookies().get('access_token');
const isPlainObject = (value: unknown) => value?.constructor === Object

export async function appFetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
  let initOptions = init
  // If we specified a RequestInit for fetch
  if (initOptions?.body) {
    // If we have passed a body property and it is a plain object or array
    if (Array.isArray(initOptions.body) || isPlainObject(initOptions.body)) {
      // Create a new options object serializing the body and ensuring we
      // have a content-type header
      initOptions = {
        ...initOptions,
        body: JSON.stringify(initOptions.body),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${acc_tok?.value}`,
          ...initOptions.headers,
        },
      }
    }
  }

  const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}${input}`, initOptions)
  if (!res.ok) throw new ResponseError('Bad fetch response', res);
  return await res.json()
}



interface IFetch {
  url: RequestInfo | URL;
  // method: "POST" | "GET" | "PUT" | "DELETE"
  // data: any
  options?: RequestInit
}

// const appFetch = async ({ url, options }: IFetch) => {

//   try {

//     const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}${url}`, {
//       method: options?.method,
//       // signal: AbortSignal.timeout(10000),
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${acc_tok?.value}`,
//       },
//       body: JSON.stringify(data),
//     });

//     if (!res.ok) {
//       // console.log('NOT OK', await res.json())
//       const { message } = await res.json();
//       throw new Error('Data Error', { cause: message })
//     }

//     return await res.json();
//   } catch (error) {
//     console.log(error, 'tiitt')
//   }
// }
