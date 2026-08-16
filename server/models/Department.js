const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },

    manager: {
      type: String,
      default: "",
    },

    employees: {
      type: Number,
      default: 0,
    },

    readiness: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.Department ||
  mongoose.model("Department", departmentSchema);