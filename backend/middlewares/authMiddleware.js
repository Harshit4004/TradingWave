const jwt = require("jsonwebtoken");
const { User } = require("../models/UserModel");
require("dotenv").config();

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        status: false,
        message: "Unauthorized",
      });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        status: false,
        message: "User not found",
      });
    }

    // Make the authenticated user available to later handlers
    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({
      status: false,
      message: "Invalid or expired token",
    });
  }
};

module.exports = authMiddleware;