function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container ">
      <div className="row mt-5 pt-5">
        <div className="col-lg-8 col-md-12">
          <img src={imageURL} alt="Product Image" style={{width: "81%"}}/>
        </div>
        <div className="col-lg-4 col-md-12 mt-5">
          <h1 className="fs-3">{productName}</h1>
          <p className="mt-4 text-muted">{productDescription}</p>
          <div>
            <a href={tryDemo} className="me-2 text-decoration-none">Try demo &nbsp;<i className="fa-solid fa-arrow-right " style={{fontSize: "13px"}}></i></a>
            <a href={learnMore} className="ms-5 text-decoration-none">Learn more &nbsp;<i className="fa-solid fa-arrow-right " style={{fontSize: "13px"}}></i></a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img
                src="media\images\googlePlayBadge.svg"
                alt="Google Play Store badge"
              />
            </a>
            <a href={appStore} className="ms-3">
              <img
                src="media\images\appstoreBadge.svg"
                alt="Apple Store Badge"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
