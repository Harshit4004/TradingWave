function RightSection({ imageURL, productName, productDescription, linkName }) {
  return (
    <div className="container ">
      <div className="row mt-5">
        <div className="col-lg-4 col-md-12" style={{paddingTop:"120px"}}>
          <h1 className="fs-3">{productName}</h1>
          <p className="mt-4 text-muted">{productDescription}</p>
          <div>
            <a href="" className="me-2 text-decoration-none">{linkName} &nbsp;<i className="fa-solid fa-arrow-right " style={{fontSize: "13px"}}></i></a>
          </div>
        </div>
        <div className="col-lg-8 col-md-12 ps-5">
          <img src={ imageURL } alt="Product Image" style={{width: "95%" }}/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
