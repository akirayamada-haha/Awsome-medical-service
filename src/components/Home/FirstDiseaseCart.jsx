import React from "react";

export const FirstDiseaseCart = ({myStyle, cartStyle, listStyle}) => {
  return (
    <>
      <div className="col-md-4 my-2">
        <div className="card p-3" style={cartStyle}>
          <h3 style={myStyle}>Cold &amp; Flu</h3>
          <ul style={listStyle}>
            <li>Cough</li>
            <li>Headaches</li>
            <li>Nausea &amp; vomiting</li>
            <li>Fever</li>
          </ul>
        </div>
      </div>

      <div className="col-md-4 my-2">
        <div className="card p-3" style={cartStyle}>
          <h3 style={myStyle}>Skin conditions</h3>
          <ul style={listStyle}>
            <li>Acne</li>
            <li>Cellulitis</li>
            <li>Rashes</li>
            <li>Sunburn</li>
          </ul>
        </div>
      </div>

      <div className="col-md-4 my-2">
        <div className="card p-3" style={cartStyle}>
          <h3 style={myStyle}>Mental health</h3>
          <ul style={listStyle}>
            <li>Anxiety</li>
            <li>Depression</li>
            <li>Stress</li>
            <li>PTSD</li>
          </ul>
        </div>
      </div>
    </>
  );
};
