import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left Section (Image) */}
        <div className="col-12 col-md-6 p-4 text-center">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
            style={{ maxWidth: "90%", height: "auto" }}
          />
        </div>

        {/* Right Section (Text Content) */}
        <div className="col-12 col-md-6 p-4">
          <h2 className="fw-bold mb-3 text-center text-md-start">
            Largest stock broker in India
          </h2>
          <p className="text-muted mb-4 text-center text-md-start">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            {/* Left List */}
            <div className="col-6">
              <ul className="list-unstyled">
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>

            {/* Right List */}
            <div className="col-6">
              <ul className="list-unstyled">
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

          <div className="text-center text-md-start mt-4">
            <img
              src="media/images/pressLogos.png"
              alt="Press Logos"
              className="img-fluid"
              style={{ maxWidth: "90%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;

// import React from "react";

// function Awards() {
//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-6 p-5">
//           <img src="media/images/largestBroker.svg" alt="" />
//         </div>
//         <div className="col-6 p-5 mt-2">
//           <h1>Largest stock broker in india </h1>
//           <p className="mb-5">
//             2+ million Zerodha clients contribute to over 15% of all retail
//             order volumes in india daily by traiding and investing in:
//           </p>
//           <div className="row">
//             <div className="col-6">
//               <ul>
//                 <li>
//                   <p>Futures and Options</p>
//                 </li>
//                 <li>
//                   <p>Commoditive derivatives</p>
//                 </li>
//                 <li>
//                   <p>Currency derivatives</p>
//                 </li>
//               </ul>
//             </div>
//             <div className="col-6">
//               <ul>
//                 <li>
//                   <p>Stocks & IPOs</p>
//                 </li>
//                 <li>
//                   <p>Direct mutual funds</p>
//                 </li>
//                 <li>
//                   <p>Bonds and Govt. Securities </p>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <img src="media/images/pressLogos.png" style={{width: "90%"}} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Awards;


