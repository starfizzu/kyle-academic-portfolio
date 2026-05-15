const express = require('express');
const router = express.Router();
const { getAllUsers, getUserOrders } = require('../controllers/usersController');

router.get('/', getAllUsers);
router.get('/:userId/orders', getUserOrders);

module.exports = router;
