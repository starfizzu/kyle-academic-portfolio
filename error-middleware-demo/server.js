const express = require('express');
const AppError = require('./middleware/AppError');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/success', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Request was successful!',
    data: {
      user: 'John Doe',
      role: 'admin',
    },
  });
});

app.get('/error', (req, res, next) => {
  const err = new AppError('Something went wrong on this route.', 500);
  next(err);
});

app.get('/not-authorized', (req, res, next) => {
  next(new AppError('You are not authorized to access this resource.', 401));
});

app.get('/bad-request', (req, res, next) => {
  next(new AppError('Invalid request data provided.', 400));
});

app.get('/crash', (req, res, next) => {
  try {
    throw new Error('Unexpected crash simulated!');
  } catch (err) {
    err.statusCode = 500;
    next(err);
  }
});

app.use((req, res, next) => {
  next(new AppError(`Route '${req.originalUrl}' not found.`, 404));
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
