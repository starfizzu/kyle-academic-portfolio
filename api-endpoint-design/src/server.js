const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');
const usersRouter = require('./routes/users');

app.use('/v1/products', productsRouter);
app.use('/v1/orders', ordersRouter);
app.use('/v1/users', usersRouter);

app.get('/v1', (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Online Store API v1 is running.",
    resources: {
      products: "/v1/products",
      orders: "/v1/orders",
      users: "/v1/users"
    },
    endpoints: [
      "GET    /v1/products",
      "GET    /v1/products/:id",
      "GET    /v1/products?category=electronics&sort=price_asc&limit=10",
      "GET    /v1/products/:productId/reviews",
      "POST   /v1/orders",
      "DELETE /v1/orders/:id",
      "GET    /v1/users",
      "GET    /v1/users/:userId/orders"
    ]
  });
});

app.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: "Route not found."
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 500,
    message: "Internal Server Error."
  });
});

app.listen(PORT, () => {
  console.log(`Online Store API running at http://localhost:${PORT}/v1`);
});
