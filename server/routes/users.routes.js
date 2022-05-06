const express = require('express');
const { body } = require('express-validator');

//Middlewares
const { userExists } = require('../middlewares/users.middlewares');
const {
  createUserValidations,
  loginUserValidations,
  checkValidations,
} = require('../middlewares/validations.middlewares');

// Controller
const {
  getAllUsersTransfers, //Obtiene todas las transferencias hechas por el usuario en sesión
  createUser, //Esta petición creará una nueva cuenta para el usuario.
  getUserById, // Este Endpoint es opcional, solamente lo puse para obtener el salario y el número de cuenta.
  loginUser, //El usuario ingresa su número de cuenta y su contraseña.
} = require('../controllers/users.controller');

const router = express.Router();

router.get('/:id/history', getAllUsersTransfers);

router.get('/:id', userExists, getUserById);

router.post('/signup', createUserValidations, checkValidations, createUser);

router.post('/login', loginUserValidations, checkValidations, loginUser);

module.exports = { usersRouter: router };
