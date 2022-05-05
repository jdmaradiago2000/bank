const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Transfer = db.define('transfer', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  amount: {
    type: DataTypes.INTEGER,
    defaultValue: 1000,
  },
  senderUserId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  receiverUserId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'active',
  },
});

module.exports = { Transfer };
