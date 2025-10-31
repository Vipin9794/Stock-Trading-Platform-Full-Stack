// import React from 'react'

// function Hero() {
//   return (
//     <div className='container p-5 mb-5'>
//       <div className='row text-center'>
//         <img src="media/images/homeHero.png" alt="Hero Image" className='mb-5' />
//         <h1 className='mt-5'>Invest in everything</h1>
//         <p>
//           Online plateform to invest in stocks, derivatives , mutual funds, and more
//         </p>
//         <button className='p-2 btn btn-primary fs-5 mb-5' style={{width : "20%" , margin : "0 auto"}}>Signup Now</button>

//       </div>
      
//     </div>
//   )
// }

// export default Hero


import React from "react";

function Hero() {
  return (
    <div className="container text-center py-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-12">
          <img
            src="media/images/homeHero.png"
            alt="Hero"
            className="img-fluid mb-4"
            style={{ maxWidth: "500px" }}
          />
          <h1 className="fw-bold fs-1 fs-md-2 mt-3">Invest in everything</h1>
          <p className="text-muted mb-4">
            Online platform to invest in stocks, derivatives, mutual funds, and more.
          </p>
          <button
            className="btn btn-primary fs-5 px-4 py-2"
            style={{ width: "60%", maxWidth: "250px" }}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
