import React from "react";
import { Link } from "react-router-dom";
import DonotTreat from "./DonotTreat";
import urgent_care from "../../../Images/urgent_care.JPG";
import Footer from "../../Footer/Footer";
const SkinCondition = () => {
  return (
    <>
      <div className="container-fluid">
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
              Urgent Care
            </h1>
          </div>
          <div className="col-md-6 p-5">
            <p>
              When you're sick and need care, our team is standing by around the
              clock. Available 24/7, our providers can help get you on track as
              well as order prescriptions, if needed. We'll take the hassle and
              guesswork out of feeling better.
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
                className="card my-5"
                style={{ borderTop: "none", borderBottom: "none" }}
              >
                <div className="row">
                  <div className="col-md-4">
                    <ul className="list-unstyled p-5 fw-bold fs-4">
                      <li className="my-3">
                        <Link
                          to="/urgent-care"
                          className="text-decoration-none"
                          style={{ color: "#00509d" }}
                        >
                          Cold &amp; Flu
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/skin-condition"
                          className="text-decoration-none"
                          style={{ color: "#00509d" }}
                        >
                          Skin Conditions
                        </Link>
                      </li>
                      <li className="my-3">
                        <Link
                          to="/women-health"
                          className="text-decoration-none"
                          style={{ color: "#00509d" }}
                        >
                          Women's Health
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/men-health"
                          className="text-decoration-none"
                          style={{ color: "#00509d" }}
                        >
                          Men's Health
                        </Link>
                      </li>
                      <li className="my-3">
                        <Link
                          to="/allergies"
                          className="text-decoration-none"
                          style={{ color: "#00509d" }}
                        >
                          Allergies
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/headaches"
                          className="text-decoration-none"
                          style={{ color: "#00509d" }}
                        >
                          Headaches
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-8 p-4">
                    <h1 className="text-start" style={{ color: "#00509d" }}>
                      Skin Conditions
                    </h1>
                    <p>
                      Here are some of the things we can help with and treat:
                    </p>
                    <div className="row">
                      <div className="col-md-6 p-5">
                        <ul className="list-unstyled">
                          <div className="d-flex flex-row gap-3 align-items-center my-2 fs-5">
                            <i className="fa-solid fa-plus text-warning"></i>
                            <li>Acne</li>
                          </div>
                          <div className="d-flex flex-row gap-3 align-items-center fs-5">
                            <i className="fa-solid fa-plus text-warning"></i>
                            <li>Cellulitis</li>
                          </div>
                          <div className="d-flex flex-row gap-3 align-items-center my-2 fs-5">
                            <i className="fa-solid fa-plus text-warning"></i>
                            <li>Hives</li>
                          </div>
                          <div className="d-flex flex-row gap-3 align-items-center fs-5">
                            <i className="fa-solid fa-plus text-warning"></i>
                            <li>And more</li>
                          </div>
                        </ul>
                      </div>
                      <div className="col-md-6 p-5">
                        <ul className="list-unstyled">
                          <div className="d-flex flex-row gap-3 align-items-center my-2 fs-5">
                            <i className="fa-solid fa-plus text-warning"></i>
                            <li>Rashes</li>
                          </div>
                          <div className="d-flex flex-row gap-3 align-items-center fs-5">
                            <i className="fa-solid fa-plus text-warning"></i>
                            <li>Allergies</li>
                          </div>
                          <div className="d-flex flex-row gap-3 align-items-center my-2 fs-5">
                            <i className="fa-solid fa-plus text-warning"></i>
                            <li>Sunburn</li>
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

export default SkinCondition;
