import React from "react";

function CreateTicket() {
  return (
    <div
      className=" mt-3 p-5 "
      style={{ backgroundColor: "#f1f1f2ff", width: "1300px" }}
    >
      <div className="d-flex justify-content-between align-items-center mb-3 mt-4">
        <h1 className="fw-bold mb-4 mt-5">Support Portal</h1>
        <button
          className="btn btn-primary   px-4"
          style={{ fontSize: "18px", padding: "7px 25px" }}
        >
          My Ticket
        </button>
      </div>
      {/* Search Box */}
      <div className="position-relative mb-4 shadow-sm">
        <i
          className="fa-solid fa-magnifying-glass position-absolute top-50 translate-middle-y ms-3"
          style={{ color: "#6c757d" }}
        ></i>
        <input
          type="text"
          style={{ height: "50px", fontSize: "16px" }}
          className="form-control ps-5"
          placeholder="Eg: How do I open my account, How do I activate F&O..."
        />
      </div>
    </div>
  );
}

export default CreateTicket;
