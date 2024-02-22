const Sequelize = require("sequelize");

const sequelize = new Sequelize("sw-923", "root", "123456789", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
