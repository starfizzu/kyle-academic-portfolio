const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById, getProductReviews } = require('../controllers/productsController');

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.get('/:productId/reviews', getProductReviews);

module.exports = router;
