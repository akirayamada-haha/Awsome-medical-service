import bgImg from "../../Images/telemedicine_home_img.JPG";
import React, { useEffect, useState } from "react";
import { parseJwt } from "../utils/parseJwt";
import Navbar from "../Header/Navbar";
import axios from "axios";
import img from "../../Images/doctor.jpg";
import { Link } from "react-router-dom";
const UserDashboard = () => {
  // get user form the token
  const token_data = localStorage.getItem("token");
  const token = parseJwt(token_data);
  // console.log(token.userId);
  const [data, setData] = useState([]);
  const [doctorData, setDoctorData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/user-data/" + token.userId)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:5000/all-doctors")
      .then((response) => {
        console.log(response.data);
        setDoctorData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div
        className="container-fluid homeImg py-3"
        style={{
          paddingTop: 70,
          backgroundColor: "#ebebeb",
          background: `url(${bgImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "30vh",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <Navbar />
      </div>
      <div className="bg-light container-fluid p-0">
        <div className="container col-md-8 py-4 mb-4">
          <p className="text text-center text-secondary fs-3 fw-bold">
            Customer Dashboard
          </p>
          <div className="d-flex justify-content-between align-items-center border p-3 rounded bg-white mb-3">
            <div className="desc">
              <p className="text text-primary fs-5">{data?.name}</p>
              <small className="d-block text-secondary mb-3">
                {data?.email}
              </small>
            </div>
            <div className="">
              <div>
                {data?.image ? (
                  <>
                    <img
                      src={`http://localhost:5000/${data?.image}`}
                      alt=""
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        backgroundSize: "cover",
                      }}
                    />
                  </>
                ) : (
                  <>
                    <img
                      src="https://cdn.pixabay.com/photo/2018/01/29/17/01/woman-3116587__340.jpg"
                      alt=""
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        backgroundSize: "cover",
                      }}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row justify-content-center">
          <h1 className="text-center text-primary fw-bold fs-1 my-2">
            See a Doctor Today
          </h1>
          <div className="col-md-12">
            <div className="row justify-content-center">
              {doctorData?.map((d, _id) => {
                return (
                  <>
                    <div className="col-md-3 m-3" key={d._id}>
                      <div
                        className="card bg-light"
                        style={{
                          borderTopLeftRadius: "5rem",
                          borderTopRightRadius: "1.5rem",
                          border: "none",
                        }}
                      >
                        <h6
                          className="text-center fw-bold pt-4"
                          style={{ fontSize: "1.5rem", paddingLeft: "70px" }}
                        >
                          {d.name}
                        </h6>
                        {d?.image ? (
                          <>
                            <img
                              src={`http://localhost:5000/${d.image}`}
                              alt="avatar"
                              className="img-fluid rounded-circle me-5"
                              style={{
                                width: "150px",
                                height: "150px",
                                position: "relative",
                                right: "40px",
                                bottom: "40px",
                              }}
                            />
                          </>
                        ) : (
                          <img
                            src={img}
                            className="img-fluid rounded-circle me-5"
                            style={{
                              width: "150px",
                              height: "150px",
                              position: "relative",
                              right: "40px",
                              bottom: "40px",
                            }}
                          />
                        )}

                        <p className="p-3">
                          Specialized in chronic diseases and urgent care
                        </p>

                        <Link
                          to={`/single-doctor/${d._id}`}
                          className="btn btn-primary p-2 text-white text-decoration-none fw-bold fst-normal m-2 text-uppercase"
                        >
                          <small>Read More</small>
                        </Link>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
