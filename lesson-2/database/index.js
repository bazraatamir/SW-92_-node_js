const { Sequelize } = require("sequelize");

const db = new Sequelize("sw-923", "root", "123456789", {
  host: "localhost",
  dialect: "mysql",
});


module.exports = db;
