const express = require("express");
const router = express.Router();
const {
  createBlog,
  getAllBlog,
  getCategoryBolog,
} = require("../controller/blogController");

router.post("/", createBlog).get("/", getAllBlog).get("/:id", getCategoryBolog);

module.exports = router;
