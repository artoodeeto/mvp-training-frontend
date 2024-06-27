import { notFound } from "next/navigation";
import { ResponseError } from "./responseError";
import { construct } from 'radash'

interface IErrorResponse {
  statusCode: number;
  message: string[] | string;
  timestamp: string;
}


export async function handleError(err: unknown) {

  console.log(err, 'haaa?')

  if (err instanceof ResponseError) {
    const errRes = await err.response.json();
    const statusCode = err.response.status

    switch (err.response.status) {
      case 400:
        // handle bad request
        return {
          isOk: false,
          statusCode,
          errorMsg: construct(errRes.message),
        }
      case 403:
        // handle forbidden
        // redirect maybe?
        break;
      case 404:
        // handle not found
        notFound();
      case 401:
        // Prompt the user to log back in
        // showUnauthorizedDialog()
        break;
      case 500:
        // Show user a dialog to apologize that we had an error and to 
        // try again and if that doesn't work contact support
        // showErrorDialog()

        break;
      default:
        // Show 
        // throw new Error('Unhandled fetch response', { cause: res })
        return {
          errorMsg: 'Unhandled fetch response'
        }
    }
  }
  throw new Error('Unknown fetch error', { cause: err })
}