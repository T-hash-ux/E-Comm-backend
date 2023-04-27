// Imported the dotenv package
const Sequelize = require('sequelize');
// Imported the sequelize package
require('dotenv').config();

// Used the JAWSDB if it exists and setup the host, dialect, and dialectOptions.
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
