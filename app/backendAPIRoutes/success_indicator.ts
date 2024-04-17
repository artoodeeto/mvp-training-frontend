"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const acc_tok = cookies().get('access_token');

export async function getAllSuccessIndicators() {
  try {
    const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/success-indicators`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${acc_tok?.value}`,
      },
      credentials: "same-origin",
      cache: "no-cache",
    });

    if (!res.ok) throw new Error(`${res.statusText}`);
    console.log(res.statusText, 'ss')
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function submitNewSuccessIndicator(prevState: any, formData: any) {
  try {
    const res = await fetch(`${process.env.HOSTNAME}:${process.env.API_PORT}/success-indicators`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${acc_tok?.value}`,
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    console.log(res.statusText, "SUCCESS INDICATOR!");
    if (!res.ok) throw new Error("Cant create new Success Indicator");

    revalidatePath("/success_indicator");
  } catch (error) {
    console.log(error);
    return { message: "Error" };
  } finally {
    redirect("/success_indicator");
  }
}

export async function deleteSuccessIndicator(id: string) {
  try {
    const res = await fetch(
      `${process.env.HOSTNAME}:${process.env.API_PORT}/success-indicators/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${acc_tok?.value}`,
        },
        cache: "no-cache",
      },
    );

    console.log(res.statusText, "DELETE SUCCESS INDICATOR!", res.redirected);
    if (!res.ok) throw new Error(res.statusText);

    revalidatePath("/success_indicator");
  } catch (error) {
    console.log(error);
  } finally {
    redirect("/success_indicator");
  }
}

export async function updateSuccessIndicator(prevState: any, formData: FormData) {
  const id = formData.get("id");
  formData.delete("id")
  try {
    const res = await fetch(
      `${process.env.HOSTNAME}:${process.env.API_PORT}/success-indicators/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${acc_tok?.value}`,
        },
        body: JSON.stringify(Object.fromEntries(formData)),
        cache: "no-cache",
      },
    );

    // console.log(res.statusText, 'DELETE SUCCESS INDICATOR!', res.redirected)
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    revalidatePath("/success_indicator");
    return data;
  } catch (error) {
    console.log(error);
  } finally {
    redirect("/success_indicator");
  }
}

export async function getSuccessIndicator(id: string) {
  try {
    const res = await fetch(
      `${process.env.HOSTNAME}:${process.env.API_PORT}/success-indicators/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${acc_tok?.value}`,
        },
        cache: "no-cache",
      },
    );

    if (!res.ok) throw new Error(res.statusText);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getAllPPA() {
  try {
    const res = await fetch(
      `${process.env.HOSTNAME}:${process.env.API_PORT}/success-indicators/ppa/all`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${acc_tok?.value}`,
        },
        cache: "no-cache",
      },
    );

    if (!res.ok) throw new Error(res.statusText);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
