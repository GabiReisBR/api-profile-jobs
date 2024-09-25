// src/database.js
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'  // O arquivo do banco de dados será salvo aqui
});

module.exports = sequelize;
