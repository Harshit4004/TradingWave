const { model } = require("mongoose");

const { PositionsSchema } = require("../schemas/PositionsSchema");

const Position = new model("Position", PositionsSchema);

module.exports = { Position };