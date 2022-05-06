const express = require('express');
const cors = require('cors');

//Routers
const { usersRouter } = require('./routes/users.routes');
const { transfersRouter } = require('./routes/transfers.routes');

//Init express app
const app = express();

//Enable CORS
app.use(cors());

//Enable incomig JSON data
app.use(express.json());

//Endpoints
//http://localhost:5000/api/v1/users
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/transfers', transfersRouter);

module.exports = { app };
