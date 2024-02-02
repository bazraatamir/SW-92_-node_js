const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Todo = sequelize.define("Todo", {
  TodoName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Todo;
