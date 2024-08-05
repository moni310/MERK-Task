class appError extends Error {
  constructor(
    statusCode = 500,
    message = "Something went wrong",
    isOperational = true,
    stack = ""
  ) {
    super(message);
    this.status = statusCode;
    this.isOperational = isOperational;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

module.exports = appError;
