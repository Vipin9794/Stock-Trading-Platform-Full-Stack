import React from "react";

function Hero() {
  return (
    <div className="row p-4">
      <div className="col-8">
        <div className="accordion p-3" id="supportAccordion">
          <div className="accordion-item  ">
            <h2 className="accordion-header ">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                <i
                  class="fa-solid fa-circle-plus  "
                  style={{ marginRight: "20px", color: "#2080c9ff" }}
                ></i>
                Account Opening
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#supportAccordion"
            >
              <div className="accordion-body">
                <ul>
                  <li className="p-2" style={{ color: "#107ed2ff" }}>
                    <a
                      href=""
                      style={{ marginLeft: "20px", textDecoration: "none" }}
                    >
                      Resident individual
                    </a>
                  </li>
                  <li className="p-2" style={{ color: "#107ed2ff" }}>
                    <a
                      href=""
                      style={{ marginLeft: "20px", textDecoration: "none" }}
                    >
                      Minor
                    </a>
                  </li>
                  <li className="p-2" style={{ color: "#107ed2ff" }}>
                    <a
                      href=""
                      style={{ marginLeft: "20px", textDecoration: "none" }}
                    >
                      Non Resident Indian (NRI)
                    </a>
                  </li>
                  <li className="p-2" style={{ color: "#107ed2ff" }}>
                    <a
                      href=""
                      style={{ marginLeft: "20px", textDecoration: "none" }}
                    >
                      Company, Partnership, HUF and LLP
                    </a>
                  </li>
                  <li className="p-2" style={{ color: "#107ed2ff" }}>
                    <a
                      href=""
                      style={{ marginLeft: "20px", textDecoration: "none" }}
                    >
                      Glossary
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion p-3" id="supportAccordion">
          <div className="accordion-item ">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
              >
                <i
                  className="fa-solid fa-circle-user"
                  style={{ color: "#2080c9ff", marginRight: "20px" }}
                ></i>
                Your Zerodha Account
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#supportAccordion"
            >
              <div className="accordion-body">
                <ul>
                  <li className="p-2" style={{ color: "#107ed2ff" }}>
                    <a
                      href=""
                      style={{ marginLeft: "20px", textDecoration: "none" }}
                    >
                      Your Profile
                    </a>
                  </li>
                  <li className="p-2" style={{ color: "#107ed2ff" }}>
                    <a
                      href=""
                      style={{ marginLeft: "20px", textDecoration: "none" }}
                    >
                      Account modification
                    </a>
                  </li>
                  <li className="p-2" style={{ color: "#107ed2ff" }}>
                    <a
                      href=""
                      style={{ marginLeft: "20px", textDecoration: "none" }}
                    >
                      Client Master Report (CMR) and Depository Participant (DP)
                    </a>
                  </li>
                  <li className="p-2" style={{ color: "#107ed2ff" }}>
                    <a
                      href=""
                      style={{ marginLeft: "20px", textDecoration: "none" }}
                    >
                      Nomination
                    </a>
                  </li>
                  <li className="p-2" style={{ color: "#107ed2ff" }}>
                    <a
                      href=""
                      style={{ marginLeft: "20px", textDecoration: "none" }}
                    >
                      Transfer and conversion of securities
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion p-3" id="supportAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
              >
                <i
                  class="fa-solid fa-face-smile"
                  style={{ color: "#2080c9ff", marginRight: "20px" }}
                ></i>
                Kite
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#supportAccordion"
            >
              <div className="accordion-body">
                <ul>
                  <li className="p-2" style={{ color: "#107ed2ff" }}>
                    <a
                      href=""
                      style={{ marginLeft: "20px", textDecoration: "none" }}
                    >
                      RIPO
                    </a>
                  </li>
                  <li className="p-2" style={{ color: "#107ed2ff" }}>
                    <a
                      href=""
                      style={{ marginLeft: "20px", textDecoration: "none" }}
                    >
                      Trading FAQs
                    </a>
                  </li>
                  <li className="p-2" style={{ color: "#107ed2ff" }}>
                    <a
                      href=""
                      style={{ marginLeft: "20px", textDecoration: "none" }}
                    >
                      Margin Trading Facility (MTF) and Margins
                    </a>
                  </li>
                  <li className="p-2" style={{ color: "#107ed2ff" }}>
                    <a
                      href=""
                      style={{ marginLeft: "20px", textDecoration: "none" }}
                    >
                      Charts and orders
                    </a>
                  </li>
                  <li className="p-2" style={{ color: "#107ed2ff" }}>
                    <a
                      href=""
                      style={{ marginLeft: "20px", textDecoration: "none" }}
                    >
                      Alerts and Nudges
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion p-3" id="supportAcco">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
              >
                <i
                  class="fa-solid fa-indian-rupee-sign"
                  style={{ color: "#2080c9ff", marginRight: "20px" }}
                ></i>
                Funds
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#supportAcco"
            >
              <div className="accordion-body">
                <ul>
                  <li className="p-2" style={{ color: "#107ed2ff" }}>
                    <a
                      href=""
                      style={{ marginLeft: "20px", textDecoration: "none" }}
                    >
                      Add money
                    </a>
                  </li>
                  <li className="p-2" style={{ color: "#107ed2ff" }}>
                    <a
                      href=""
                      style={{ marginLeft: "20px", textDecoration: "none" }}
                    >
                      Withdraw money
                    </a>
                  </li>
                  <li className="p-2" style={{ color: "#107ed2ff" }}>
                    <a
                      href=""
                      style={{ marginLeft: "20px", textDecoration: "none" }}
                    >
                      Add bank accounts
                    </a>
                  </li>
                  <li className="p-2" style={{ color: "#107ed2ff" }}>
                    <a
                      href=""
                      style={{ marginLeft: "20px", textDecoration: "none" }}
                    >
                      eMandates
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion p-3" id="support">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
              >
                <i
                  class="fa-regular fa-circle-dot"
                  style={{ color: "#2080c9ff", marginRight: "20px" }}
                ></i>
                Console
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              data-bs-parent="#support"
            >
              <div className="accordion-body">
                <ul>
                  <li className="p-2" style={{ color: "#107ed2ff" }}>
                    <a
                      href=""
                      style={{ marginLeft: "20px", textDecoration: "none" }}
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="p-2" style={{ color: "#107ed2ff" }}>
                    <a
                      href=""
                      style={{ marginLeft: "20px", textDecoration: "none" }}
                    >
                      Corporate actions
                    </a>
                  </li>
                  <li className="p-2" style={{ color: "#107ed2ff" }}>
                    <a
                      href=""
                      style={{ marginLeft: "20px", textDecoration: "none" }}
                    >
                      Funds statement
                    </a>
                  </li>
                  <li className="p-2" style={{ color: "#107ed2ff" }}>
                    <a
                      href=""
                      style={{ marginLeft: "20px", textDecoration: "none" }}
                    >
                      Reports
                    </a>
                  </li>
                  <li className="p-2" style={{ color: "#107ed2ff" }}>
                    <a
                      href=""
                      style={{ marginLeft: "20px", textDecoration: "none" }}
                    >
                      Profile
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion p-3" id="supportAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
              >
                <i
                  class="fa-solid fa-coins"
                  style={{ color: "#2080c9ff", marginRight: "20px" }}
                ></i>
                Coin
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              data-bs-parent="#supportAccordion"
            >
              <div className="accordion-body">
                <ul>
                  <li className="p-2" style={{ color: "#107ed2ff" }}>
                    <a
                      href=""
                      style={{ marginLeft: "20px", textDecoration: "none" }}
                    >
                      Mutual funds
                    </a>
                  </li>
                  <li className="p-2" style={{ color: "#107ed2ff" }}>
                    <a
                      href=""
                      style={{ marginLeft: "20px", textDecoration: "none" }}
                    >
                      National Pension Scheme (NPS)
                    </a>
                  </li>
                  <li className="p-2" style={{ color: "#107ed2ff" }}>
                    <a
                      href=""
                      style={{ marginLeft: "20px", textDecoration: "none" }}
                    >
                      Fixed Deposit (FD)
                    </a>
                  </li>
                  <li className="p-2" style={{ color: "#107ed2ff" }}>
                    <a
                      href=""
                      style={{ marginLeft: "20px", textDecoration: "none" }}
                    >
                      Features on Coin
                    </a>
                  </li>
                  <li className="p-2" style={{ color: "#107ed2ff" }}>
                    <a
                      href=""
                      style={{ marginLeft: "20px", textDecoration: "none" }}
                    >
                      Payments and Orders
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4 p-3">
        <div
          className="  p-3 mb-4"
          style={{ borderLeft: "4px solid orange", background: "#fff5e6" }}
        >
          <ul className="mb-0">
            <li>
              <a href="#" className="text-primary">
                Exclusion of F&O contracts on 8 securities from August 29, 2025
              </a>
            </li>
            <li>
              <a href="#" className="text-primary">
                Revision in expiry day of Index and Stock derivatives contracts
              </a>
            </li>
          </ul>
        </div>
        {/* Quick Links Section */}
        <div className="p-3 mt-5 border rounded shadow-sm">
          <h6 className="fw-bold mb-2 border-bottom">Quick links</h6>
          <ul className="list-unstyled mb-0">
            <li className="mb-2">
              <a href="#" className="text-primary text-decoration-none">
                1. Track account opening
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-primary text-decoration-none">
                2. Track segment activation
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-primary text-decoration-none">
                3. Intraday margins
              </a>
            </li>
            <li>
              <a href="#" className="text-primary text-decoration-none">
                4. Kite user manual
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero;
