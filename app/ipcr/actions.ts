export async function submitIPCR(prevState: any, formData: any) {
  try {

    const res = await fetch("http://localhost:3000/api/ipcr/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData))
    });

    if (!res.ok) throw new Error('Something wrong')

    // await res.json()
    // revalidatePath('/ipcr/new');
    console.log(await res.json(), 'HOY!!')
    return { message: 'Successfully' }
  } catch (error) {
    console.log(error)
    return { message: 'Error' }
  }

}