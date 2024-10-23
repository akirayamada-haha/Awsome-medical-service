import React from "react";
import punamPic from "../../Images/punam_pic.JPG";
import { ServicesList } from "./ServicesList";

const FourthPart = ({ bgColor }) => {
  return (
    <>
      <div className="container-fluid mt-5" style={bgColor}>
        <div className="row">
          <div className="col-md-4 p-5" style={{ marginLeft: "5rem" }}>
            <img
              src={punamPic}
              alt=""
              width="400"
              style={{ marginTop: "15vh" }}
            />
          </div>
          <div className="col-md-7 d-flex flex-column gap-3 mt-3  p-3">
            <h1 style={{ fontSize: "4rem", color: "#184e77" }}>
              Personalized care for your mind and body.
            </h1>
            <p>
              From rashes to colds, stress management to diabetes management,
              individual treatment plans are created around you. Our medical and
              mental health providers work together, keeping your personal
              journey protected and connected.
            </p>
            <ServicesList />
            <button className="btn btn-primary w-25 p-2 fs-6">
              See What We Treat
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourthPart;
