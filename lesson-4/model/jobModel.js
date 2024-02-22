const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");
const UserModel = require("./userModel");

const JobModel = sequelize.define("job", {
  JobName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  jobDescription: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  jobDeadline: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  salary: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  JobStatus: {
    type: DataTypes.STRING,
    allowNull: false,
    default: "ordered",
  },
});

module.exports = JobModel;
