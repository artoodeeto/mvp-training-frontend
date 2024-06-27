"use server"

export async function login(loginInfo: { email: string, password: string }): Promise<{ access_token: string }> {
  try {

    const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: 'no-cache',
      body: JSON.stringify(loginInfo),
    });

    return await res.json();
  } catch (error) {
    console.log(error)
    throw error;
  }

}