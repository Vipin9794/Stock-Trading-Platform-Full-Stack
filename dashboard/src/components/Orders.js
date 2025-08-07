import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    axios
      .get(`http://localhost:3002/allOrders?userId=${user._id}`)
      .then((res) => {
        setAllOrders(res.data);
      });
  }, []);

  //  const labels = allOrders.map((subArray) => subArray["name"]);

  //   const data = {
  //     labels,
  //     datasets: [
  //       {
  //         label: "Stock Price",
  //         data: allOrders.map((stock) => stock.price),
  //         backgroundColor: "rgba(255, 99, 132, 0.5)",
  //       },
  //     ],
  //   };

  return (
    <div className="orders" style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h3
        className="title"
        style={{ marginBottom: "20px", textAlign: "center" }}
      >
        All Orders ({allOrders.length})
      </h3>

      <div
        className="order-table"
        style={{
          border: "1px solid #ddd",
          borderRadius: "6px",
          overflow: "hidden",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f8f9fa" }}>
              <th
                style={{
                  padding: "12px",
                  borderBottom: "1px solid #ddd",
                  textAlign: "center",
                }}
              >
                Instrument
              </th>
              <th
                style={{
                  padding: "12px",
                  borderBottom: "1px solid #ddd",
                  textAlign: "center",
                }}
              >
                Qty.
              </th>
              <th
                style={{
                  padding: "12px",
                  borderBottom: "1px solid #ddd",
                  textAlign: "center",
                }}
              >
                LTP
              </th>
              <th
                style={{
                  padding: "12px",
                  borderBottom: "1px solid #ddd",
                  textAlign: "center",
                }}
              >
                Mode
              </th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((stock, index) => (
              <tr key={index}>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  {stock.name}
                </td>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  {stock.qty}
                </td>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  {stock.price.toFixed(2)}
                </td>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  <span
                    className={`badge ${
                      stock.mode
                        ? stock.mode === "buy"
                          ? "bg-success"
                          : "bg-danger"
                        : stock.qty > 0
                        ? "bg-success"
                        : "bg-danger"
                    }`}
                    style={{
                      padding: "5px 10px",
                      borderRadius: "12px",
                      fontSize: "0.85rem",
                    }}
                  >
                    {stock.mode
                      ? stock.mode.toUpperCase()
                      : stock.qty > 0
                      ? "BUY"
                      : "SELL"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Button placed close to the table */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link
          to={"/"}
          className="btn btn-primary"
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            borderRadius: "6px",
            textDecoration: "none",
          }}
        >
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
