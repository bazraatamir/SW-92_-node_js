const express = require("express");
const router = express.Router();
const { Register, Login } = require("../controller/userController");
router.post("/register", Register).post("/login", Login);

module.exports = router;
