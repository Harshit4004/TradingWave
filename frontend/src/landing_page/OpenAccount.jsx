import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-5 mt-5">
      <div className="row text-center mt-5">
        <h1 className="mt-2 fs-4">Open a TradingWave account</h1>
        <p className="fs-6 mt-3 text-muted">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <Link
          className="p-1 btn btn-primary fs-5 mt-3 "
          style={{ width: "210px", margin: "0 auto" }}
          to="/signup"
        >
          Sign up for free
        </Link>
      </div>
    </div>
  );
}

export default OpenAccount;
