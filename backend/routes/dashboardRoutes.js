const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const dashboardController = require("../controllers/dashboardController");
const validate = require("../middlewares/validate");
const { orderSchema } = require("../validations/orderValidation");


router.get("/holdings",authMiddleware, dashboardController.allHoldings);

router.get("/positions", authMiddleware, dashboardController.allPositions);

router
  .route("/orders")
  .post( authMiddleware, validate(orderSchema), dashboardController.newOrder)
  .get(authMiddleware, dashboardController.placedOrders);

module.exports = router;
