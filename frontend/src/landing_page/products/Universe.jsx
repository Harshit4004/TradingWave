function Universe() {
  return (
    <div className="container">
      <div className="row text-center mb-5">
        <h1 className="fs-4 mb-4">The TradingWave Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-lg-4 col-md-6 col-sm-12 p-4 mt-4">
          <img
            src="media\images\zerodhaFundhouse.png"
            alt=""
            style={{ width: "60%" }}
          />
          <p className="small text-muted mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-5 mt-2">
          <img
            src="media\images\sensibullLogo.svg"
            alt=""
            style={{ width: "85%" }}
          />
          <p className="small text-muted mt-3 ">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-4 mt-3">
          <img src="media\images\tijori.svg" alt="" style={{ width: "47%" }} />
          <p className="small text-muted mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-5">
          <img
            src="media\images\streakLogo.png"
            alt=""
            style={{ width: "65%" }}
          />
          <p className="small text-muted mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-5 ">
          <img
            src="media\images\smallcaseLogo.png"
            alt=""
            style={{ width: "85%" }}
          />
          <p className="small text-muted mt-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-5 mt-1">
          <img src="media\images\dittoLogo.png" alt="" style={{ width: "50%" }}/>
          <p className="small text-muted mt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <button
          className="p-1 btn btn-primary fs-5 mt-3 mb-5"
          style={{ width: "210px", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
