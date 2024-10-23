import React from "react";
import { FirstDiseaseCart } from "./FirstDiseaseCart";
import { SecondDiseaseCart } from "./SecondDiseaseCart";

const SecondPart = () => {
  const myStyle = {
    color: "#184e77",
  };
  const cartStyle = {
    borderRadius: "20px",
  };
  const listStyle ={
    fontSize: "1.2rem"
}
  return (
    <>
      <div
        className="container-fluid my-3"
        style={{ backgroundColor: "#edede9" }}
      >
        <div className="row justify-content-evenly p-5">
          <div className="col-md-4">
            <h1 style={{ color: "#1a759f" }}>We're here for you</h1>
          </div>
          <div className="col-md-5">
            <p>
              Meet with an urgent care doctor in minutes. Schedule a session
              with a therapist or psychiatrist this week.
            </p>
          </div>
        </div>
        <div className="container p-5">
          <div className="row ms-5">
            <FirstDiseaseCart myStyle={myStyle} cartStyle={cartStyle} listStyle={listStyle} />
          </div>
        </div>
        <div className="container  p-5">
          <div className="row ms-5">
            <SecondDiseaseCart myStyle={myStyle} cartStyle={cartStyle} listStyle={listStyle}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondPart;
