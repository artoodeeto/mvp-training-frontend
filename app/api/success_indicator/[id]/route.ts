
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function DELETE(request: NextRequest, { params }: any) {
  const id = params.id;
  const acc_tok = cookies().get('access_token');
  console.log(acc_tok, 'yow', id)

  try {
    const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/success-indicators/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${acc_tok?.value}`,
      },
      cache: 'no-cache',
      credentials: 'same-origin',
    });

    if (!res.ok) {
      throw new Error('ERROR!!! DELETE SUCCESS INDICATOR')
    }
    console.log(res.statusText, 'rerere')
    return NextResponse.json({ its: 'ok' })
  } catch (error) {
    console.log(error)
    return NextResponse.error()
  }
}


export async function PUT(request: NextRequest, { params }: any) {
  const id = params.id;
  const acc_tok = cookies().get('access_token');
  const data = await request.json()
  const major_final_output = data.major_final_output;
  const ppa = data.ppa;
  const target_measure = data.target_measure;
  const parent_id = data.parent_id

  try {
    const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/success-indicators/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${acc_tok?.value}`,
      },
      body: JSON.stringify({
        major_final_output: `${major_final_output}`,
        ppa: `${ppa}`,
        target_measure: `${target_measure}`,
        parent_id
      }),
      cache: 'no-cache',
      credentials: 'same-origin',
    });

    if (!res.ok) throw new Error('ERROR!!! DELETE SUCCESS INDICATOR')


    return NextResponse.json({})
  } catch (error) {
    return NextResponse.error()
  }
}

export async function GET(request: NextRequest, { params }: any) {
  const id = params.id;
  const acc_tok = cookies().get('access_token');

  try {
    const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/success-indicators/${id}`, {
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