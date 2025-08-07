import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row p-5 mt-5  text-center">
        <h2>Charges</h2>
        <p className="text-muted mt-3 fs-5 ">List of all charges and taxes</p>
      </div>
      <div className="row p-1 mt-5">
        <div className="col-4 mt-5">
          <img src="media\images\pricingEquity.svg" />
          <h3 className="text-center">Free equity delivery</h3>
          <p className="mt-4 text-muted text-center">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img src="media\images\intradayTrades.svg" />
          <h3 className="text-center">Intraday and F&O trades</h3>
          <p className="mt-4 text-muted text-center">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img src="media\images\pricingEquity.svg" />
          <h3 className="text-center">Free direct MF</h3>
          <p className="mt-4 text-muted text-center">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
