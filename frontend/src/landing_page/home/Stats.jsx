function Stats() {
    return (
        <div className="container mt-5 pt-5">
            <div className="row mt-5 pt-5">
                <div className="col-lg-6 col-md-12 pe-5">
                    <h1 className="fs-4">Trust with confidence</h1>
                    <h2 className="fs-5 mt-5">Customer-first always</h2>
                    <p className="text-muted">
                        That's why 1.6+ crore customers trust TradingWave with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
                    </p>

                    <h2 className="fs-5 mt-4" >No spam or gimmicks</h2>
                    <p className="text-muted">
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies
                    </p>

                    <h2 className="fs-5 mt-4">The TradingWave universe</h2>
                    <p className="text-muted">
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                    </p>

                    <h2 className="fs-5 mt-4" >Do better with money</h2>
                    <p className="text-muted">
                        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
                    </p>
                </div>
                <div className="col-lg-6 col-md-12 mt-5">
                    <img src="media\images\ecosystem.png" alt="" style={{ width: "100%" }}/>
                    <div className="text-center mt-4" >
                        <a href="" className="me-4" style={{textDecoration: "none"}}>Explore our products <i className="fa-solid fa-arrow-right fs-9" style={{fontSize: "13px"}}></i></a>
                        <a href="" style={{textDecoration: "none"}}>Try Kite demo <i className="fa-solid fa-arrow-right" style={{fontSize: "13px"}}></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;