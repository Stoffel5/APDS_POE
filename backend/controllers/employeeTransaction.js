const Transactions = require('../models/transactionModel');
const mongoose = require('mongoose')
const crypto = require('crypto-js');
require('dotenv').config();

// Get all transactions
const getTransactions = async (req, res) => {
    // finds users transactions
    const transactions = await Transactions.find({providerEmail}).sort({createAt: -1})
    // decrypts transaction information so that user can see it
    transactions.forEach(transaction => {
        const bytes = crypto.AES.decrypt(transaction.recipientAccountNumber, process.env.SECRET_KEY)
        transaction.recipientAccountNumber = bytes.toString(crypto.enc.Utf8)
    })

    if (!transactions.length){
        return res.status(400).json({error: "No transactions found."})
    }
    res.status(200).json(transactions)
};



module.exports = {
    getTransactions
    
};
