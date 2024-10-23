import React from "react";
import { Link } from "react-router-dom";
import homeImg from "../../Images/telemedicine_home_img.JPG";
import trustedTherapist from "../../Images/trusted_therapist.JPG";
import feelBetter from "../../Images/feel_better.JPG";
import completeCare from "../../Images/complete_care.JPG";
import punam from "../../Images/punam_pic.JPG";
import dipika from "../../Images/dipika.jpg";
import Footer from "../Footer/Footer";

const Medicare = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "5rem" }}>
        <div className="row justify-content-around">
          <div className="col-md-4">
            <img src={homeImg} alt="" width="601" />
          </div>
          <div className="col-md-5" style={{ backgroundColor: "#1982c4" }}>
            <div className="row" style={{ gap: "11rem" }}>
              <div className="col-md-10 align-items-center justify-content-center mt-5 ms-5 text-white">
                <h1 style={{ fontSize: "3rem" }}>
                  $0 Copays For Urgent and Everyday Care
                </h1>
                <p className="mt-3">
                  Medicare Part B covers copays for Doctor On Demand Urgent and
                  Everyday Care video visits*.
                </p>
              </div>
              <div
                className="col-md-12 pb-4"
                style={{ backgroundColor: "#274c77", marginTop: "10px" }}
              >
                <a href="/" className="text-white ms-5 text-decoration-none">
                  <h5 className="p-3">
                    Get Started
                    <span>
                      <i className="fa-solid fa-arrow-right-long ms-3"></i>
                    </span>
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row justify-content-center d-flex flex-row gap-5">
          <div className="col-md-4 my-5">
            <img src={homeImg} alt="" className="img-fluid" width="400" />
          </div>
          <div className="col-md-5 d-flex flex-column gap-4">
            <h1
              style={{ color: "#00509d", fontSize: "3.5rem" }}
              className="fw-bold"
            >
              Get care 24/7
            </h1>
            <p>
              When you need care, our team is ready, around the clock. Our
              providers can help get you on track as well as order
              prescriptions. We'll take the hassle and guesswork out of feeling
              better.
            </p>
            <ul>
              <li>Prescription refills</li>
              <li>Urinary Tract Infections (UTIs)</li>
              <li>Joint Pain</li>
              <li>Asthma</li>
              <li>Bronchitis</li>
              <li>Skin Rashes</li>
              <li>Fever</li>
              <li>Cough</li>
              <li>Cold &amp; flu</li>
              <li>Nausea &amp; vomiting</li>
              <li>And more!</li>
            </ul>
            <div className="row">
              <div className="col-md-4">
                <button type="button" className="btn btn-primary p-2">
                  Join Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1
              style={{ color: "#00509d", fontSize: "3rem", fontWeight: "bold" }}
            >
              Great care, wherever you are
            </h1>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-4 d-flex flex-column gap-3">
            <img
              src={trustedTherapist}
              alt=""
              width="300"
              height="300"
              className="img-fluid"
            />
            <h3 style={{ color: "#00509d" }}>Top-rated care</h3>
            <p>
              Our providers are board-certified, come from various specialities,
              have an average of 15 years of experience and are rated 4.9 out of
              5 stars by patients.
            </p>
          </div>
          <div className="col-md-4 d-flex flex-column gap-3">
            <img
              src={feelBetter}
              alt=""
              width="300"
              height="300"
              className="img-fluid"
            />
            <h3 style={{ color: "#00509d" }}>Face-to-face</h3>
            <p>
              Video visits from the safety of our home, on-demand or by
              appointment, day or night, holidays included.
            </p>
          </div>
          <div className="col-md-4 d-flex flex-column gap-3">
            <img
              src={completeCare}
              alt=""
              width="300"
              height="300"
              className="img-fluid"
            />
            <h3 style={{ color: "#00509d" }}>Prescriptions &amp; Labs</h3>
            <p>
              Providers can order medication or prescription refills to the
              pharmacy of your choice. Or, can refer you to a convenient lab.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <button className="btn btn-primary fw-bold p-3">Join Today</button>
          </div>
        </div>
      </div>
      <div
        className="container-fluid p-5"
        style={{ backgroundColor: "#dee2e6" }}
      >
        <div className="container">
          <div className="row ">
            <div className="col-md-6">
              <h1 style={{ color: "#00509d", fontSize: "3rem" }}>
                See a Doctor Today
              </h1>
            </div>
          </div>
        </div>
        <div className="row justify-content-center p-5">
          <div className="col-md-4 d-flex flex-column gap-3">
            <img
              src={punam}
              alt=""
              className="img-fluid"
              style={{ borderRadius: "50%", width: "200px", height: "200px" }}
            />
            <h4 style={{ color: "#00509d", fontWeight: "bold" }}>
              Dr. Kristin Dean
            </h4>
            <p>Medical Doctor</p>
            <p>
              "Patients appreciate how easy it is to have a video visit, and the
              level of compassionate care we provide 24 hours a day."
            </p>
          </div>
          <div className="col-md-4 d-flex flex-column gap-3">
            <img
              src={dipika}
              alt=""
              className="img-fluid"
              style={{ borderRadius: "50%", width: "200px", height: "200px" }}
            />
            <h4 style={{ color: "#00509d", fontWeight: "bold" }}>
              Dr. Prentiss Taylor
            </h4>
            <p>Medical Doctor</p>
            <p>
              "Doctor On Demand helps us provide service at inconvenient times,
              when many urgent care centers are closed at night or on weekends."
            </p>
          </div>
          <div className="col-md-4 d-flex flex-column gap-3">
            <img
              src={punam}
              alt=""
              className="img-fluid"
              style={{ borderRadius: "50%", width: "200px", height: "200px" }}
            />
            <h4 style={{ color: "#00509d", fontWeight: "bold" }}>
              Dr. Heather Hawthorne
            </h4>
            <p>Medical Doctor</p>
            <p>
              "Within minutes of an injury or illness onset, I can work with
              patients to make sure they are on a path to a speedy recovery."
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <span>
              *Copays for everyday and urgent care are waived for Medicare Part
              B beneficiaries during the public health emergency as permitted by
              government policy.
            </span>
          </div>
        </div>
      </div>
      <div
        className="container-fluid py-4"
        style={{ backgroundColor: "#00509d" }}
      >
        <div className="row justify-content-center">
          <div className="col-md-2">
            <Link
              to="/register"
              className="btn bg-transparent text-white"
              style={{ border: "1px solid #ffffff" }}
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 p-5">
            <p>
              The telemedicine services made available through TeleMedicine are
              provided by licensed physicians practicing within a group of
              independently owned professional practices collectively known as
              TeleMedicine Professionals”. These professional practices provide
              services via the TeleMedicine telehealth platform. TeleMedicine,
              Inc. does not itself provide any physician, mental health or other
              healthcare provider services.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Medicare;
