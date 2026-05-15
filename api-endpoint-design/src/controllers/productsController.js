const { products, reviews } = require('../data/store');

const getAllProducts = (req, res) => {
  let result = [...products];

  const { category, sort, limit } = req.query;

  if (category) {
    result = result.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  if (sort === 'price_asc') {
    result.sort((a, b) => a.price - b.price);
  } else if (sort === 'price_desc') {
    result.sort((a, b) => b.price - a.price);
  } else if (sort === 'name_asc') {
    result.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (limit) {
    result = result.slice(0, parseInt(limit));
  }

  res.status(200).json({
    status: 200,
    message: "Products retrieved successfully.",
    total: result.length,
    data: result
  });
};

const getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({
      status: 404,
      message: `Product with ID ${id} not found.`
    });
  }

  res.status(200).json({
    status: 200,
    message: "Product retrieved successfully.",
    data: product
  });
};

const getProductReviews = (req, res) => {
  const productId = parseInt(req.params.productId);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({
      status: 404,
      message: `Product with ID ${productId} not found.`
    });
  }

  const productReviews = reviews.filter(r => r.productId === productId);

  res.status(200).json({
    status: 200,
    message: `Reviews for product ID ${productId} retrieved successfully.`,
    total: productReviews.length,
    data: productReviews
  });
};

module.exports = { getAllProducts, getProductById, getProductReviews };
