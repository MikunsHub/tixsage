import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";

export class RequestValidationError extends CustomError {
  statusCode = 400;
  constructor(public errors: ValidationError[]) {
    super("Invalid request parameters");

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((err: ValidationError) => {
      switch (err.type) {
        case "field":
          return { message: err.msg, field: err.path };
        case "alternative":
          return { message: err.msg };
        case "alternative_grouped":
          return { message: err.msg };
        case "unknown_fields":
          return { message: err.msg };
        default:
          throw new Error(`Unknown error type`);
      }
    });
  }
}
