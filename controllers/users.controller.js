const { validationResult } = require('express-validator');

//Models
const { User } = require('../models/user.models');
const { Transfer } = require('../models/transfer.models');

const getAllUsersTransfers = async (req, res) => {
  try {
    // SELECT * FROM users;
    const transfers = await Transfer.findAll({
      include: [{ model: User }],
    });

    res.status(200).json({
      transfers,
    });
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  try {
    const { name, password } = req.body;

    // INSERT INTO ...
    const accountNumber = Math.floor(
      Math.random() * (1000000 - 100000) + 100000
    );

    const newUser = await User.create({ name, password, accountNumber });

    res.status(201).json({ newUser });
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { accountNumber, password } = req.body;

    const user = await User.findOne({ where: { accountNumber, password } });

    if (user) {
      res.status(200).json({ status: 'Successfully authenticated user' });
    } else {
      res.status(403).json({ status: 'Not user found' });
    }
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const { user } = req;

    res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

/*

};

const deleteUser = async (req, res) => {
  try {
    const { user } = req;
    // const { id } = req.params;

    // DELETE FROM ...
    // await user.destroy();
    await user.update({ status: 'deleted' });

    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    console.log(error);
  }
};

*/

module.exports = {
  getAllUsersTransfers,
  createUser,
  getUserById,
  loginUser,
};
