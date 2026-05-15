const { orders, products, users } = require('../data/store');

const createOrder = (req, res) => {
  const { userId, productId, quantity } = req.body;

  if (!userId || !productId || !quantity) {
    return res.status(400).json({
      status: 400,
      message: "Bad Request. Fields required: userId, productId, quantity."
    });
  }

  const user = users.find(u => u.id === parseInt(userId));
  if (!user) {
    return res.status(404).json({
      status: 404,
      message: `User with ID ${userId} not found.`
    });
  }

  const product = products.find(p => p.id === parseInt(productId));
  if (!product) {
    return res.status(404).json({
      status: 404,
      message: `Product with ID ${productId} not found.`
    });
  }

  if (quantity <= 0) {
    return res.status(400).json({
      status: 400,
      message: "Bad Request. Quantity must be greater than zero."
    });
  }

  const newOrder = {
    id: orders.length > 0 ? Math.max(...orders.map(o => o.id)) + 1 : 2001,
    userId: parseInt(userId),
    productId: parseInt(productId),
    quantity: parseInt(quantity),
    totalPrice: product.price * parseInt(quantity),
    status: "pending"
  };

  orders.push(newOrder);

  res.status(201).json({
    status: 201,
    message: "Order created successfully.",
    data: newOrder
  });
};

const deleteOrder = (req, res) => {
  const id = parseInt(req.params.id);
  const index = orders.findIndex(o => o.id === id);

  if (index === -1) {
    return res.status(404).json({
      status: 404,
      message: `Order with ID ${id} not found.`
    });
  }

  const deleted = orders.splice(index, 1);

  res.status(200).json({
    status: 200,
    message: `Order with ID ${id} deleted successfully.`,
    data: deleted[0]
  });
};

module.exports = { createOrder, deleteOrder };
