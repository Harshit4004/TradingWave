import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import api from ".././api/api";
import { toast } from "react-toastify";

import GeneralContext from "./GeneralContext";
import "./ActionWindow.css";

const ActionWindow = ({ uid, type, price }) => {
  const [stockQuantity, setStockQuantity] = useState(1);

  const { closeBuyWindow, closeSellWindow } = useContext(GeneralContext);

  const handleActionClick = async () => {
    const quantity = Number(stockQuantity);
    const stockPrice = Number(price);
    if (!quantity || quantity < 1) {
      toast.error("Quantity must be at least 1");
      return;
    }
    if (!stockPrice || stockPrice <= 0) {
      toast.error("Price must be greater than 0");
      return;
    }
    try {
      const { data } = await api.post("/api/orders", {
        name: uid,
        qty: quantity,
        price: price,
        mode: type,
      });

      toast.success(
        data?.message ||
          `${type === "BUY" ? "Buy" : "Sell"} order placed successfully!`,
      );

      if (type === "BUY") {
        closeBuyWindow();
      } else {
        closeSellWindow();
      }
    } catch (err) {
      console.error("Order error:", err);
      toast.error(
        err.response?.data?.message ||
          `Failed to place ${type.toLowerCase()} order. Please try again.`,
      );
    }
  };

  const handleCancelClick = () => {
    if (type === "BUY") {
      closeBuyWindow();
    } else {
      closeSellWindow();
    }
  };

  const marginRequired = Number(stockQuantity) * Number(price);

  return (
    <div className="action-window-overlay">
    <div className="container" id="action-window" draggable="true">
      <div className="regular-order">
        <p className="fw-bold">{uid}</p>
        <div className="inputs">
          
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              min="1"
              step="1"
              value={stockQuantity}
              onChange={(e) => {
                const value = e.target.value;

                if (value === "" || Number(value) >= 1) {
                  setStockQuantity(value);
                }
              }}
            />
          </fieldset>

          <fieldset>
            <legend style={{ color: "black" }}>Price</legend>
            <input type="number" min="0" step="0.05" value={price} />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{marginRequired.toFixed(2)}</span>

        <div>
          <Link
            className={`btn ${type === "BUY" ? "btn-blue" : "btn-red"}`}
            onClick={handleActionClick}
          >
            {type}
          </Link>

          <Link className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ActionWindow;
