const express = require('express');
const { body } = require('express-validator');

//Middlewares
const {
  accountExists,
  enoughMoney,
} = require('../middlewares/transfers.middlewares');

// Controller
const {
  createTransfer, //El usuario envía el dinero a la cuenta del destinatario
} = require('../controllers/transfers.controller');

const router = express.Router();

router.post('/', accountExists, enoughMoney, createTransfer);

module.exports = { transfersRouter: router };
