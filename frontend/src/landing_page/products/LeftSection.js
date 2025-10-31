// import React from "react";

// function LeftSection({
//   imageUrl,
//   productName,
//   productDescription,
//   tryDemo,
//   learnMore,
//   googlePlay,
//   appStore,
// }) {
//   return (
//     <div className="container  mt-5">
//       <div className="row">
//         <div className="col-6 p-3">
//           <img src={imageUrl} />
//         </div>
//         <div className="col-1"></div>
//         <div className="col-5 p-5  ">
//           <h3>{productName}</h3>
//           <p>{productDescription}</p>

//           <div>
//             <a href={tryDemo} style={{ textDecoration: "none" }}>Try Demo<i class="fa-solid fa-arrow-right"></i></a>
//             <a href={learnMore} style={{ marginLeft: "58px" ,textDecoration: "none"}}>
              
//               Learn More<i class="fa-solid fa-arrow-right"></i>
//             </a>
//           </div>
//           <div className="mt-4 mb-5">
//             <a href={googlePlay}>
//               <img src="media/images/googlePlayBadge.svg" />
//             </a>
//             <a href={appStore}>
//               <img
//                 src="media/images/appstoreBadge.svg"
//                 style={{ marginLeft: "58px" }}
//               />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LeftSection;


import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src={imageUrl}
            alt={productName}
            className="img-fluid"
            style={{ maxHeight: "350px" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-12 col-md-6 text-center text-md-start px-4">
          <h3 className="fw-bold">{productName}</h3>
          <p className="text-muted">{productDescription}</p>

          {/* Links */}
          <div className="d-flex justify-content-center justify-content-md-start flex-wrap gap-4 mt-3">
            {tryDemo && (
              <a href={tryDemo} className="text-decoration-none text-primary fw-semibold">
                Try Demo <i className="fa-solid fa-arrow-right ms-1"></i>
              </a>
            )}
            {learnMore && (
              <a href={learnMore} className="text-decoration-none text-primary fw-semibold">
                Learn More <i className="fa-solid fa-arrow-right ms-1"></i>
              </a>
            )}
          </div>

          {/* App Store Links */}
          <div className="d-flex justify-content-center justify-content-md-start flex-wrap mt-4 gap-4">
            {googlePlay && (
              <a href={googlePlay}>
                <img
                  src="media/images/googlePlayBadge.svg"
                  alt="Google Play"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </a>
            )}
            {appStore && (
              <a href={appStore}>
                <img
                  src="media/images/appstoreBadge.svg"
                  alt="App Store"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
