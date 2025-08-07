import React from "react";

function Stats() {
  return (
    <div>
      <div className="container p-5">
        <div className="row p-5">
          <div className="col-6 p-5">
            <h1 className="fs-2 mb-5">Trust with confidance</h1>
            <h2 className="fs-4">Customer-first always</h2>
            <p className="text-muted">
              That's why 1.3+ crore customers trust Zerodha with Rs 3.5+lakh
              crores worth of equity investment.
            </p>
            <h2 className="fs-4">No spam or gimmicks</h2>
            <p className="text-muted">
              No gimmicks, spam, "gimification" or annoying push notifiations,
              high quality apps that you use at your pace, the way you like.
            </p>
            <h2 className="fs-4">The Zerodha universe</h2>
            <p className="text-muted">
              Not just an app, but a whole ecosystem, our investment in 30+
              fintech startups offer tailored services specific to your need.
            </p>
            <h2 className="fs-4">Do better with money</h2>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions but actively help you do better with your
              money.
            </p>
          </div>
          <div className="col-6 p-5 ">
            <img
              src="media/images/ecosystem.png"
              style={{ width: "130%" }}
              alt=""
            />
            <div className="text-center ">
              <a href="" className="mx-5" style={{ textDecoration: "none" }}>
                Explore our products <i class="fa-solid fa-arrow-right"></i>
              </a>
              <a href="" style={{ textDecoration: "none" }}>
                Try kite demo <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
