const User = require("../models/User");
const Skill = require("../models/Skill");
const CareerRole = require("../models/CareerRole");
const {
  calculateReadiness,
  getSkillGaps,
} = require("../services/skillGapService");

exports.getEmployees = async (req, res) => {
  try {
    const users = await User.find({ role: "employee" })
      .select("-password")
      .sort({ firstName: 1 });

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getEmployee = async (req, res) => {
  try {
    const employee = await User.findById(req.params.id)
      .select("-password");

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const employee = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).select("-password");

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await User.findByIdAndDelete(req.params.id);

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getEmployeeSkills = async (req, res) => {
  try {
    const employee = await User.findById(req.params.id)
      .populate("skills.skill");

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json(employee.skills || []);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addEmployeeSkill = async (req, res) => {
  try {
    const { skillId, skill, level, proficiency } = req.body;

    let skillDocument;

    if (skillId) {
      skillDocument = await Skill.findById(skillId);
    } else if (skill) {
      skillDocument = await Skill.findOne({
        name: new RegExp(`^${skill}$`, "i"),
      });

      if (!skillDocument) {
        skillDocument = await Skill.create({
          name: skill,
          category: req.body.category || "Other",
        });
      }
    }

    if (!skillDocument) {
      return res.status(400).json({
        message: "Skill is required",
      });
    }

    const employee = await User.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    const existingIndex = employee.skills.findIndex(
      (item) =>
        String(item.skill) === String(skillDocument._id)
    );

    const value = Number(level ?? proficiency ?? 0);

    if (existingIndex >= 0) {
      employee.skills[existingIndex].level = value;
    } else {
      employee.skills.push({
        skill: skillDocument._id,
        level: value,
      });
    }

    await employee.save();

    const updated = await User.findById(employee._id)
      .populate("skills.skill")
      .select("-password");

    res.json(updated.skills);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateEmployeeSkill = async (req, res) => {
  try {
    const employee = await User.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    const skillItem = employee.skills.find(
      (item) => String(item.skill) === String(req.params.skillId)
    );

    if (!skillItem) {
      return res.status(404).json({
        message: "Employee skill not found",
      });
    }

    skillItem.level = Number(
      req.body.level ?? req.body.proficiency ?? skillItem.level
    );

    await employee.save();

    const updated = await User.findById(employee._id)
      .populate("skills.skill")
      .select("-password");

    res.json(updated.skills);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getSkillGaps = async (req, res) => {
  try {
    const employee = await User.findById(req.params.id)
      .populate("skills.skill");

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    let role = null;

    if (employee.targetRole) {
      role = await CareerRole.findOne({
        name: employee.targetRole,
      }).populate("requiredSkills.skill");
    }

    if (!role) {
      return res.json({
        readiness: 0,
        gaps: [],
        role: null,
      });
    }

    const gaps = getSkillGaps(
      employee.skills || [],
      role.requiredSkills || []
    );

    const readiness = calculateReadiness(
      employee.skills || [],
      role.requiredSkills || []
    );

    res.json({
      readiness,
      gaps,
      role,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getReadiness = async (req, res) => {
  try {
    const employee = await User.findById(req.params.id)
      .populate("skills.skill");

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    const role = await CareerRole.findOne({
      name: employee.targetRole,
    }).populate("requiredSkills.skill");

    if (!role) {
      return res.json({
        readiness: 0,
      });
    }

    const readiness = calculateReadiness(
      employee.skills || [],
      role.requiredSkills || []
    );

    res.json({ readiness });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};