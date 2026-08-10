function Hero() {
    return (
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img src="media/images/landing.svg" alt="Hero Image" className="mb-5 m-auto home-hero-image" style={{width:"70%"}}/>
                <h1 className="mt-2 fs-3">Invest in everything</h1>
                <p className="fs-5 mt-1">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className="p-1 btn btn-primary fs-5 mt-3 " style={{width: "210px", margin: "0 auto"}}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Hero;
