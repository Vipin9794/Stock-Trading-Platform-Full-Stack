import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-4   border-top">
        <h1 className=" text-center">People</h1>
      </div>
      <div
        className="row  mt-5  text-muted "
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >
        <div className="col-6 ">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%", marginLeft: "95px" }}
            alt=""
          />
          <p style={{ marginLeft: "180px" }}>
            <b>Nithin Kamath</b>
          </p>
          <p style={{ marginLeft: "180px" }}>Founder, CEO</p>
        </div>
        <div className="col-6 ">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <br />
          <p>
            Connect on{" "}
            <a style={{ textDecoration: "none" }} href="">
              Homepage{" "}
            </a>
            /{" "}
            <a style={{ textDecoration: "none" }} href="">
              TradingQnA{" "}
            </a>
            /{" "}
            <a style={{ textDecoration: "none" }} href="">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
