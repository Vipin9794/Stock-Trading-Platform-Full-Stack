import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-4   border-top">
        <h1 className=" text-center">People</h1>
      </div>
      <div
        className="row  mt-5  text-muted "
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >
        <div className="col-6 ">
          <img
            src="media/images/VipinProfile.jpg"
            style={{ borderRadius: "100%", width: "50%", marginLeft: "95px" }}
            alt=""
          />
          <p style={{ marginLeft: "180px" }}>
            <b>Vipin Kumar</b>
          </p>
          <p style={{ marginLeft: "138px" }}> Full Stack web developer</p>
        </div>
        <div className="col-6 ">
          <p>
            I’m a passionate full stack web developer currently pursuing a
            B.Tech in Computer Science And Engineering. I built this{" "}
            <b>FinSync – Zerodha-Inspired Stock Platform </b> project to sharpen
            my skills in frontend and backend development, especially using the
            MERN stack.
          </p>
          <p>
            This project helped me understand how real-world trading platforms
            are structured and how to implement scalable features.
          </p>
          <p>Playing basketball is his zen.</p>
          <br />
          <p>
            Connect on
            <a style={{ textDecoration: "none" }} href="">
              Homepage
            </a>
            /
            <a style={{ textDecoration: "none" }} href="">
              TradingQnA
            </a>
            /
            <a style={{ textDecoration: "none" }} href="">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
