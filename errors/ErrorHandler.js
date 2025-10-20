// middlewares/errorHandler.js

const errorHandler = (err, req, res, next) => {
  console.error(`[ERROR] ${err.name}: ${err.message}`);

  const status = err.statusCode || 500;
  res.status(status).json({
    success: false,
    error: err.name,
    message: err.message || 'Something went wrong!'
  });
};

module.exports = errorHandler;
