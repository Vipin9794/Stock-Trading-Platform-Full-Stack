// import React from "react";

// function RightSection({
//   imageUrl,
//   productName,
//   productDescription,
//   learnMore,
// }) {
//   return (
//     <div className="container  mt-5">
//       <div className="row">
//         <div className="col-5 p-5 mt-5 ">
//           <h3>{productName}</h3>
//           <p>{productDescription}</p>
//           <div>
//             <a
//               href={learnMore}
//               style={{  textDecoration: "none" }}
//             >
//               Learn More<i class="fa-solid fa-arrow-right"></i>
//             </a>
//           </div>
//         </div>
//         <div className="col-1"></div>
//         <div className="col-6 p-3  ">
//           <img  src={imageUrl}  />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RightSection;


import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center flex-column-reverse flex-md-row">
        {/* Text Section */}
        <div className="col-12 col-md-6 text-center text-md-start px-4 mt-4 mt-md-0">
          <h3 className="fw-bold">{productName}</h3>
          <p className="text-muted">{productDescription}</p>

          <div className="mt-3">
            {learnMore && (
              <a
                href={learnMore}
                className="text-decoration-none text-primary fw-semibold"
              >
                Learn More <i className="fa-solid fa-arrow-right ms-1"></i>
              </a>
            )}
          </div>
        </div>

        {/* Image Section */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src={imageUrl}
            alt={productName}
            className="img-fluid"
            style={{ maxHeight: "350px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
