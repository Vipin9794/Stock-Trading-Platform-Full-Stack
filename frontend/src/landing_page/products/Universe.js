// import React from "react";

// function Universe() {
//   return (
//     <div className="container  mt-5">
//       <div className="row text-center">
//         <h2>The Zerodha Universe</h2>
//         <p className="mt-3">
//           Extend your trading and investment experience even further with our
//           partner platforms
//         </p>
//         <div className="col-4 p-3 mt-4 ">
//           <img
//             src="media/images/zerodhaFundhouse.png"
//             style={{ width: "183px" }}
//           />
//           <p className="text-small text-muted mt-4">
//             Our asset management venture that is creating simple and transparent
//             index funds to help you save for your goals.
//           </p>
//         </div>
//         <div className="col-4 p-3 mt-4 ">
//           <img
//             src="media/images/sensibullLogo.svg"
//             style={{ width: "225px" }}
//           />
//           <p className="text-small text-muted mt-4">
//             Options trading platform that lets you create strategies, analyze
//             positions, and examine data points like open interest, FII/DII, and
//             more.
//           </p>
//         </div>
//         <div className="col-4 p-3 mt-4 ">
//           <img src="media/images/goldenpiLogo.png" style={{ width: "150px" }} />
//           <p className="text-small text-muted mt-4">
//             Investment research platform that offers detailed insights on
//             stocks, sectors, supply chains, and more.
//           </p>
//         </div>
//         <div className="col-4 p-3  ">
//           <img src="media/images/streakLogo.png" style={{ width: "170px" }} />
//           <p className="text-small text-muted mt-4">
//             Systematic trading platform that allows you to create and backtest
//             strategies without coding.
//           </p>
//         </div>
//         <div className="col-4 p-3  ">
//           <img src="media/images/smallcaselogo.png" />
//           <p className="text-small text-muted mt-4">
//             Thematic investing platform that helps you invest in diversified
//             baskets of stocks on ETFs
//           </p>
//         </div>
//         <div className="col-4 p-3  ">
//           <img src="media/images/dittoLogo.png" style={{ width: "148px" }} />
//           <p className="text-small text-muted mt-4">
//             Personalized advice on life and health insurance. No spam and no
//             mis-selling. Sign up for free
//           </p>
//         </div>
//                 <button className='p-2 btn btn-primary fs-5 mb-5 mt-5' style={{width : "20%" , margin : "0 auto"}}>Sign up for free</button>
//       </div>
//     </div>
//   );
// }

// export default Universe;


import React from "react";

function Universe() {
  return (
    <div className="container mt-5 mb-5">
      <div className="text-center">
        <h2 className="fw-bold">The Zerodha Universe</h2>
        <p className="mt-3 text-muted">
          Extend your trading and investment experience even further with our
          partner platforms.
        </p>
      </div>

      {/* Partner Logos Grid */}
      <div className="row text-center mt-4">
        {/* Each partner box */}
        {[
          {
            img: "media/images/zerodhaFundhouse.png",
            width: "183px",
            text: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
          },
          {
            img: "media/images/sensibullLogo.svg",
            width: "225px",
            text: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
          },
          {
            img: "media/images/goldenpiLogo.png",
            width: "150px",
            text: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
          },
          {
            img: "media/images/streakLogo.png",
            width: "170px",
            text: "Systematic trading platform that allows you to create and backtest strategies without coding.",
          },
          {
            img: "media/images/smallcaselogo.png",
            width: "180px",
            text: "Thematic investing platform that helps you invest in diversified baskets of stocks or ETFs.",
          },
          {
            img: "media/images/dittoLogo.png",
            width: "148px",
            text: "Personalized advice on life and health insurance. No spam and no mis-selling. Sign up for free.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 p-4 d-flex flex-column align-items-center"
          >
            <img
              src={item.img}
              alt="partner-logo"
              className="img-fluid"
              style={{ width: item.width }}
            />
            <p className="text-muted mt-3 small">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Button Section */}
      <div className="text-center mt-4">
        <button
          className="btn btn-primary fs-5 px-4 py-2"
          style={{ width: "auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
