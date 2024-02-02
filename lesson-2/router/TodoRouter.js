const express = require("express");
const router = express.Router();
const { getAllTodo, AddTodo } = require("../controller/TodoController");
router.get("/", getAllTodo).post("/", AddTodo);

module.exports = router;
