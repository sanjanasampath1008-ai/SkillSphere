const Feedback = require("../models/Feedback");

exports.getEmployeeFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find({
      employee: req.params.id,
    })
      .populate("author", "firstName lastName role")
      .sort({ createdAt: -1 });

    res.json(feedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.create({
      ...req.body,
      author: req.user._id,
      authorName:
        `${req.user.firstName || ""} ${req.user.lastName || ""}`.trim(),
      authorRole: req.user.role,
    });

    const populated = await Feedback.findById(feedback._id)
      .populate("author", "firstName lastName role");

    res.status(201).json(populated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};