function Hero() {
  return (
    <div className="container">
      <div className="row mt-5 pt-4 text-center">
        <h1 className="fs-3">Charges</h1>
        <p className="fs-5 text-muted">List of all charges and taxes</p>
      </div>
      <div className="row mt-5 pt-4 text-center">
        <div className="col-lg-4 col-md-12">
          <img src="media\images\pricing0.svg" alt="" className="w-75" />
          <h1 className="fs-4 mt-4">Free equity delivery</h1>
          <p className="text-muted mt-4">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-lg-4 col-md-12">
          <img src="media\images\intradayTrades.svg" alt="" className="w-75" />
          <h1 className="fs-4 mt-3">Intraday and F&O trades</h1>
          <p className="text-muted mt-4">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-lg-4 col-md-12">
          <img src="media\images\pricingMF.svg" alt="" className="w-75" />
          <h1 className="fs-4 mt-3">Free direct MF</h1>
          <p className="text-muted mt-4">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
