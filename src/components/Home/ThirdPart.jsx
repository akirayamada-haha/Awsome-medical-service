import React from "react";
import virtualImg from "../../Images/virtual_care.JPG";

const ThirdPart = () => {
  return (
    <>
      <div className="container my-3 py-4">
        <div className="row d-flex flex-row gap-5 justify-content-evenly">
          <div className="col-md-5">
            <h1 style={{ fontSize: "3rem", color: "#184e77" }}>
              Total Virtual Care™
            </h1>
            <p>
              With 24/7 access to doctors, psychiatrists, psychologists,
              therapists and other medical experts, care is always available,
              anytime and anywhere. Select and see your favorite providers again
              and again, right from your smartphone, tablet or computer.
            </p>
            <p>
              {" "}
              Better yet, Doctor On Demand is a covered benefit for over 98
              million Americans by their health plan or employer. It’s free to
              sign up and easy to check your coverage when you register.
            </p>
            <p className="btn btn-outline-primary text-uppercase fs-5">
              get started
            </p>
          </div>
          <div className="col-md-4">
            <img src={virtualImg} alt="" className="img-fluid" width="400" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdPart;
