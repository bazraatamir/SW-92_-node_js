const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");
const bcrypt = require("bcrypt");
const JobModel = require("./jobModel");

const UserModel = sequelize.define("user", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    default: "employ",
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

UserModel.beforeSave(async (user, options) => {
  let salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
});

UserModel.prototype.CheckPassword = async function (password) {
  let check = await bcrypt.compare(this.password, password);
  return check;
};

UserModel.hasMany(JobModel, {
  foreignKey: "email",
});

module.exports = UserModel;
