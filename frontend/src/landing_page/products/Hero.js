// import React from "react";

// function Hero() {
//   return (
//     <div className="container border-bottom mb-5">
//       <div className="text-center mt-5 p-5">
//         <h1>Zerodha Products</h1>
//         <h4 className="text-muted mt3 fs-5">Sleek, modern, and intuitive trading platforms</h4>
//         <p className="mt-3">
//           Check out our{" "}
//           <a style={{ textDecoration: "none" }} href="">
//             investment offerings<i class="fa-solid fa-arrow-right"></i>
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Hero;


import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="text-center mt-5 py-5 px-3">
        <h1 className="fw-bold display-5 mb-3">Zerodha Products</h1>

        <h4 className="text-muted fs-5 mb-3">
          Sleek, modern, and intuitive trading platforms
        </h4>

        <p className="mt-2">
          Check out our{" "}
          <a
            href="#"
            className="text-decoration-none text-primary fw-semibold"
          >
            investment offerings <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
