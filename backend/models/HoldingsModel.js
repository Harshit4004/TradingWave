const { model } = require("mongoose");

const { HoldingsSchema } = require("../schemas/HoldingsSchama");

const Holding = new model("Holding", HoldingsSchema);

module.exports = { Holding };