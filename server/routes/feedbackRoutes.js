const express = require("express");
const router = express.Router();

const {
  getEmployeeFeedback,
  createFeedback,
} = require("../controllers/feedbackController");

const protect = require("../middleware/authMiddleware");

router.get(
  "/employee/:id",
  protect,
  getEmployeeFeedback
);

router.post(
  "/",
  protect,
  createFeedback
);

module.exports = router;