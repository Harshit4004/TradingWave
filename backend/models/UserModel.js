const { model } = require("mongoose");

const { UserSchema } = require("../schemas/UserSchama");

const User = new model("User", UserSchema);

module.exports = { User };