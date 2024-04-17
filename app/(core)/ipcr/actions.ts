"use server"
import { createIPCR } from "@/app/backendAPIRoutes/Ipcr"
import { IIPCR } from "@/app/interface/ipcr"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { construct } from 'radash'

export async function IPCRNew(prevState: any, formData: FormData) {
  const userId = formData.get('ratee');
  const formDataObject = Object.fromEntries(formData.entries())
  const finalObject = construct(formDataObject) as IIPCR
  console.log(finalObject)
  try {

    await createIPCR(finalObject)
    revalidatePath(`/user/${userId}/ipcr`);
    return { message: 'Successfully' }
  } catch (error) {
    console.log(error)
    return { message: 'Error' }
  } finally {
    redirect(`/user/${userId}/ipcr`);
  }

}