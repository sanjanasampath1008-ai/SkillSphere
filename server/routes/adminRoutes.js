const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");
const Department = require("../models/Department");

router.get(
  "/departments",
  protect,
  authorize("admin"),
  async (req, res) => {
    try {
      const departments = await Department.find().sort({ name: 1 });
      res.json(departments);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);

router.post(
  "/departments",
  protect,
  authorize("admin"),
  async (req, res) => {
    try {
      const department = await Department.create(req.body);
      res.status(201).json(department);
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
);

router.put(
  "/departments/:id",
  protect,
  authorize("admin"),
  async (req, res) => {
    try {
      const department = await Department.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

      res.json(department);
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
);

router.delete(
  "/departments/:id",
  protect,
  authorize("admin"),
  async (req, res) => {
    try {
      await Department.findByIdAndDelete(req.params.id);

      res.json({
        message: "Department deleted",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);

router.get(
  "/reports",
  protect,
  authorize("admin"),
  async (req, res) => {
    try {
      const User = require("../models/User");
      const Goal = require("../models/Goal");
      const Skill = require("../models/Skill");

      const employees = await User.countDocuments({
        role: "employee",
      });

      const managers = await User.countDocuments({
        role: "manager",
      });

      const skills = await Skill.countDocuments();

      const completedGoals = await Goal.countDocuments({
        status: "Completed",
      });

      res.json({
        employees,
        managers,
        skills,
        completedGoals,
        avgReadiness: 71,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);

module.exports = router;