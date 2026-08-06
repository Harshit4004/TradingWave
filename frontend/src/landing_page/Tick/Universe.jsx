import Card from "./Card";

function Universe() {
  return (
    <div className="container mt-5 " >
      <div className="row mx-1 mb-5">
        <h1 className="fs-4 ms-1 text-muted">TradingWave Universe</h1>
        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
          <Card
            image="media\images\coin.svg"
            content="India's largest zero-commission direct mutual funds platform."
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
          <Card
            image="media\images\console.svg"
            content="Dashboard of your TradingWave account with insights, reports, and visualizations for trades and investments."
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
          <Card
            image="media\images\varsity2.svg"
            content="Free and open stock market and financial education"
            imageSize="57px"
          />
        </div>
      {/* </div> */}
      {/* <div className="row mt-4 mb-5 mx-1"> */}
        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
          <Card
            image="media\images\tijori.svg"
            content="Comprehensive stock research & portfolio tracking platform."
            imageSize="70px"
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
          <Card
            image="media\images\dittoLogo.png"
            content="Insurance made easy! Understand your policy, get answers, and buy insurance—all in one place."
            imageSize="70px"
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
          <Card
            image="media\images\sensibullLogo.svg"
            content="Trade Options like a Pro"
            imageSize="150px"
          />
        </div>
      </div>
    </div>
  );
}

export default Universe;
