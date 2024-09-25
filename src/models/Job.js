// src/models/Job.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Profile = require('./Profile');

const Job = sequelize.define('Job', {
  description: { type: DataTypes.STRING, allowNull: false },
  operationDate: { type: DataTypes.DATE, allowNull: false },
  paymentDate: { type: DataTypes.DATE },
  price: { type: DataTypes.DOUBLE, allowNull: false },
  paid: { type: DataTypes.BOOLEAN, defaultValue: false },
});

Job.belongsTo(Profile, { foreignKey: 'clientId' });
Job.belongsTo(Profile, { foreignKey: 'contractorId' });

module.exports = Job;
