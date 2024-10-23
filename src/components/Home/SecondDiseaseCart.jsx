import React from "react";

export const SecondDiseaseCart = ({ myStyle, cartStyle, listStyle }) => {
   
  return (
    <>
      <div className="col-md-4 my-2">
        <div className="card p-3" style={cartStyle}>
          <h3 style={myStyle}>Headaches</h3>
          <ul style={listStyle}>
            <li>Migraines</li>
            <li>Sinus headaches</li>
            <li>Tension headaches</li>
            <li>Nausea</li>
          </ul>
        </div>
      </div>

      <div className="col-md-4 my-2">
        <div className="card p-3" style={cartStyle}>
          <h3 style={myStyle}>Everyday care</h3>
          <ul style={listStyle}>
            <li> UTIs</li>
            <li>Fatigue</li>
            <li>IBS</li>
            <li>Joint pain</li>
          </ul>
        </div>
      </div>

      <div className="col-md-4 my-2">
        <div className="card p-3" style={cartStyle}>
          <h3 style={myStyle}>Allergies</h3>
          <ul style={listStyle}>
            <li> Seasonal allergies</li>
            <li> Epipen refills</li>
            <li> Allergic sinusitis</li>
            <li> Hives</li>
          </ul>
        </div>
      </div>
    </>
  );
};
