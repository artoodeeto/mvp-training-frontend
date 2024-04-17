
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function DELETE(request: NextRequest, { params }: any) {
  const id = params.id;
  const acc_tok = cookies().get('access_token');

  try {
    const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/aspect/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${acc_tok?.value}`,
      },
      cache: 'no-cache',
      credentials: 'same-origin',
    });

    if (!res.ok) {
      throw new Error('ERROR!!! ASPECT DELETE ERROR')
    }
    return NextResponse.json({})
  } catch (error) {
    console.log(error)
    return NextResponse.error()
  }
}

export async function PUT(request: NextRequest, { params }: any) {
  const id = params.id;
  const acc_tok = cookies().get('access_token');
  const data = await request.json()
  console.log('sheyt', { data })
  const mov = data.mov;
  const aspects_of_work = data.aspects_of_work;
  const successIndicators = data.successIndicators;

  try {
    const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/aspect/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${acc_tok?.value}`,
      },
      body: JSON.stringify({
        mov: mov,
        aspects_of_work: aspects_of_work,
        successIndicators: successIndicators
      }),
      cache: 'no-cache',
      credentials: 'same-origin',
    });


    return NextResponse.json({})
  } catch (error) {
    return NextResponse.error()
  }
}

export async function GET(request: NextRequest, { params }: any) {
  const id = params.id;
  const acc_tok = cookies().get('access_token');

  try {
    const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/aspect/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${acc_tok?.value}`,
      },
      cache: 'no-cache',
      credentials: 'same-origin',
    });

    if (!res.ok) {
      console.log(res.statusText)
      throw new Error('ERROR!!! DELETE SUCCESS INDICATOR')
    }

    return NextResponse.json(await res.json())
  } catch (error) {
    console.log(error)
    return NextResponse.error()
  }
}