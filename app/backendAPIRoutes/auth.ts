"use server"

export async function login(loginInfo: { email: string, password: string }) {
  try {

    const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginInfo),
    });

    return await res.json();
  } catch (error) {
    console.log(error)
    return { message: 'Error' }
  }

}