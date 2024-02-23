const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");
const Category = require("./categoryMode");

const Blog = sequelize.define("Blog", {
  Title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Blog.belongsTo(Category, { foriengKey: "categoryid" });
Category.hasMany(Blog, { as: "blogs", foriengKey: "categoryid" });


module.exports = Blog;
