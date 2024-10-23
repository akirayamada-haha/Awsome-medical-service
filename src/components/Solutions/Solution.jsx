import React from "react";
import { Link } from "react-router-dom";
import health_included from "../../Images/included_health.JPG";
import Footer from "../Footer/Footer";
const Solution = () => {
  return (
    <>
      <div className="container-fluid" style={{ marginTop: "7rem" }}>
        <div className="row justify-content-center">
          <div className="col-md-4 px-3" style={{ marginTop: "5rem" }}>
            <img src={health_included} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 d-flex flex-column gap-3">
            <h2 style={{ color: "#00509d" }}>
              TeleMedicine, together with Grandrounds, is now Included
              Health
            </h2>
            <p>
              Included Health improves the member experience and drives better
              clinical and financial outcomes. With compassionate, data-driven
              guidance, advocacy, and care for all types of health needs,
              Included Health gets members the right care at the right time.
              It's all Included.
            </p>
            <Link
              to="/solutions"
              className="text-decoration-none fw-bold"
              style={{ color: "#00509d" }}
            >
              Visit Included Health{" "}
              <i className="fa-solid fa-arrow-right-long text-warning ms-2 fw-bold"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h2 style={{ color: "#00509d" }}>
              We help organizations provide better care to their members
            </h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex flex-column gap-2">
            <h3 style={{ color: "#00509d" }} className="fw-bold">
              Employers
            </h3>
            <p>
              Combining the power of navigation with integrated virtual care
            </p>
            <Link
              to="/solutions"
              className="text-decoration-none fw-bold"
              style={{ color: "#00509d" }}
            >
              The value we bring to employers{" "}
              <i className="fa-solid fa-arrow-right-long text-warning ms-2 fw-bold"></i>
            </Link>
          </div>
          <div className="col-md-6 d-flex flex-column gap-2">
            <h3 style={{ color: "#00509d" }} className="fw-bold">
              Health Plans
            </h3>
            <p>
              Comprehensive care direction and virtual care solutions deliver
              outcomes that matter
            </p>
            <Link
              to="/solutions"
              className="text-decoration-none fw-bold"
              style={{ color: "#00509d" }}
            >
              How we partner with health plans
              <i className="fa-solid fa-arrow-right-long text-warning ms-2 fw-bold"></i>
            </Link>
          </div>
          <div className="col-md-6 d-flex flex-column gap-2 py-5">
            <h3 style={{ color: "#00509d" }} className="fw-bold">
              Consultants
            </h3>
            <p>Provide your clients with a higher standard of healthcare</p>
            <Link
              to="/solutions"
              className="text-decoration-none fw-bold"
              style={{ color: "#00509d" }}
            >
              What Included Health can do for consultants
              <i className="fa-solid fa-arrow-right-long text-warning ms-2 fw-bold"></i>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#e9ecef" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 pb-5 pt-2">
              <h2 style={{ color: "#00509d" }}>
                We provide compassionate care from start to finish. For
                everyone.
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 d-flex flex-column gap-2">
              <h3 style={{ color: "#00509d" }} className="fw-bold">
                All-Included Care™
              </h3>
              <p>
                One experience that guides and delivers high-quality care, for
                everyone
              </p>
              <Link
                to="/solutions"
                className="text-decoration-none fw-bold"
                style={{ color: "#00509d" }}
              >
                What does All-Included Care™ provide
                <i className="fa-solid fa-arrow-right-long text-warning ms-2 fw-bold"></i>
              </Link>
            </div>
            <div className="col-md-6 d-flex flex-column gap-2">
              <h3 style={{ color: "#00509d" }} className="fw-bold">
                Navigation
              </h3>
              <p>Make healthcare easier to access, understand, and use</p>
              <Link
                to="/solutions"
                className="text-decoration-none fw-bold"
                style={{ color: "#00509d" }}
              >
                How Navigation helps members
                <i className="fa-solid fa-arrow-right-long text-warning ms-2 fw-bold"></i>
              </Link>
            </div>
            <div className="col-md-6 d-flex flex-column gap-2 py-5">
              <h3 style={{ color: "#00509d" }} className="fw-bold">
                Primary Care
              </h3>
              <p>
                High-quality, easy-to-access primary care with integrated
                behavioral health
              </p>
              <Link
                to="/solutions"
                className="text-decoration-none fw-bold"
                style={{ color: "#00509d" }}
              >
                What is Primary Care
                <i className="fa-solid fa-arrow-right-long text-warning ms-2 fw-bold"></i>
              </Link>
            </div>
            <div className="col-md-6 d-flex flex-column gap-2 py-5">
              <h3 style={{ color: "#00509d" }} className="fw-bold">
                Behavioral Health
              </h3>
              <p>
                Comprehensive coaching, therapy, and psychiatry - when and where
                you want it
              </p>
              <Link
                to="/solutions"
                className="text-decoration-none fw-bold"
                style={{ color: "#00509d" }}
              >
                What does Behavioral Health entail
                <i className="fa-solid fa-arrow-right-long text-warning ms-2 fw-bold"></i>
              </Link>
            </div>
            <div className="col-md-6 d-flex flex-column gap-2 py-5">
              <h3 style={{ color: "#00509d" }} className="fw-bold">
                Everyday &amp; Urgent Care
              </h3>
              <p>
                24/7, on-demand care with dedicated, diverse providers, in as
                little as five minutes
              </p>
              <Link
                to="/solutions"
                className="text-decoration-none fw-bold"
                style={{ color: "#00509d" }}
              >
                What does Urgent Care provide
                <i className="fa-solid fa-arrow-right-long text-warning ms-2 fw-bold"></i>
              </Link>
            </div>
            <div className="col-md-6 d-flex flex-column gap-2 py-5">
              <h3 style={{ color: "#00509d" }} className="fw-bold">
                Specialty Care
              </h3>
              <p>
                Critical support for the complex, from diagnosis to treatment
                plan
              </p>
              <Link
                to="/solutions"
                className="text-decoration-none fw-bold"
                style={{ color: "#00509d" }}
              >
                How Specialty Care helps
                <i className="fa-solid fa-arrow-right-long text-warning ms-2 fw-bold"></i>
              </Link>
            </div>
            <div className="col-md-6 d-flex flex-column gap-2 py-5">
              <h3 style={{ color: "#00509d" }} className="fw-bold">
                Communities
              </h3>
              <p>
                Specialized care and advocacy for members underserved by the
                healthcare system
              </p>
              <Link
                to="/solutions"
                className="text-decoration-none fw-bold"
                style={{ color: "#00509d" }}
              >
                How Communities help
                <i className="fa-solid fa-arrow-right-long text-warning ms-2 fw-bold"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 p-5">
            <p>
              The telemedicine services made available through TeleMedicine
              are provided by licensed physicians practicing within a group of
              independently owned professional practices collectively known as
              TeleMedicine Professionals”. These professional practices
              provide services via the TeleMedicine telehealth platform.
              TeleMedicine, Inc. does not itself provide any physician,
              mental health or other healthcare provider services.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Solution;
