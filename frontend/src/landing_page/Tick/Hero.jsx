function Hero() {
  return (
    <div className="container-fluid mt">
      <div className="row mt-5 pt-4 px-1 m-auto d-flex justify-content-center">
        <div
          className="card mb-3 shadow-lg border-0 rounded-3"
          style={{ width: "81%" }}
        >
          <div className="card-body">
            <div className="row px-1 py-5">
              <div className="col-lg-8 col-md-6">
                <h1 className="fs-3">Your TradingWave account is active 🎉</h1>
                <p className="text-muted mt-4" style={{ fontSize: ".8rem" }}>
                  To get started, log in to TradingWave Tick using your User ID and
                  password. You can refer to your registered email ID for more
                  details.
                </p>
                <p className="mt-4 pt-2 pb-1 text-muted">
                  Welcome aboard, and happy investing!
                </p>
                <a
                  href="https://tick-sandy.vercel.app"
                  target="_blank"
                  className="btn mt-4 px-4 fw-medium fs-5 d-flex align-items-center"
                  style={{
                    width: "210px",
                    backgroundColor: "rgb(2, 129, 207)",
                    color: "white",
                  }}
                >
                  <img
                    className="ms-2"
                    src="media\images\logo_Tick1.png"
                    alt="Logo"
                    style={{ width: "40px" }}
                  />
                  Go to Tick
                </a>
              </div>
              <div className="col-lg-1 col-md-1" />
              <div className="col-lg-3 col-md-5 ps-5 kite-card-img">
                <img
                  src="media\images\person-CM-DzsTK.svg"
                  alt="Image"
                  className="d-none d-md-block"
                />
              </div>
            </div>
          </div>
        </div>
        <h1 style={{ width:"82.5%" }} className="mt-5 fs-4 pt-3 mb-5 text-muted ">New to stocks markets?</h1>
        <div
          className="card mb-3 shadow-lg border-0 rounded-3"
          style={{ width: "81%" }}
        >
          <div className="card-body mb-4">
            <div className="row ">
              <div className="col-lg-8 col-md-6">
                <h1 className="fs-3">Varsity live</h1>
                
                <p className="mt-4 pt-2 pb-1 text-muted">
                  Free, live, interactive financial education program. Join now!
                </p>
              </div>
              <div className="col-lg-4 col-md-5 ps-5 kite-card-img">
                <img
                  src="media\images\desktop-right-CqDslLgh.svg"
                  alt="Image"
                  className="d-none d-md-block"
                    style={{ width: "110%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
