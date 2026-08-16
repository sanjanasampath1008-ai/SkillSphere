const mongoose = require("mongoose");

const roleSkillSchema = new mongoose.Schema(
  {
    skill: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Skill",
      required: true,
    },

    requiredLevel: {
      type: Number,
      default: 50,
      min: 0,
      max: 100,
    },
  },
  { _id: false }
);

const careerRoleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    department: {
      type: String,
      default: "Engineering",
    },

    description: {
      type: String,
      default: "",
    },

    requiredSkills: [roleSkillSchema],

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
  mongoose.models.CareerRole ||
  mongoose.model("CareerRole", careerRoleSchema);