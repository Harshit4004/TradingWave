function Pricing() {
  return (
    <div className="container">
      <div className="row mt-5 pt-4">
        <div className="col-lg-5 col-md-12 mt-5">
          <h1 className="mb-3 fs-4">Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See Pricing
            <i
              className="fa-solid fa-arrow-right"
              style={{ fontSize: "13px" }}
            ></i>
          </a>
        </div>
        <div className="col-lg-7 col-md-12 mt-5">
          <div className="row">
            <div className="col-lg-4 col-md-4 d-flex align-items-center">
              <img
                src="media\images\pricing0.svg"
                alt=""
                style={{width:"110px"}}
              />
              <p className="pt-5 text-muted" style={{ fontSize: ".6rem"}}>Free account opening</p>
            </div>
            <div className="col-lg-5 col-md-4 d-flex align-items-center" >
              <img
                src="media\images\pricing0.svg"
                alt=""
                style={{width:"110px"}}
              />
              <p className="pt-5 text-muted" style={{ fontSize: ".6rem"}}>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col-lg-3 col-md-4 d-flex align-items-center">
              <img
                src="media\images\intradayTrades.svg"
                alt=""
                style={{width:"110px"}}
              />
              <p className="pt-5 text-muted" style={{ fontSize: ".6rem" }}>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
