import React from "react";
import virtual_doc from "../../Images/virtual_care.JPG";
import { Carousel } from "./Carousel";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const UserAddedToast = () => {
  return (
    <>
      <p className="text-dark">
        You have registered successfully, please login to continue...
      </p>
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
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dateofbirth, setDob] = useState("");
  const [image, setImage] = useState("");

  // const {
  //   register, dateofbirth
  //   handleSubmit,
  //   // getValues,
  //   formState: { errors },
  // } = useForm({ shouldUseNativeValidation: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    // const userData = {
    //   name: name,
    //   email: email,
    //   password: password,
    //   phone: phone,
    //   dateofbirth: dateofbirth,
    // };
    const userData = new FormData();
    userData.append("name", name);
    userData.append("email", email);
    userData.append("password", password);
    userData.append("phone", phone);
    userData.append("dateofbirth", dateofbirth);
    userData.append("image", image);
    axios
      .post("http://localhost:5000/user-register", userData)
      .then((result) => {
        console.log(result);
        if (result) {
          toast.success(<UserAddedToast />, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
          });
          setName("");
          setEmail("");
          setDob("");
          setPhone("");
          setPassword("");
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
        className="container-fluid"
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
                <h1>
                  Join <span style={{ color: "#1a759f" }}>T</span>ele{" "}
                  <span style={{ color: "#1a759f" }}>M</span>edicine
                </h1>
                <p>
                  Get access to medical and mental health experts 24 hours a
                  day, 365 days a year.
                </p>
                <div className="mb-3">
                  <label
                    htmlFor="name"
                    className="form-label fw-bold"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="Enter Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label fw-bold"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="image"
                    className="form-label fw-bold"
                  >
                    Upload Profile Pic
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="image"
                    aria-describedby="emailHelp"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="dateofbirth" className="form-label fw-bold">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="dob"
                    value={dateofbirth}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-bold">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label fw-bold">
                    Phone
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="contact"
                    placeholder="Enter Contact Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    I agree to TeleMedicine's Membership Terms
                  </label>
                </div>
                <div className="create-signin-btns d-flex flex-row justify-content-between">
                  <button
                    type="submit"
                    className="btn btn-primary text-uppercase"
                  >
                    Create Account
                  </button>
                  <div className="signin">
                    <span style={{ cursor: "pointer" }}>
                      Already a member?{" "}
                      <Link to="/login" className="text-decoration-none">
                        <small className="text-primary fw-bold fs-6">
                          Sign In
                        </small>
                      </Link>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#0077b6" }}>
        <div className="row p-5 text-white">
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default Register;
