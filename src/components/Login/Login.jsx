import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { parseJwt } from "../utils/parseJwt";
import { toast } from "react-toastify";
import virtual_doc from "../../Images/virtual_care.JPG";

const UserAddedToast = () => {
  return (
    <>
      <p className="text-dark">You have logged in successfully</p>
    </>
  );
};
const WarnToast = () => {
  return (
    <>
      <p className="text-warning">Something went wrong!!!</p>
    </>
  );
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:5000/user-login", userData)
      .then((result) => {
        console.log("success");
        console.log(result.data);
        if (result) {
          toast.success(<UserAddedToast />, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: false,
          });
          setEmail("");
          setPassword("");
          localStorage.setItem("token", result.data.token);
          const token = localStorage.getItem("token");
          const tokenUser = parseJwt(token);
          if (tokenUser?.user?.role === "doctor") {
            window.location = "/doctor-dashboard";
          } else if (tokenUser?.user?.role === "user") {
            window.location = "/user-dashboard";
          } else {
            console.log("error occur");
          }
        }
      })
      .catch((e) => {
        toast.warn(<WarnToast />, {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: true,
        });
      });
  };
  return (
    <>
      <div
        className="container-fluid py-3"
        style={{ backgroundColor: "#edede9", marginTop: "5rem" }}
      >
        <div className="row p-5">
          <div className="col-md-5">
            <img src={virtual_doc} alt="" className="img-fluid" />
          </div>

          <div className="col-md-6">
            <div className="card p-3">
              <form
                method="POST"
                action=""
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                <h1 className="text-center">
                  <span style={{ color: "#1a759f" }}>W</span>el
                  <span style={{ color: "#1a759f" }}>C</span>ome{" "}
                </h1>
                <p className="text-center fs-4">Sign in to your account</p>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter Login Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-bold">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="***********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="create-signin-btns d-flex flex-row justify-content-end gap-4">
                  <div className="signin">
                    <Link to="/login" className="text-decoration-none fs-5">
                      <span style={{ cursor: "pointer", color: "#0077b6" }}>
                        Forgot password?{" "}
                      </span>
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary text-uppercase"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
            <div className="create-account float-end py-3">
              <p>
                Don't have an account yet?{" "}
                <span>
                  <Link to={`/register`} className="text-decoration-none">
                    Create an Account
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
