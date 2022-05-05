const { Transfer } = require('../models/transfer.models');
const { User } = require('../models/user.models');

const accountExists = async (req, res, next) => {
  try {
    const { receiverUserId } = req.body;

    const account = await User.findOne({
      where: { id: receiverUserId },
    });

    if (!account) {
      return res.status(404).json({
        status: 'error',
        message: 'No account receiver found with the given id',
      });
    }

    req.account = account;

    next();
  } catch (error) {
    console.log(error);
  }
};

const enoughMoney = async (req, res, next) => {
  try {
    const { accountNumberSender, money } = req.body;

    const account = await User.findOne({
      where: { accountNumber: accountNumberSender },
    });

    if (!account) {
      return res.status(404).json({
        status: 'error',
        message: 'No account sender found with the given id',
      });
    }

    req.account = account;

    if (account.amount < money) {
      return res.status(404).json({
        status: 'error',
        message: 'You don´t have enought Money into the account.',
      });
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { accountExists, enoughMoney };
