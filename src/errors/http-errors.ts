import { HttpCodes } from "../constants/http-codes.js";

export class HttpError extends Error {
  public status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class UnauthorizedError extends HttpError {
  constructor(message = "Unauthorized") {
    super(message, HttpCodes.UNAUTHORIZED);
  }
}

export class ForbiddenError extends HttpError {
  constructor(message = "Forbidden") {
    super(message, HttpCodes.FORBIDDEN);
  }
}

export class NotFoundError extends HttpError {
  constructor(message = "Not Found") {
    super(message, HttpCodes.NOT_FOUND);
  }
}

export class BadRequestError extends HttpError {
  constructor(message = "Bad Request") {
    super(message, HttpCodes.BAD_REQUEST);
  }
}

export class InternalServerError extends HttpError {
  constructor(message = "Internal Server Error") {
    super(message, HttpCodes.INTERNAL_SERVER_ERROR);
  }
}