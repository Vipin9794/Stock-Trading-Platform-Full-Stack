import React from "react";

function Universe() {
  return (
    <div className="container  mt-5">
      <div className="row text-center">
        <h2>The Zerodha Universe</h2>
        <p className="mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-4 ">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "183px" }}
          />
          <p className="text-small text-muted mt-4">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-4 ">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "225px" }}
          />
          <p className="text-small text-muted mt-4">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-4 ">
          <img src="media/images/goldenpiLogo.png" style={{ width: "150px" }} />
          <p className="text-small text-muted mt-4">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3  ">
          <img src="media/images/streakLogo.png" style={{ width: "170px" }} />
          <p className="text-small text-muted mt-4">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3  ">
          <img src="media/images/smallcaselogo.png" />
          <p className="text-small text-muted mt-4">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs
          </p>
        </div>
        <div className="col-4 p-3  ">
          <img src="media/images/dittoLogo.png" style={{ width: "148px" }} />
          <p className="text-small text-muted mt-4">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
                <button className='p-2 btn btn-primary fs-5 mb-5 mt-5' style={{width : "20%" , margin : "0 auto"}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
