const CareerRole = require("../models/CareerRole");
const User = require("../models/User");
const Skill = require("../models/Skill");

exports.getCareerRoles = async (req, res) => {
  try {
    const roles = await CareerRole.find()
      .populate("requiredSkills.skill")
      .sort({ name: 1 });

    res.json(roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCareerRole = async (req, res) => {
  try {
    const role = await CareerRole.findById(req.params.id)
      .populate("requiredSkills.skill");

    if (!role) {
      return res.status(404).json({ message: "Career role not found" });
    }

    res.json(role);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createCareerRole = async (req, res) => {
  try {
    const role = await CareerRole.create(req.body);
    res.status(201).json(role);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateCareerRole = async (req, res) => {
  try {
    const role = await CareerRole.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!role) {
      return res.status(404).json({ message: "Career role not found" });
    }

    res.json(role);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteCareerRole = async (req, res) => {
  try {
    const role = await CareerRole.findByIdAndDelete(req.params.id);

    if (!role) {
      return res.status(404).json({ message: "Career role not found" });
    }

    res.json({ message: "Career role deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.setCareerTarget = async (req, res) => {
  try {
    const { targetRole } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { targetRole },
      { new: true }
    ).select("-password");

    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};