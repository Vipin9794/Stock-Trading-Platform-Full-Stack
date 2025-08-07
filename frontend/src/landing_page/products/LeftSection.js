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
    <div className="container  mt-5">
      <div className="row">
        <div className="col-6 p-3">
          <img src={imageUrl} />
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-5  ">
          <h3>{productName}</h3>
          <p>{productDescription}</p>

          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>Try Demo<i class="fa-solid fa-arrow-right"></i></a>
            <a href={learnMore} style={{ marginLeft: "58px" ,textDecoration: "none"}}>
              
              Learn More<i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="mt-4 mb-5">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "58px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
