import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("https://stock-trading-platform-full-stack-backend.onrender.com/getuser", {
          withCredentials: true,
        });

        setUser(response.data.user);
        console.log(response.data.user);
        let storege = localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );
        console.log(storege);
      } catch (error) {
        console.error("Not logged in", error);
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // redirect to login
    window.location.href = "https://stock-trading-platform-full-stack.onrender.com/login";
  };

  // Get initials from name/email
  const getInitials = () => {
    if (!user) return "U";

    if (user.username) {
      return user.username
        .split(" ")
        .map((n) => n[0].toUpperCase())
        .join("");
    }
    return user.email ? user.email[0].toUpperCase() : "U";
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="logo" />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />

        {/* Profile Section */}
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{getInitials()}</div>
          <p className="username">{user ? user.username : "USERID"}</p>
        </div>
        <div style={{ position: "relative" }}>
          {isProfileDropdownOpen && (
            <div
              className="profile-dropdown"
              style={{
                position: "absolute",
                top: "100%",
                right: 0,
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                borderRadius: "8px",
                padding: "16px",
                width: "240px",
                zIndex: 1000,
              }}
            >
              {/* Close icon (top-right corner) */}
              <i
                className="fas fa-times"
                onClick={() => setIsProfileDropdownOpen(false)}
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  cursor: "pointer",
                  color: "#888",
                }}
              ></i>

              <p
                style={{
                  marginBottom: "12px",
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                <i className="fas fa-user" style={{ marginRight: "8px" }}></i>

                {user?.username}
              </p>

              <p
                style={{
                  marginBottom: "12px",
                  fontWeight: "bold",
                  color: "#333",
                  
                }}
              >
                <i
                  className="fas fa-envelope"
                  style={{ marginRight: "8px" }}
                ></i>
                {user?.email}
              </p>

              <button
                onClick={handleLogout}
                style={{
                  backgroundColor: "#f44336",
                  color: "white",
                  border: "none",
                  padding: "10px 16px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  width: "50%",
                  fontWeight: "bold",
                }}
              >
                <i
                  className="fas fa-sign-out-alt"
                  style={{ marginRight: "6px" }}
                ></i>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
