import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container  mt-5">
      <div className="row">
        <div className="col-5 p-5 mt-5 ">
          <h3>{productName}</h3>
          <p>{productDescription}</p>
          <div>
            <a
              href={learnMore}
              style={{  textDecoration: "none" }}
            >
              Learn More<i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-6 p-3  ">
          <img  src={imageUrl}  />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
