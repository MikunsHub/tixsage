import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";


export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //send back a very consistent error response
  if (err instanceof CustomError) {

    res.status(400).send({ errors: err.serializeErrors() });
  }


  res.status(400).send({
    errors: [{ message: "Something went wrong" }],
  });
};
