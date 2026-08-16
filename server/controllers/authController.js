const bcrypt = require("bcryptjs");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");

// Remove password before sending user data to frontend
const safeUser = (user) => {
  const userObject = user.toObject();
  delete userObject.password;
  return userObject;
};

/* =========================================================
   REGISTER
========================================================= */

exports.register = async (req, res) => {
  try {
    /*
      Frontend sends:

      {
        name,
        email,
        password,
        role
      }

      Backend database stores:

      firstName,
      lastName,
      email,
      password,
      role,
      currentRole
    */

    const {
      name,
      firstName,
      lastName,
      email,
      password,
      role,
      currentRole,
    } = req.body;

    // -------------------------------------------------------
    // Support BOTH formats
    // -------------------------------------------------------

    let finalFirstName = "";
    let finalLastName = "";

    // New frontend format: name
    if (name && name.trim()) {
      const nameParts = name.trim().split(/\s+/);

      finalFirstName = nameParts[0];

      if (nameParts.length > 1) {
        finalLastName = nameParts.slice(1).join(" ");
      } else {
        finalLastName = "";
      }
    }

    // Old / alternate format
    if (!finalFirstName && firstName) {
      finalFirstName = firstName.trim();
    }

    if (!finalLastName && lastName) {
      finalLastName = lastName.trim();
    }

    // -------------------------------------------------------
    // Validation
    // -------------------------------------------------------

    if (!finalFirstName || !email || !password || !role) {
      return res.status(400).json({
        message: "Please fill in all required fields.",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters.",
      });
    }

    // -------------------------------------------------------
    // Validate role
    // -------------------------------------------------------

    const normalizedRole = String(role).toLowerCase();

    const allowedRoles = [
      "employee",
      "manager",
      "admin",
    ];

    if (!allowedRoles.includes(normalizedRole)) {
      return res.status(400).json({
        message: "Invalid role selected.",
      });
    }

    // -------------------------------------------------------
    // Check existing email
    // -------------------------------------------------------

    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await User.findOne({
      email: normalizedEmail,
    });

    if (existingUser) {
      return res.status(409).json({
        message: "Email already registered.",
      });
    }

    // -------------------------------------------------------
    // Hash password
    // -------------------------------------------------------

    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    // -------------------------------------------------------
    // Create user
    // -------------------------------------------------------

    const user = await User.create({
      firstName: finalFirstName,

      // If no last name was entered, use an empty string.
      // This keeps the registration compatible with the
      // existing database structure.
      lastName: finalLastName || "User",

      email: normalizedEmail,

      password: hashedPassword,

      role: normalizedRole,

      /*
        currentRole is the person's current account/job role.

        Since the registration screen currently asks the
        user to choose Employee / Manager / Admin, we store
        that selected role here as well.
      */
      currentRole:
        currentRole ||
        normalizedRole.charAt(0).toUpperCase() +
          normalizedRole.slice(1),

      department: "Engineering",

      manager: "Sarah Chen",

      targetRole: "Senior Full-Stack Developer",

      experience: "Mid-Level (3 years)",

      readiness: 67,
    });

    // -------------------------------------------------------
    // Generate JWT
    // -------------------------------------------------------

    const authToken = generateToken(user);

    // -------------------------------------------------------
    // Send response
    // -------------------------------------------------------

    return res.status(201).json({
      message: "Account created successfully.",
      token: authToken,
      user: safeUser(user),
    });
  } catch (error) {
    console.error("REGISTER ERROR:", error);

    return res.status(500).json({
      message:
        error.message ||
        "Unable to create account.",
    });
  }
};

/* =========================================================
   LOGIN
========================================================= */

exports.login = async (req, res) => {
  try {
    const email = String(
      req.body.email || ""
    )
      .trim()
      .toLowerCase();

    const password = String(
      req.body.password || ""
    );

    if (!email || !password) {
      return res.status(400).json({
        message:
          "Please enter your email and password.",
      });
    }

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    const passwordMatches =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!passwordMatches) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    const authToken = generateToken(user);

    return res.status(200).json({
      message: "Login successful.",
      token: authToken,
      user: safeUser(user),
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);

    return res.status(500).json({
      message:
        error.message ||
        "Unable to login.",
    });
  }
};

/* =========================================================
   CURRENT USER
========================================================= */

exports.me = async (req, res) => {
  try {
    const user = await User.findById(
      req.user.id
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    return res.status(200).json({
      user,
    });
  } catch (error) {
    console.error("ME ERROR:", error);

    return res.status(500).json({
      message:
        error.message ||
        "Unable to retrieve user.",
    });
  }
};