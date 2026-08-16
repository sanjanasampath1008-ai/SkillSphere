const jwt = require("jsonwebtoken");

function generateToken(user) {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
      email: user.email,
    },
    process.env.JWT_SECRET || "skillsphere_secret_2026",
    {
      expiresIn: "7d",
    }
  );
}

module.exports = generateToken;