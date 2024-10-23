import React from "react";
import homeImg from "../../Images/telemedicine_home_img.JPG";

const FirstPart = () => {
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
                <h1>Our doctors and therapists are here, 24/7.</h1>
                <p className="mt-3">
                  Don't wait to start feeling better. Connect with a
                  board-certified doctor in minutes. Schedule time with a
                  therapist or psychiatrist this week.
                </p>
              </div>
              <div
                className="col-md-12 pb-4 mt-3"
                style={{ backgroundColor: "#274c77" }}
              >
                <a href="/" className="text-white ms-5 text-decoration-none">
                  <h5 className="p-3">
                    Start a Virtual Visit{" "}
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
    </>
  );
};

export default FirstPart;
