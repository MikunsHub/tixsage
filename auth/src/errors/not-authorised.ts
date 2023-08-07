import { CustomError } from "./custom-error";


export class NotAuthorisedError extends CustomError {
    statusCode = 400

    constructor() {
        super("Not Authorised");
    
        // Only because we are extending a built in class
        Object.setPrototypeOf(this, NotAuthorisedError.prototype);
      }

    serializeErrors() {
        return [{message: "Not authorised"}]
    }
}