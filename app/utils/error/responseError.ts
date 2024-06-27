export class ResponseError extends Error {
  response: Response;
  constructor(message: string, res: Response) {

    super(message);
    this.name = this.constructor.name
    this.response = res
  }
}


