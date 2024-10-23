import React from "react";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import homeImg from "../../../Images/telemedicine_home_img.JPG";
import trustedTherapist from "../../../Images/trusted_therapist.JPG";
import feelBetter from "../../../Images/feel_better.JPG";
import completeCare from "../../../Images/complete_care.JPG";
import punam from "../../../Images/punam_pic.JPG";
import dipika from "../../../Images/dipika.jpg";

const Relationship = () => {
  return (
    <>
      <div
        className="container-fluid"
        style={{ marginTop: "7rem", backgroundColor: "#e5e5e5" }}
      >
        <div className="row p-5">
          <div className="col-md-10 d-flex flex-row justify-content-around align-items-center">
            <h6 style={{ color: "#00509d" }}>
              Our team of therapists and psychiatrists are available 7 days a
              week.
            </h6>
            <Link
              to="/mental-health"
              className="text-decoration-none fw-bold"
              style={{ color: "#00509d" }}
            >
              Schedule a Visit{" "}
              <span>
                <i className="fa-solid fa-arrow-right-long ms-2 fs-6 "></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5" style={{ backgroundColor: "#1982c4" }}>
            <div className="row" style={{ gap: "11rem" }}>
              <div className="col-md-10 align-items-center justify-content-center mt-5 ms-5 text-white">
                <h1>Therapy your way</h1>
                <p className="mt-3">
                  Choose from a variety of online therapists with different
                  backgrounds and specialties, available when you are. From
                  online therapy to medication management, we’re here to support
                  your full mental wellbeing.
                </p>
              </div>
              <div
                className="col-md-12 pb-4 mt-3"
                style={{ backgroundColor: "#274c77" }}
              >
                <a href="/" className="text-white ms-5 text-decoration-none">
                  <h5 className="p-3">
                    Register and Browse Our Therapists{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right-long ms-3"></i>
                    </span>
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img src={homeImg} alt="" width="601" />
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#a8dadc" }}>
        <div className="row p-4">
          <div className="col-md-10 d-flex flex-row justify-content-around align-items-center">
            <h6 style={{ color: "#00509d" }}>
              We make it easy for you to access online therapy and mental health
              support.
            </h6>
            <Link
              to="/mental-health"
              className="btn btn-primary text-decoration-none fw-bold bg-transparent p-2"
              style={{ color: "#00509d" }}
            >
              Find Your Therapist{" "}
              <span>
                <i className="fa-solid fa-arrow-right-long ms-2 fs-6 "></i>
              </span>
            </Link>
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
            <h3 style={{ color: "#00509d" }}>Trusted therapists</h3>
            <p>
              Our team consists of US-based psychiatrists and therapists, rated
              4.9 out of 5 stars by patients.
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
            <h3 style={{ color: "#00509d" }}>Complete care</h3>
            <p>
              If medication is a part of your therapy, our psychiatrists can
              order electronic prescriptions to the pharmacy of your choice.
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
            <h3 style={{ color: "#00509d" }}>Feel better</h3>
            <p>
              Whether it's work stress, relationship issues, or trouble
              sleeping, well work with you on a personalized plan to achieve
              your goal.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <button className="btn btn-primary fw-bold p-3">
              Schedule Your Visit
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h1 style={{ color: "#00509d" }}>
              Doctor On Demand offers easy access to virtual counseling
            </h1>
            <p>
              Virtual counseling services include coaching, online therapy, and
              psychiatry for all behavioral health needs. Get the help you need
              in days, not months. Including:
            </p>
          </div>
        </div>
        <div className="row justify-content-center py-5">
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-3 d-flex flex-column gap-2">
                <h5 style={{ color: "#00509d" }}>Full spectrum of care</h5>
                <p>
                  Care for all behavioral health needs, including preventive and
                  specialty care.
                </p>
              </div>
              <div className="col-md-3 d-flex flex-column gap-2">
                <h5 style={{ color: "#00509d" }}>Full spectrum of care</h5>
                <p>
                  Care for all behavioral health needs, including preventive and
                  specialty care.
                </p>
              </div>
              <div className="col-md-3 d-flex flex-column gap-2">
                <h5 style={{ color: "#00509d" }}>Full spectrum of care</h5>
                <p>
                  Care for all behavioral health needs, including preventive and
                  specialty care.
                </p>
              </div>
              <div className="col-md-3 d-flex flex-column gap-2">
                <h5 style={{ color: "#00509d" }}>Full spectrum of care</h5>
                <p>
                  Care for all behavioral health needs, including preventive and
                  specialty care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* need to work on */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row">
              <div
                className="card  my-5"
                style={{ borderTop: "none", borderBottom: "none" }}
              >
                <div className="row">
                  <div className="col-md-4">
                    <ul className="list-unstyled p-5 fw-bold fs-5">
                      <li className="my-3">
                        <Link
                          to="/mental-health"
                          className="text-decoration-none text-dark"
                        >
                          How we can help:
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/anxiety"
                          className="text-decoration-none text-dark"
                        >
                          Anxiety
                        </Link>
                      </li>
                      <li className="my-3">
                        <Link
                          to="/depression"
                          className="text-decoration-none text-dark"
                        >
                          Depression
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/postpartum"
                          className="text-decoration-none text-dark"
                        >
                          Postpartum
                        </Link>
                      </li>
                      <li className="my-3">
                        <Link
                          to="/relationships"
                          className="text-decoration-none text-dark"
                        >
                          Relationships
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/trauma-loss"
                          className="text-decoration-none text-dark"
                        >
                          Trauma &amp; Loss
                        </Link>
                      </li>
                      <li className="my-3">
                        <Link
                          to="/screenings"
                          className="text-decoration-none text-dark"
                        >
                          Screenings
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-8 p-4">
                    <h1 className="text-start" style={{ color: "#00509d" }}>
                    Relationships
                    </h1>
                    <p>
                      Here are some of the things we can help with and treat:
                    </p>
                    <div className="row">
                      <div className="col-md-6 p-5">
                        <ul className="list-unstyled">
                          <div className="d-flex flex-row gap-3 align-items-center my-2 fs-5">
                            <i className="fa-solid fa-plus text-warning"></i>
                            <li>Anxiety &amp; stress</li>
                          </div>
                          <div className="d-flex flex-row gap-3 align-items-center fs-5">
                            <i className="fa-solid fa-plus text-warning"></i>
                            <li>Behavioral therapy</li>
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
                            <li>Depression</li>
                          </div>
                          <div className="d-flex flex-row gap-3 align-items-center fs-5">
                            <i className="fa-solid fa-plus text-warning"></i>
                            <li>Anger management</li>
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
      </div>

      <div className="container">
        <h1
          className="text-start py-5"
          style={{ fontSize: "3rem", color: "#00509d" }}
        >
          We make finding a therapist easy
        </h1>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row justify-content-center">
              <div className="col-md-4 d-flex flex-column gap-4">
                <img
                  src={trustedTherapist}
                  alt=""
                  width="300"
                  height="300"
                  className="img-fluid"
                />
                <h3 style={{ color: "#00509d" }}>Take a test</h3>
                <p>
                  Not sure if therapy is right for you? You don't have to figure
                  it out alone. Take our quick assessment to find out if you'd
                  benefit from connecting with professional support.
                </p>
              </div>
              <div className="col-md-4 d-flex flex-column gap-4">
                <img
                  src={trustedTherapist}
                  alt=""
                  width="300"
                  height="300"
                  className="img-fluid"
                />
                <h3 style={{ color: "#00509d" }}>Browse therapists</h3>
                <p>
                  Browse our selection of experienced and licensed psychiatrists
                  &amp; therapists. Get to know their backgrounds,
                  qualifications, and specialities.
                </p>
              </div>
              <div className="col-md-4 d-flex flex-column gap-4">
                <img
                  src={trustedTherapist}
                  alt=""
                  width="300"
                  height="300"
                  className="img-fluid"
                />
                <h3 style={{ color: "#00509d" }}>Schedule your video visit</h3>
                <p>
                  Book an appointment for a time that works best for you. From
                  the convenience and privacy of home, work hand-in-hand with
                  your online therapist or psychiatrist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h1 style={{ color: "#00509d", fontSize: "3rem" }}>
              Personalized support you can trust
            </h1>
            <p>
              Our psychologists and psychiatrists have an average 15 years of
              experience. They are clinical experts in a variety of different
              specialties, such as anxiety, depression, relationship issues,
              trauma, and more.
            </p>
            <p>
              We make it easy for you to browse and learn about our providers so
              you can find the perfect match. Each of our providers will work
              with you to set a plan and help you achieve the goals most
              important to you.
            </p>
            <p>Doctor On Demand mental health services feature:</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 d-flex flex-column gap-4">
            <img
              src={punam}
              alt=""
              className="img-fluid shadow-lg"
              style={{ borderRadius: "50%", width: "200px", height: "200px" }}
            />
            <h4 style={{ color: "#00509d" }}>Licensed Therapists</h4>
            <p>
              Our caring and supportive team has experience working with
              patients face-to-face and dealing with mental health issues. Spend
              less time searching for help and more time connecting with someone
              you can trust.
            </p>
          </div>
          <div className="col-md-4 d-flex flex-column gap-4">
            <img
              src={dipika}
              alt=""
              className="img-fluid shadow-lg"
              style={{ borderRadius: "50%", width: "200px", height: "200px" }}
            />
            <h4 style={{ color: "#00509d" }}>Licensed Psychiatrists</h4>
            <p>
              Our therapists are licensed professionals who have the highest
              level of education available. They are experts in various types of
              therapy, including Cognitive Behavioral Therapy, so you'll be sure
              to find someone who fits your needs.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h1 style={{ color: "#00509d" }}>Choose your type of visit</h1>
            <ul className="d-flex flex-column gap-4 fs-5">
              <li>
                Psychologists and therapists use therapy to help you talk
                through your problems. Psychiatrists, who are physicians, use
                medication to treat your symptoms.
              </li>
              <li>
                Sometimes a combination of therapy and medication works best. In
                that case, patients see a psychiatrist for medication management
                and a therapist for talk therapy. If you are not sure, start
                with a therapist who can help you figure out what treatment may
                be best for you.
              </li>
            </ul>
            <p className="fw-bold">
              Please note:{" "}
              <span className="fw-normal">
                Our doctors are unable to write prescriptions for controlled
                substances such as codeine or oxycodone. Please see a doctor in
                person if you require medication classified as a controlled
                substance.
              </span>
            </p>
          </div>
        </div>
        <div className="row justify-content-center py-5">
          <div className="col-md-2">
            <button className="btn btn-primary text-center p-3">
              Schedule Appointment
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Relationship;
