import React from "react";
import urgent_care from "../../Images/urgent_care.JPG";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="container-fluid" style={{ marginTop: "5rem" }}>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <img
              src={urgent_care}
              alt=""
              className="img-fluid"
              style={{ width: "100rem", height: "45vh" }}
            />
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div
              className="card  py-5 shadow-lg"
              style={{ borderTop: "4px solid #ffd166", borderBottom: "none" }}
            >
              <div className="heading text-center mb-3 px-4">
                <h2 className="fw-bold">Get Help Quickly</h2>
                <h4>
                  Browse our most frequently asked questions (FAQs) for quick
                  answers about Doctor On Demand and our services.
                </h4>
              </div>
              <ul className="ms-5">
                <li>General Questions</li>
                <li>Excuse Notes &amp; Medical Records</li>
                <li>Payment, Insurance &amp; Billing</li>
                <li>Prescriptions &amp; Pharmacy</li>
                <li>Troubleshooting</li>
                <li>Managing my Account</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center d-flex flex-row gap-5">
          <div className="col-md-3 d-flex flex-column gap-1">
            <h4 style={{ color: "#1a759f" }}>Message Support</h4>
            <p>
              Reach out to us and one of our Customer Support Representatives
              will follow up with you.
            </p>
            <Link to="/contact-us" className="btn btn-primary">
              Message Us
            </Link>
          </div>
          <div className="col-md-3 d-flex flex-column gap-1">
            <h4 style={{ color: "#1a759f" }}>Call Support</h4>
            <p>
              Need immediate support? Call our Customer Support Team, they'll be
              happy to help.
            </p>
            <p className="fw-bold">
              Phone:<span className="fw-normal"> 01-9876543</span>
            </p>
          </div>
          <div className="col-md-3 d-flex flex-column gap-1">
            <h4 style={{ color: "#1a759f" }}>Email Us</h4>
            <p>
              For media relations and other inquiries, please email us at one of
              the addresses below.
            </p>
            <p className="fw-bold">
              Media inquiries: <br />
              <span className="fw-normal">press@telemedicine.com</span> <br />
              <span className="fw-bold">
                Partnership inquiries: <br />
                <span className="fw-normal">partnerships@telemedicine.com</span>
              </span>
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10 p-4">
            <p className="text-center">
              If you are experiencing a crisis or an emergency, please don't use
              this tool and dial 911 or go to your nearest emergency room. You
              may also access the free, 24-hour National Suicide Prevention
              Lifeline at 1-800-273-8255 (1-800-273-TALK).
            </p>
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

export default Contact;
