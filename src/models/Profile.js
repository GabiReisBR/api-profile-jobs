// src/models/Profile.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Profile = sequelize.define('Profile', {
  firstName: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING, allowNull: false },
  profession: { type: DataTypes.STRING, allowNull: false },
  balance: { type: DataTypes.DOUBLE, defaultValue: 0 },
  type: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Profile;
