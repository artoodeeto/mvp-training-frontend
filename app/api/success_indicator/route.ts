import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {

  const acc_tok = cookies().get('access_token');
  try {

    const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/success-indicators/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${acc_tok?.value}`
      },
      credentials: 'same-origin',
    });

    if (!res.ok) {
      console.log(res.statusText)
      throw new Error('ERROR!!!')
    }
    const data = await res.json();
    return NextResponse.json({ data });
  } catch (error) {
    console.log(error)
    return NextResponse.error()
  }
}
