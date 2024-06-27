'use server'

import { cookies } from "next/headers";
import { IOPCR } from "../interface/opcr";
import { ResponseError } from "../utils/error/responseError";
import { handleError } from "../utils/error/handleError";

const acc_tok = cookies().get('access_token');

export async function createOPCR(data: IOPCR): Promise<any> {

  try {
    const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/opcr`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${acc_tok?.value}`,
      },
      body: JSON.stringify(data),
    });

    console.log(res.statusText, res.ok, '2222', res.status)
    if (!res.ok) throw new ResponseError('Bad fetch response', res)
    return {
      isOk: true
    }
  } catch (err) {
    console.log('dere')
    handleError(err)
  }
}