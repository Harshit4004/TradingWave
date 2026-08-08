const { User } = require("../models/UserModel");
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require("bcrypt");

module.exports.signup = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const user = await User.create({
      email,
      password,
      username,
    });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
    });
    return res.status(201).json({
      success: true,
      message: "User signed up successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Incorrect email or password",
      });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(401).json({
        success: false,
        message: "Incorrect email or password",
      });
    }
    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
    });
    return res
      .status(200)
      .json({ message: "User logged in successfully", success: true });
  } catch (error) {
    next(error);
  }
};

module.exports.logout = async (req, res, next) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
    });

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    next(error);
  }
};
