import React from "react";

export const ServicesList = () => {
  return (
    <>
      <div className="services d-flex flex-column gap-3">
        <div className="service_part">
          <h6>
            <a
              href="/"
              style={{ color: "#184e77" }}
              className="fw-bold text-decoration-none"
            >
              Urgent Care
              <span>
                <i className="fa-solid fa-arrow-right-long ms-3"></i>
              </span>
            </a>
          </h6>
          <p>See a medical expert in minutes</p>
        </div>
        <div className="hrline">
          <hr style={{ height: "2px", backgroundColor: "#001524" }} />
        </div>
      </div>
      <div className="services d-flex flex-column gap-3">
        <div className="service_part">
          <h6>
            <a
              href="/"
              style={{ color: "#184e77" }}
              className="fw-bold text-decoration-none"
            >
              Mental Health
              <span>
                <i className="fa-solid fa-arrow-right-long ms-3"></i>
              </span>
            </a>
          </h6>
          <p>Emotional support from the privacy of home</p>
        </div>
        <div className="hrline">
          <hr style={{ height: "2px", backgroundColor: "#001524" }} />
        </div>
      </div>
      <div className="services d-flex flex-column gap-3">
        <div className="service_part">
          <h6>
            <a
              href="/"
              style={{ color: "#184e77" }}
              className="fw-bold text-decoration-none"
            >
              Preventive Health
              <span>
                <i className="fa-solid fa-arrow-right-long ms-3"></i>
              </span>
            </a>
          </h6>
          <p>Support for a healthy lifestyle</p>
        </div>
        <div className="hrline">
          <hr style={{ height: "2px", backgroundColor: "#001524" }} />
        </div>
      </div>
      <div className="services d-flex flex-column gap-3">
        <div className="service_part">
          <h6>
            <a
              href="/"
              style={{ color: "#184e77" }}
              className="fw-bold text-decoration-none"
            >
              Chronic Care
              <span>
                <i className="fa-solid fa-arrow-right-long ms-3"></i>
              </span>
            </a>
          </h6>
          <p>Convenient management for chronic conditions</p>
        </div>
        <div className="hrline">
          <hr style={{ height: "2px", backgroundColor: "#001524" }} />
        </div>
      </div>
    </>
  );
};
