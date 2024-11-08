const express = require('express');
const { getTransactions } = require('../controllers/employeeTransaction'); // Import the controller function
const router = express.Router();

// Route to get all transactions
router.get('/transaction', getTransactions);  // This endpoint will be triggered when the frontend makes a GET request to /api/transaction

module.exports = router;
