const express = require("express");
const router = express.Router();

const {
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeeSkills,
  addEmployeeSkill,
  updateEmployeeSkill,
  getSkillGaps,
  getReadiness,
} = require("../controllers/employeeController");

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

router.get(
  "/",
  protect,
  authorize("admin", "manager"),
  getEmployees
);

router.get(
  "/:id",
  protect,
  getEmployee
);

router.put(
  "/:id",
  protect,
  updateEmployee
);

router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteEmployee
);

router.get(
  "/:id/skills",
  protect,
  getEmployeeSkills
);

router.post(
  "/:id/skills",
  protect,
  addEmployeeSkill
);

router.put(
  "/:id/skills/:skillId",
  protect,
  updateEmployeeSkill
);

router.get(
  "/:id/skill-gaps",
  protect,
  getSkillGaps
);

router.get(
  "/:id/readiness",
  protect,
  getReadiness
);

module.exports = router;