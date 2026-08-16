const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    authorName: {
      type: String,
      default: "",
    },

    authorRole: {
      type: String,
      default: "",
    },

    type: {
      type: String,
      default: "Performance Review",
    },

    strengths: [String],

    improvements: [String],

    overall: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.Feedback ||
  mongoose.model("Feedback", feedbackSchema);