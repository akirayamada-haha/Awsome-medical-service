import React from "react";

const FifthPart = () => {
  return (
    <>
      <div
        className="container-fluid text-white"
        style={{ backgroundColor: "#1982c4" }}
      >
        <div className="row p-5">
          {" "}
          <div className="col-md-5 justify-content-center">
            <h2>
              Our doctors know more than your medical history, they know you.
            </h2>
          </div>
          <div className="col-md-6">
            <div>
              <p>
                With the most diverse nationwide practice, it's easy to select a
                medical or mental health provider with a background and
                specialty that are a perfect fit for you. Our licensed providers
                have an average of 15+ years of experience. They'll take time to
                listen to your concerns, answer questions and create individual
                treatment plans. It's why our average rating is 4.9 out of 5
                stars.
              </p>
            </div>
            <div className="chooseBtn">
              <button
                className="btn btn-outline-primary text-white"
                style={{ borderColor: "#fff" }}
              >
                Choose Your Provider
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FifthPart;
