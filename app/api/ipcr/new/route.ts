import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {

  const acc_tok = cookies().get('access_token');
  try {

    const res = await fetch("http://localhost:8000/ipcr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${acc_tok?.value}`
      },
      credentials: 'same-origin',
      body: JSON.stringify(await request.json())
    });

    if (!res.ok) {
      console.log(res.statusText)
      throw new Error('ERROR!!!')
    }
    return NextResponse.next();
  } catch (error) {
    console.log(error)
    return NextResponse.error()
  }
}
