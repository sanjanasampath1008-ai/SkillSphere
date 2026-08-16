const express = require("express");
const router = express.Router();

const {
  getCareerRoles,
  getCareerRole,
  createCareerRole,
  updateCareerRole,
  deleteCareerRole,
  setCareerTarget,
} = require("../controllers/careerController");

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

router.get("/", protect, getCareerRoles);

router.get("/:id", protect, getCareerRole);

router.post(
  "/",
  protect,
  authorize("admin"),
  createCareerRole
);

router.put(
  "/:id",
  protect,
  authorize("admin"),
  updateCareerRole
);

router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteCareerRole
);

router.put(
  "/target",
  protect,
  setCareerTarget
);

module.exports = router;