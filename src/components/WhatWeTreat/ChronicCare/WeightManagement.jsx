import React from "react";
import urgent_care from "../../../Images/urgent_care.JPG";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import DonotTreat from "../UrgentCare/DonotTreat";
const WeightManagement = () => {
  return (
    <>
      <div className="container-fluid" style={{ marginTop: "5rem" }}>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <img
              src={urgent_care}
              alt=""
              className="img-fluid"
              style={{ width: "80rem", height: "55vh" }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <h1
              className="text-center px-5 py-4"
              style={{ fontSize: "5rem", color: "#00509d" }}
            >
              Chronic Care
            </h1>
          </div>
          <div className="col-md-6 p-5">
            <p>
              Our approach to care gives you the flexibility to focus on your
              health when it works for you. When you need to manage an ongoing
              or chronic health conditions, we make it easy and are there in the
              touch of a button.
            </p>
            <p>
              For select health plans and employers, we can offer treatment
              programs and plans to help manage specific issues and conditions.
            </p>
            <Link
              to="/urgent-care"
              className="text-decoration-none fw-bold"
              style={{ color: "#00509d" }}
            >
              Start a Visit{" "}
              <i className="fa-solid fa-angle-right text-warning ms-2 fw-bold"></i>
            </Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row">
              <div
                className="card  my-5"
                style={{ borderTop: "none", borderBottom: "none" }}
              >
                <div className="row">
                  <div className="col-md-4">
                    <ul className="list-unstyled p-5 fw-bold fs-4 text-danger">
                      <li className="my-3">
                        <Link
                          to="/chronic-care"
                          className="text-decoration-none"
                          style={{ color: "#00509d" }}
                        >
                          Asthma
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/high-cholesterol"
                          className="text-decoration-none"
                          style={{ color: "#00509d" }}
                        >
                          High Cholesterol
                        </Link>
                      </li>
                      <li className="my-3">
                        <Link
                          to="/high-blood-pressure"
                          className="text-decoration-none"
                          style={{ color: "#00509d" }}
                        >
                          High Blood Pressure
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/weight-management"
                          className="text-decoration-none"
                          style={{ color: "#00509d" }}
                        >
                          Weight Management
                        </Link>
                      </li>
                      <li className="my-3">
                        <Link
                          to="/diabetes"
                          className="text-decoration-none"
                          style={{ color: "#00509d" }}
                        >
                          Diabetes
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/thyroid-issues"
                          className="text-decoration-none"
                          style={{ color: "#00509d" }}
                        >
                          Thyroid Issues
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-8 p-4">
                    <h1 className="text-start" style={{ color: "#00509d" }}>
                      Weight Management
                    </h1>
                    <p>
                      Here are some of the things we can help with and treat:
                    </p>
                    <div className="row">
                      <div className="col-md-6 p-5">
                        <ul className="list-unstyled">
                          <div className="d-flex flex-row gap-3 align-items-center my-2 fs-5">
                            <i className="fa-solid fa-plus text-warning"></i>
                            <li>Diet and nutrition</li>
                          </div>
                          <div className="d-flex flex-row gap-3 align-items-center fs-5">
                            <i className="fa-solid fa-plus text-warning"></i>
                            <li>Exercise counseling</li>
                          </div>
                          <div className="d-flex flex-row gap-3 align-items-center my-2 fs-5">
                            <i className="fa-solid fa-plus text-warning"></i>
                            <li>And more</li>
                          </div>
                        </ul>
                      </div>
                      <div className="col-md-6 p-5">
                        <ul className="list-unstyled">
                          <div className="d-flex flex-row gap-3 align-items-center my-2 fs-5">
                            <i className="fa-solid fa-plus text-warning"></i>
                            <li>Weight loss</li>
                          </div>
                          <div className="d-flex flex-row gap-3 align-items-center fs-5">
                            <i className="fa-solid fa-plus text-warning"></i>
                            <li>Stress</li>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <DonotTreat />
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-4 d-flex flex-row gap-3 my-5 align-items-center"
            style={{ marginLeft: "7rem" }}
          >
            <button className="btn btn-primary">Start a Visit Now</button>
            <Link
              to="/urgent-care"
              className="text-decoration-none"
              style={{ color: "#00509d" }}
            >
              Schedule Appointment{" "}
              <span className="align-items-center">
                <i className="fa-solid fa-angle-right text-warning ms-2 fs-6"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WeightManagement;
