import React from "react";

const DonotTreat = () => {
  return (
    <>
      <div className="card p-4" style={{borderTop: "none", borderBottom: "none"}}>
        <h1>What We Don’t Treat</h1>
        <p>
          While our providers are able to treat most common issues, there are
          conditions that we don’t treat. Please see an in-person doctor or
          hospital if you experience any of the following:
        </p>
        <div className="row">
          <div className="col-md-6 p-5">
            <ul className="list-unstyled">
              <div className="d-flex flex-row gap-3 align-items-center my-2 fs-5">
                <i className="fa-solid fa-plus text-warning"></i>
                <li> Traumatic brain or spinal cord injury*</li>
              </div>
              <div className="d-flex flex-row gap-3 align-items-center fs-5">
                <i className="fa-solid fa-plus text-warning"></i>
                <li>Vomiting or coughing blood</li>
              </div>
              <div className="d-flex flex-row gap-3 align-items-center my-2 fs-5">
                <i className="fa-solid fa-plus text-warning"></i>
                <li>Loss of consciousness</li>
              </div>
              <div className="d-flex flex-row gap-3 align-items-center fs-5">
                <i className="fa-solid fa-plus text-warning"></i>
                <li>Severe burns</li>
              </div>
            </ul>
          </div>
          <div className="col-md-6 p-5">
            <ul className="list-unstyled">
              <div className="d-flex flex-row gap-3 align-items-center my-2 fs-5">
                <i className="fa-solid fa-plus text-warning"></i>
                <li>Chest pain and/or numbness</li>
              </div>
              <div className="d-flex flex-row gap-3 align-items-center fs-5">
                <i className="fa-solid fa-plus text-warning"></i>
                <li>Lacerations</li>
              </div>
              <div className="d-flex flex-row gap-3 align-items-center my-2 fs-5">
                <i className="fa-solid fa-plus text-warning"></i>
                <li> Broken bones</li>
              </div>
              <div className="d-flex flex-row gap-3 align-items-center fs-5">
                <i className="fa-solid fa-plus text-warning"></i>
                <li>Ear infections**</li>
              </div>
            </ul>
          </div>
        </div>
        <p>
          Our providers are unable to write prescriptions for controlled
          substances such as codeine or oxycodone. Please see a doctor in person
          if you require medication classified as a controlled substance.
        </p>
        <small style={{ fontSize: "13px" }} className="mb-2">
          *Please note, this limitation is for the immediate period following a
          spinal cord or traumatic brain injury, which may need in person
          emergency or trauma medical services. We are able to treat people who
          have a history of a traumatic brain or spinal cord injury that have
          non-emergent medical needs.
        </small>
        <small style={{ fontSize: "13px" }}>
          **People who have a digital otoscope that allows the healthcare
          provider to see in the ear remotely can be evaluated during a
          telemedicine visit for ear infections.
        </small>
      </div>
    </>
  );
};

export default DonotTreat;
