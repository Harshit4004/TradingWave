function Hero() {
  return (
    <div className="container border-bottom">
      <div className="row text-center my-5 py-4  px-4 ">
        <h1 className="fs-3">TradingWave Products</h1>
        <h3 className="fs-5 fw-normal mt-2">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="fs-7 mt-2 text-muted product-link">
          Check out our
          <a href="" className="text-decoration-none"> investment offerings <i className="fa-solid fa-arrow-right " style={{fontSize: "13px"}}></i></a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
