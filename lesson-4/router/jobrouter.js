const express = require("express");
const router = express.Router();
const protect = require("../meddleware/protect");
const checkRole = require("../meddleware/checkRolle");

const {
  postJob,
  getJob,
  deleteJob,
  UpdateJob,
} = require("../controller/jobController");

router
  .post("/", checkRole, postJob)
  .get("/", protect, getJob)
  .put("/:id", checkRole, UpdateJob)
  .delete("/:id", checkRole, deleteJob);

module.exports = router;
