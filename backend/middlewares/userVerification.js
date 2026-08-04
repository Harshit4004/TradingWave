const { User } = require("../Models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res) => {
  try {
    const token = req.cookies.token;

    // Check if token exists
    if (!token) {
      return res.json({ status: false, message: "No token found" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    // Find user from database
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.json({ status: false, message: "User not found" });
    }

    return res.json({
      status: true,
      user: {
        _id: user._id,
        username: user.username,
      },
    });
  } catch (error) {
    console.error("Authentication error:", error.message);

    return res.json({
      status: false,
      message: "Invalid or expired token",
    });
  }
};
