import { throwError } from "rxjs"

export function handleError(error:Response) {
    return throwError(() => {throw new Error(`Error Code:${error.status}`)})
  }