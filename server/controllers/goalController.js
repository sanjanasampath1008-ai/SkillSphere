const Goal = require("../models/Goal");

exports.getGoals = async (req, res) => {
  try {
    let query = {};

    if (req.user.role === "employee") {
      query.employee = req.user._id;
    }

    if (req.query.employee) {
      query.employee = req.query.employee;
    }

    const goals = await Goal.find(query)
      .populate("employee", "firstName lastName email")
      .sort({ createdAt: -1 });

    res.json(goals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createGoal = async (req, res) => {
  try {
    const data = {
      ...req.body,
      employee: req.body.employee || req.user._id,
    };

    const goal = await Goal.create(data);

    const populated = await Goal.findById(goal._id)
      .populate("employee", "firstName lastName email");

    res.status(201).json(populated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateGoal = async (req, res) => {
  try {
    const goal = await Goal.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!goal) {
      return res.status(404).json({ message: "Goal not found" });
    }

    res.json(goal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteGoal = async (req, res) => {
  try {
    const goal = await Goal.findByIdAndDelete(req.params.id);

    if (!goal) {
      return res.status(404).json({ message: "Goal not found" });
    }

    res.json({ message: "Goal deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};