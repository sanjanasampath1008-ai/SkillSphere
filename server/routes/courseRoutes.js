const express = require("express");
const router = express.Router();

const {
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

router.get("/", protect, getCourses);

router.post(
  "/",
  protect,
  authorize("admin"),
  createCourse
);

router.put(
  "/:id",
  protect,
  authorize("admin"),
  updateCourse
);

router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteCourse
);

module.exports = router;