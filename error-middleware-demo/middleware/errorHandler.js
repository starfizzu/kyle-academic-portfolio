const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    error: {
      code: statusCode,
      message: err.message || 'Internal Server Error',
      type: err.name || 'Error',
    },
  });
};

module.exports = errorHandler;
