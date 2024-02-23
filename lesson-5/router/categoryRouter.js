const express = require("express");
const router = express.Router();
const {
  createCategory,
  getAllCategory,
} = require("../controller/categoryController");

router.post("/", createCategory).get(getAllCategory);

module.exports = router;
