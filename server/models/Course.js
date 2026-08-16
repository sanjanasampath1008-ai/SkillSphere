const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    provider: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      default: "General",
    },

    duration: {
      type: String,
      default: "",
    },

    difficulty: {
      type: String,
      default: "Beginner",
    },

    rating: {
      type: Number,
      default: 4.5,
    },

    enrolled: {
      type: Boolean,
      default: false,
    },

    progress: {
      type: Number,
      default: 0,
    },

    linkedSkill: {
      type: String,
      default: "",
    },

    url: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.Course || mongoose.model("Course", courseSchema);