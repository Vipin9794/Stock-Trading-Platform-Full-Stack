// import React from "react";

// function Pricing() {
//   return (
//     <div className="container">
//       <div className="row ">
//         <div className="col-4 ">
//           <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
//           <p>
//             We poineered the concept of discount broking and pric transparency
//             in india. Flat fees and no hidden charges.
//           </p>
//           <a href="" style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
//         </div>
//         <div className="col-2"></div>
//         <div className="col-6 mb-5">
//           <div className="row text-center">
//             <div className="col p-3 border">
//               <h1 className="mb-3">₹20</h1>
//               <p>Free equity delivery and  direct mutual funds</p>
//             </div>
//             <div className="col p-3 border">
//               <h1 className="mb-3">₹30</h1>
//               <p>Intraday and F&Q</p>
//             </div>
//             <div className="col"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Pricing;


import React from "react";

function Pricing() {
  return (
    <div className="container my-5">
      <div className="row align-items-center text-center text-md-start">
        {/* Left Section */}
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <h1 className="fs-3 fw-bold mb-3">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-decoration-none fw-semibold text-primary">
            See pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* Right Section */}
        <div className="col-12 col-md-8">
          <div className="row g-3 justify-content-center">
            <div className="col-10 col-sm-5 p-3 border rounded shadow-sm">
              <h2 className="fw-bold">₹20</h2>
              <p className="mb-0">Free equity delivery & direct mutual funds</p>
            </div>
            <div className="col-10 col-sm-5 p-3 border rounded shadow-sm">
              <h2 className="fw-bold">₹30</h2>
              <p className="mb-0">Intraday and F&O trades</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
