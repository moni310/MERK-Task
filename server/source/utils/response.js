const createResponse = (
  response,
  status = 500,
  message = "Internal Server error",
  payload
) => {
  if (status === 500) {
    return response.status(status).json({
      message,
    });
  }
  return response.status(status).json({
    message: message,
    data: payload,
  });
};

module.exports = createResponse;
