const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      enum: [
        "Frontend",
        "Backend",
        "Cloud",
        "DevOps",
        "Soft Skills",
        "Architecture",
        "Data",
        "Other",
      ],
      default: "Other",
    },

    description: {
      type: String,
      default: "",
    },

    level: {
      type: String,
      default: "Intermediate",
    },

    employees: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.Skill || mongoose.model("Skill", skillSchema);