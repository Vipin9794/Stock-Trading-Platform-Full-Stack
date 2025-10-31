
import React from "react";

function Stats() {
  return (
    <div className="container py-5">
      <div className="row align-items-center py-5">
        {/* Left Section */}
        <div className="col-12 col-md-6 p-4">
          <h1 className="fs-2 mb-4">Trust with confidence</h1>

          <h2 className="fs-4 mt-3">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.
          </p>

          <h2 className="fs-4 mt-3">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, or annoying push notifications — high-quality apps you use at your own pace.
          </p>

          <h2 className="fs-4 mt-3">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer services tailored to your needs.
          </p>

          <h2 className="fs-4 mt-3">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just facilitate transactions but actively help you do better with your money.
          </p>
        </div>

        {/* Right Section */}
        <div className="col-12 col-md-6 p-4 text-center">
          <img
            src="media/images/ecosystem.png"
            className="img-fluid mb-4"
            alt="Zerodha Ecosystem"
          />
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <a href="#" className="text-decoration-none text-primary fw-semibold">
              Explore our products <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#" className="text-decoration-none text-primary fw-semibold">
              Try Kite demo <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;

// import React from "react";

// function Stats() {
//   return (
//     <div>
//       <div className="container p-5">
//         <div className="row p-5">
//           <div className="col-6 p-5">
//             <h1 className="fs-2 mb-5">Trust with confidance</h1>
//             <h2 className="fs-4">Customer-first always</h2>
//             <p className="text-muted">
//               That's why 1.3+ crore customers trust Zerodha with Rs 3.5+lakh
//               crores worth of equity investment.
//             </p>
//             <h2 className="fs-4">No spam or gimmicks</h2>
//             <p className="text-muted">
//               No gimmicks, spam, "gimification" or annoying push notifiations,
//               high quality apps that you use at your pace, the way you like.
//             </p>
//             <h2 className="fs-4">The Zerodha universe</h2>
//             <p className="text-muted">
//               Not just an app, but a whole ecosystem, our investment in 30+
//               fintech startups offer tailored services specific to your need.
//             </p>
//             <h2 className="fs-4">Do better with money</h2>
//             <p className="text-muted">
//               With initiatives like Nudge and Kill Switch, we don't just
//               facilitate transactions but actively help you do better with your
//               money.
//             </p>
//           </div>
//           <div className="col-6 p-5 ">
//             <img
//               src="media/images/ecosystem.png"
//               style={{ width: "130%" }}
//               alt=""
//             />
//             <div className="text-center ">
//               <a href="" className="mx-5" style={{ textDecoration: "none" }}>
//                 Explore our products <i class="fa-solid fa-arrow-right"></i>
//               </a>
//               <a href="" style={{ textDecoration: "none" }}>
//                 Try kite demo <i class="fa-solid fa-arrow-right"></i>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Stats;
