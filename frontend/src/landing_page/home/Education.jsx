function Education() {
    return ( 
        <div className="container">
            <div className="row mt-5 pt-4">
                <div className="col-lg-6 col-md-12 pe-5 mt-4">
                    <img src="media/images/education.svg" alt="
                    Education Image" style={{width: "90%"}}/>
                </div>
                <div className="col-lg-6 col-md-12 mt-4 pt-5">
                    <h1 className="mb-3 fs-4">Free and open market education</h1>
                    <p className="text-muted">
                       Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <a href="" style={{textDecoration: "none"}}>Varsity<i className="fa-solid fa-arrow-right " style={{fontSize: "13px"}}></i></a>

                    <p className="text-muted mt-4 ">
                        TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                    <a href="" style={{textDecoration: "none"}}>TradingQ&A<i className="fa-solid fa-arrow-right" style={{fontSize: "13px"}}></i></a>
                </div>
                
            </div>
        </div>
     );
}

export default Education;