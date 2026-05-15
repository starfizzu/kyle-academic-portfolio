const { users, orders } = require('../data/store');

const getAllUsers = (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Users retrieved successfully.",
    total: users.length,
    data: users
  });
};

const getUserOrders = (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({
      status: 404,
      message: `User with ID ${userId} not found.`
    });
  }

  const userOrders = orders.filter(o => o.userId === userId);

  res.status(200).json({
    status: 200,
    message: `Orders for user ID ${userId} retrieved successfully.`,
    user: user.name,
    total: userOrders.length,
    data: userOrders
  });
};

module.exports = { getAllUsers, getUserOrders };
