import React from "react";
import { Link } from "react-router-dom";
import health_included from "../../Images/included_health.JPG";
import urgent_care from "../../Images/urgent_care.JPG";
import gMap from "../../Images/gMap.JPG";
import mission from "../../Images/mission.JPG";
import Footer from "../Footer/Footer";

const About = () => {
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
      <div className="container-fluid" style={{ marginTop: "7rem" }}>
        <div className="row justify-content-center">
          <div className="col-md-6 d-flex flex-column gap-3">
            <h2 style={{ color: "#00509d" }}>
              TeleMedicine is now part of Included Health
            </h2>
            <p>
              <span style={{ color: "#00509d", fontWeight: "bold" }}>T</span>ele
              <span style={{ color: "#00509d", fontWeight: "bold" }}>M</span>
              edicine is the trusted provider of 24/7 virtual healthcare for the
              mind and body, including urgent care, mental health, preventative,
              primary and chronic care, with access to board-certified
              physicians and licensed psychologists through a smartphone,
              tablet, or computer.
            </p>
            <p>
              Founded in 2013, our mission is to improve the world's health
              through compassionate care and innovation. We believe that
              everyone should have instant and affordable access to a
              board-certified doctor, whenever and wherever needed.{" "}
            </p>
            <p>
              Learn more about our about our recent announcements to become the
              leading integrated virtual care and navigation company called
              Included Health.
            </p>
            <Link
              to="/solutions"
              className="text-decoration-none fw-bold"
              style={{ color: "#00509d" }}
            >
              Learn More{" "}
              <i className="fa-solid fa-arrow-right-long text-warning ms-2 fw-bold"></i>
            </Link>
          </div>
          <div className="col-md-4 px-3" style={{ marginTop: "5rem" }}>
            <img src={health_included} alt="" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-md-12">
            <img src={mission} alt="" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center d-flex flex-row gap-5">
          <div className="col-md-4">
            <img src={gMap} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 d-flex flex-column gap-4">
            <h1>Our Locations.</h1>
            <p>
              With offices in Minneapolis and Washington D.C., our home office
              is located in the heart of innovation in San Francisco, CA.
            </p>
            <div className="location">
              <h5 className="fw-bold">Headquarters</h5>
              <p>Chabahil-07, KTM, Nepal</p>
            </div>
            <div className="contact">
              <h5 className="fw-bold">Phone</h5>
              <p>01-9876543</p>
            </div>
            <div className="emails">
              <h5 className="fw-bold">Email</h5>
              <div>
                <span>
                  support@telemedicine.com <br />
                  feedback@telemedicine.com <br />
                  press@telemedicine.com{" "}
                </span>
              </div>
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

export default About;
