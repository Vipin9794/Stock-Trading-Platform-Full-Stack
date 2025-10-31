// import React from "react";

// function Education() {
//   return (
//     <div className="container mt-5">
//       <div className="row ">
//         <div className="col-6 ">
//           <img src="media/images/education.svg" style={{width:"70%"}} alt="" />
//         </div>
//         <div className="col-6 ">
//           <h1 className="mb-3 fs-2">Free and open market education</h1>
//           <p>
//             Varsity, the largest online stock market education book in the world
//             covering everything from the basics to adavanced trading.
//           </p>
//           <a href="" style={{ textDecoration: "none" }}>
//             Versity <i class="fa-solid fa-arrow-right"></i>
//           </a>

//           <p className="mt-5">
//             TradingQ&A, the most activ trading and investment community in india
//             for all your market related queries.
//           </p>
//           <a href="" style={{ textDecoration: "none" }}>
//             TradingQ&A <i class="fa-solid fa-arrow-right"></i>
//           </a>
//         </div>
//         <div className="col-2"></div>
//       </div>
//     </div>
//   );
// }

// export default Education;


import React from "react";

function Education() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src="media/images/education.svg"
            alt="Education"
            className="img-fluid"
            style={{ maxWidth: "80%" }}
          />
        </div>

        {/* Right Content */}
        <div className="col-12 col-md-6">
          <h1 className="fs-3 fw-bold mb-3">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world,
            covering everything from basics to advanced trading.
          </p>
          <a href="#" className="text-decoration-none fw-semibold text-primary">
            Varsity <i className="fa-solid fa-arrow-right"></i>
          </a>

          <p className="mt-4">
            TradingQ&A, the most active trading and investment community in India,
            for all your market-related queries.
          </p>
          <a href="#" className="text-decoration-none fw-semibold text-primary">
            TradingQ&A <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
