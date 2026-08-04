const { Holding } = require("../models/HoldingsModel");
const { Position } = require("../models/PositionsModel");
const { Order } = require("../models/OrdersModel");

module.exports.allHoldings = async (req, res, next) => {
  try {
    const allHoldings = await Holding.find({}).lean();

    return res.status(200).json(allHoldings);
  } catch (error) {
    next(error);
  }
};

module.exports.allPositions = async (req, res, next) => {
  try {
    const allPositions = await Position.find({}).lean();

    return res.status(200).json(allPositions);
  } catch (error) {
    next(error);
  }
};

module.exports.newOrder = async (req, res, next) => {
  try {
    const { name, qty, price, mode } = req.body;

    if (!req.user?._id) {
      return res.status(401).json({
        status: false,
        message: "Unauthorized",
      });
    }
    const newOrder = await Order.create({
      name,
      owner: req.user._id,
      qty,
      price,
      mode,
    });

    return res.status(201).json({
      status: true,
      message: "Order saved successfully",
      order: newOrder,
    });
  } catch (error) {
    next(error);
  }
};

module.exports.placedOrders = async (req, res, next) => {
  try { 
    if (!req.user?._id) {
      return res.status(401).json({
        status: false,
        message: "Unauthorized",
      });
    }
    const orders = await Order.find({
      owner: req.user._id,
    })
      .sort({ createdAt: -1 })
      .lean();
    return res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};
