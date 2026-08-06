function Awards() {
    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-lg-6 col-md-12 pe-5 mt-4">
                    <img src="media/images/largestBroker.svg" alt="Award Image" style={{width: "110%"}}/>
                </div>
                <div className="col-lg-6 col-md-12 ps-5 mt-5">
                    <h1 className="fs-2">Largest Stock broken in India</h1>
                    <p className="mb-5">2+ million TradingWave clients contribute to over 15% of all retail order volumes in India daily by trading and inverting in:</p>
                    <div className="row" >
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. Securities</p>
                                </li>
                            </ul>
                        </div>
                        <img src="media\images\pressLogos.png" alt="No Image" style={{width: "90%"}} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;