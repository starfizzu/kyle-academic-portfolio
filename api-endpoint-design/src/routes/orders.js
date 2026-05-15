const express = require('express');
const router = express.Router();
const { createOrder, deleteOrder } = require('../controllers/ordersController');

router.post('/', createOrder);
router.delete('/:id', deleteOrder);

module.exports = router;
