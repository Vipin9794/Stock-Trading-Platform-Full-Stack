// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast, Bounce } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Login() {
//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setLoginData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("https://stock-trading-platform-full-stack-backend.onrender.com", loginData, {
//         withCredentials: true,
//       });

//       const { message, success, user } = res.data;

//       if (success) {
//         console.log(user);
//         localStorage.setItem("user", JSON.stringify(user));
//         toast.success(message);

//         setTimeout(() => {
//           window.location.href = "http://localhost:3000/";
//         }, 1000);
//       } else {
//         toast.error(message || "Login failed.");
//       }
//     } catch (err) {
//       console.error("Login Error:", err);
//       toast.error("Login failed. Please try again!");
//     }
//   };

//   return (
//     <div
//       className="container d-flex align-items-center justify-content-center min-vh-100"
//       style={{ paddingBottom: "10rem" }}
//     >
//       <div
//         className="card p-4 shadow rounded-4"
//         style={{ maxWidth: "400px", width: "100%" }}
//       >
//         <h3 className="text-center mb-3 fw-bold">Login</h3>

//         <form onSubmit={onSubmit}>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//               Email address
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               placeholder="name@example.com"
//               name="email"
//               value={loginData.email}
//               onChange={handleInputChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               placeholder="Enter password"
//               name="password"
//               value={loginData.password}
//               onChange={handleInputChange}
//               required
//             />
//           </div>

//           <div className="d-flex justify-content-between align-items-center mb-3">
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="checkbox"
//                 id="rememberMe"
//               />
//               <label className="form-check-label" htmlFor="rememberMe">
//                 Remember me
//               </label>
//             </div>
//             <Link to="#" className="small">
//               Forgot password?
//             </Link>
//           </div>

//           <button type="submit" className="btn btn-primary w-100 mt-2">
//             Login
//           </button>
//         </form>

//         <div className="text-center mt-3">
//           <small>
//             Don't have an account? <Link to="/signup">Sign Up</Link>
//           </small>
//         </div>
//       </div>

//       <ToastContainer
//         position="top-center"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick={false}
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//         transition={Bounce}
//       />
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // 🔄 loading state

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const res = await axios.post("https://stock-trading-platform-full-stack-backend.onrender.com", loginData, {
        withCredentials: true,
      });

      const { message, success, user } = res.data;

      if (success) {
        localStorage.setItem("user", JSON.stringify(user));
        toast.success(message);

        setTimeout(() => {
          window.location.href = "http://localhost:3000/";
        }, 1000);
      } else {
        toast.error(message || "Login failed.");
      }
    } catch (err) {
      console.error("Login Error:", err);
      toast.error("Login failed. Please try again!");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div
      className="container d-flex align-items-center justify-content-center min-vh-100"
      style={{ paddingBottom: "10rem" }}
    >
      <div
        className="card p-4 shadow rounded-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h3 className="text-center mb-3 fw-bold">Login</h3>

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              name="email"
              value={loginData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              name="password"
              value={loginData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <Link to="#" className="small">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 mt-2"
            disabled={loading} // Disable while loading
            style={{
              opacity: loading ? 0.7 : 1, // ✅ apply opacity
              pointerEvents: loading ? "none" : "auto", // extra safety
            }}
          >
            {/* {loading ? "Logging in..." : "Login"} Show loading text */}
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          <small>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </small>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}

export default Login;
