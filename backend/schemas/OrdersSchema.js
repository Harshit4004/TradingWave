const { Schema } = require("mongoose");

const OrdersSchema = new Schema(
{
  name: {
    type: String,
    required: true
  },

  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    index: true,
    required: true
  },

  qty: {
    type: Number,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  mode: {
    type: String,
    enum: ["BUY", "SELL"],
    required: true
  },

  status: {
    type: String,
    enum: [
      "PENDING",
      "COMPLETED",
      "CANCELLED",
      "REJECTED"
    ],
    default: "COMPLETED"
  },

},
{
  timestamps: true
}
);

module.exports = { OrdersSchema };
