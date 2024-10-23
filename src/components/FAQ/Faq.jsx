import React from "react";
import homeImg from "../../Images/telemedicine_home_img.JPG";
import Footer from "../Footer/Footer";

const Faq = () => {
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
                <h1 style={{ fontSize: "3rem" }}>
                  Find answers to your Frequently Asked Questions
                </h1>
                <p className="mt-3">TeleMedicine FAQ's</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* for general topics */}
      <div className="container-fluid my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="py-2 fw-bold" style={{ color: "#1a759f" }}>
              General Topics
            </h1>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    style={{ color: "#1a759f" }}
                  >
                    Why isn't Doctor On TeleMedicine free?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Our app is free to download and there is no subscription
                      fee. The price you pay is for your individual visit and is
                      used to cover the cost of the Board Certified Clinician's
                      time. Keep in mind that our prices are usually less than
                      what you would pay at an urgent care or ER, and in some
                      cases your visit may be free. Find out more about how much
                      TeleMedicine costs here.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    style={{ color: "#1a759f" }}
                  >
                    Do I need WIFI to use your service?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Although we do recommend you use WIFI for the best
                      possible experience, it is not required to use our
                      service. As long as your connection is <strong>4G</strong>{" "}
                      or <strong>LTE</strong>, then you should be fine. If you
                      do experience connection issues, you can simply switch to
                      audio-only, when connected to a Board Certified Clinician,
                      and your connection will improve.
                    </p>
                    <span>
                      If switching between WIFI and 4G/LTE it may be helpful to
                      reboot your device before attempting to connect.
                    </span>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    style={{ color: "#1a759f" }}
                  >
                    How much does TeleMedicine cost?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      We offer access to a variety of Board Certified
                      Clinicians. You pay on a by-visit basis when you talk to a
                      Board Certified Clinician. Learn more about how much
                      TeleMedicine costs and to find out if your employer or
                      health plan offers this benefit.
                    </p>
                    <span>
                      If paying with your insurance/employer benefits, the cost
                      will vary depending on your benefits. All costs will be
                      shown prior to scheduling an appointment.
                    </span>
                    <span>Please see our pricing below:</span>
                    <p className="mt-2 fw-bold">
                      Medical - Board Certified Clinician
                    </p>
                    <ul>
                      <li>$79 for a 15 min consultation</li>
                    </ul>
                    <p className="fw-bold">Mental Health Clinicians</p>
                    <span>Psychology</span>
                    <ul>
                      <li>$129 for a 25 min consultation</li>
                      <li>$179 for a 50 min consultation</li>
                    </ul>
                    <span>Psychiatry</span>
                    <ul>
                      <li>$299 for initial 45 min consultation</li>
                      <li>$129 for 15 min follow-up</li>
                    </ul>
                    <span>
                      Before the consultation ends, you will have the option to
                      extend the call for an additional fee.
                    </span>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                    style={{ color: "#1a759f" }}
                  >
                    Do you offer a subscription program?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      At this time we do not. We want to offer a service that
                      everyone can use and only pay for when they use it. If you
                      think you'd like to see a subscription service for
                      TeleMedicine, email us and let us know!
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                    style={{ color: "#1a759f" }}
                  >
                    Do I need an appointment?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      While our Medical practice does offer appointments, you
                      can also see a Board Certified Clinician “On-Demand.” This
                      allows you to be put in line to see the next available
                      Board Certified Clinician.
                    </p>
                    <p>
                      For a mental health appointment with a Therapist or
                      Psychiatrist, we do require an appointment. Appointments
                      can be scheduled by using the self-schedule feature within
                      the mobile app or website.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* for billing and payment */}
      <div className="container-fluid my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="py-2 fw-bold" style={{ color: "#1a759f" }}>
              Payments &amp; Billing
            </h1>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="accordion" id="id1">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button
                    className="accordion-button fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="true"
                    aria-controls="collapseSix"
                    style={{ color: "#1a759f" }}
                  >
                    Medicare: I have Part A, but I don't have Part B. Does
                    Medicare cover my TeleMedicine visit?
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingSix"
                  data-bs-parent="#id1"
                >
                  <div className="accordion-body">
                    <p>
                      Part A does not cover TeleMedicine visits. If you don't
                      have Part B, you may have another form of insurance that
                      offers TeleMedicine as a benefit. You can check if that
                      insurance company offers TeleMedicine once you create a
                      free account.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSeven">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                    style={{ color: "#1a759f" }}
                  >
                    Medicare: What do I need to enroll in TeleMedicine and
                    access my Medicare Part B benefits?
                  </button>
                </h2>
                <div
                  id="collapseSeven"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSeven"
                  data-bs-parent="#id1"
                >
                  <div className="accordion-body">
                    <p>
                      If you are a Medicare Part B beneficiary, all you need to
                      enroll and access your Part B benefits is a valid email
                      address, your Medicare ID number, and a phone number. You
                      will not need the insurance card for any supplementary
                      coverage, such as Medigap. Ready to see a Board Certified
                      Clinician?
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEight">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseEight"
                    style={{ color: "#1a759f" }}
                  >
                    Medicare: What kind of Medicare coverage do I have?
                  </button>
                </h2>
                <div
                  id="collapseEight"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingEight"
                  data-bs-parent="#id1"
                >
                  <div className="accordion-body">
                    <p>
                      There are many types of Medicare plans, including Original
                      Medicare Part A, Part B, Medicare Advantage (Part C),
                      Prescription Coverage (Part D) and Medicare Supplement
                      (Medigap) plans.{" "}
                      <strong>
                        Medicare Part B covers TeleMedicine at this time.
                      </strong>{" "}
                      If you have a Medicare Advantage plan, you may also have
                      TeleMedicine as a covered benefit. You can check if your
                      Medicare Advantage plan offers TeleMedicine once you
                      create a free TeleMedicine account. Original Medicare Part
                      A and Part D do not cover TeleMedicine visits.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingNine">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNine"
                    aria-expanded="false"
                    aria-controls="collapseNine"
                    style={{ color: "#1a759f" }}
                  >
                    What payment methods do you accept?
                  </button>
                </h2>
                <div
                  id="collapseNine"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingNine"
                  data-bs-parent="#id1"
                >
                  <div className="accordion-body">
                    <p>
                      We accept the following payment methods:
                      <ul>
                        <li>
                          All major credit cards, such as VISA, MasterCard,
                          Debit Card
                        </li>
                        <li>Paypal</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTen">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTen"
                    aria-expanded="false"
                    aria-controls="collapseTen"
                    style={{ color: "#1a759f" }}
                  >
                    Is my information secure?
                  </button>
                </h2>
                <div
                  id="collapseTen"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTen"
                  data-bs-parent="#id1"
                >
                  <div className="accordion-body">
                    <p>
                      We take your privacy and the security of your information
                      seriously. TeleMedicine is HITRUST certified and NCQA and
                      URAC accredited, which are the most respected
                      certifications in the healthcare industry. We do not share
                      your personal health information (PHI) information with
                      anyone unless you explicitly request a record of your
                      visit be sent to your primary care physician.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* for Doctor Visits */}
      <div className="container-fluid my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="py-2 fw-bold" style={{ color: "#1a759f" }}>
              Doctor Visits
            </h1>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="accordion" id="id2">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEleven">
                  <button
                    className="accordion-button fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEleven"
                    aria-expanded="true"
                    aria-controls="collapseEleven"
                    style={{ color: "#1a759f" }}
                  >
                    Can medical forms, such as work/school excuses, be filled
                    out?
                  </button>
                </h2>
                <div
                  id="collapseEleven"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingEleven"
                  data-bs-parent="#id2"
                >
                  <div className="accordion-body">
                    <p>
                      Yes, during your visit the Board Certified Clinician will
                      discuss if taking time off from work or school is part of
                      your treatment plan.
                    </p>
                    <p>
                      If you need an excuse note, you may request one from the
                      Board Certified Clinician during your visit. You’ll
                      receive an alert when your excuse note is ready in your
                      account, from there you can download to print or email.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="heading12">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse12"
                    aria-expanded="false"
                    aria-controls="collapse12"
                    style={{ color: "#1a759f" }}
                  >
                    What happens if my medical visit goes over 15 minutes?
                  </button>
                </h2>
                <div
                  id="collapse12"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading12"
                  data-bs-parent="#id2"
                >
                  <div className="accordion-body">
                    <p>
                      Once your visit reaches the 13 minute mark, we will ask
                      you if you'd like to extend your visit an additional 15
                      minutes. If you decide to extend the visit, you will be
                      billed for an additional visit at the same rate. For
                      example, for visit with Board Certified Clinician, you
                      would be billed $75 for the first 15 min and an additional
                      $75 for each 15 min thereafter.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="heading13">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse13"
                    aria-expanded="false"
                    aria-controls="collapse13"
                    style={{ color: "#1a759f" }}
                  >
                    Do I need an appointment?
                  </button>
                </h2>
                <div
                  id="collapse13"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading13"
                  data-bs-parent="#id2"
                >
                  <div className="accordion-body">
                    <p>
                      While our Medical practice does offer appointments, you
                      can also see a Board Certified Clinician “On-Demand.” This
                      allows you to be put in line to see the next available
                      Board Certified Clinician.
                    </p>
                    <p>
                      For a mental health appointment with a Therapist or
                      Psychiatrist, we do require an appointment. Appointments
                      can be scheduled by using the self-schedule feature within
                      the mobile app or website.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="heading14">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse14"
                    aria-expanded="false"
                    aria-controls="collapse14"
                    style={{ color: "#1a759f" }}
                  >
                    How is my personal information and medical history stored?
                    Is it safe?
                  </button>
                </h2>
                <div
                  id="collapse14"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading14"
                  data-bs-parent="#id2"
                >
                  <div className="accordion-body">
                    <p>
                      Your information is stored on our encrypted servers inside
                      encrypted databases. Only strong-encryption APIs may
                      access the data via our mobile application. Our system is
                      also HIPAA compliant.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="heading15">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse15"
                    aria-expanded="false"
                    aria-controls="collapse15"
                    style={{ color: "#1a759f" }}
                  >
                    How is a Board Certified Clinician selected for me?
                  </button>
                </h2>
                <div
                  id="collapse15"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading15"
                  data-bs-parent="#id2"
                >
                  <div className="accordion-body">
                    <p>
                      If you're planning a mental health visit with a Therapist
                      or Psychiatrist, you will choose a specific clinician you
                      wish to visit with. The list of clinicians populated is
                      based on your location and will present clinicians in your
                      state.
                    </p>
                    <p>
                      If you're visiting with a Board Certified Clinician it
                      depends on which type of appointment you select. If you
                      select to “<strong>Get Care</strong>,” you'll be
                      automatically connected with the next available clinician.
                      However, if you schedule an appointment for a later time,
                      you can select which Board Certified Clinician you would
                      like to visit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* for Prescription & Pharmacy */}
      <div className="container-fluid my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="py-2 fw-bold" style={{ color: "#1a759f" }}>
              Doctor Visits
            </h1>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="accordion" id="id3">
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading16">
                  <button
                    className="accordion-button fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse16"
                    aria-expanded="true"
                    aria-controls="collapse16"
                    style={{ color: "#1a759f" }}
                  >
                    How do I transfer my prescription to a different pharmacy?
                  </button>
                </h2>
                <div
                  id="collapse16"
                  className="accordion-collapse collapse show"
                  aria-labelledby="heading16"
                  data-bs-parent="#id3"
                >
                  <div className="accordion-body">
                    <p>
                      Let your new pharmacy know that you want to transfer your
                      prescriptions from your old pharmacy. You can do this by
                      calling, stopping by the new pharmacy in person—or you may
                      be able to do a transfer online if your new pharmacy
                      offers transfer services on their website or mobile app.
                    </p>
                    <p className="fw-bold">Pharmacy Closed</p>
                    <p>
                      If your old pharmacy is closed, give us a call with the
                      new pharmacy information. Most transfers are handled same
                      day, but during peak seasons it can take up to 24 hours
                      for the transfer to be completed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="heading17">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse17"
                    aria-expanded="false"
                    aria-controls="collapse17"
                    style={{ color: "#1a759f" }}
                  >
                    How do I get a refill for a prescription sent by a
                    TeleMedicine Board Certified Clinician?
                  </button>
                </h2>
                <div
                  id="collapse17"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading17"
                  data-bs-parent="#id3"
                >
                  <div className="accordion-body">
                    <p>
                      At this time, we only offer the ability to request an
                      automatic refill to our patients seen by Psychiatrists.
                      Please reach out to our Member Support team for
                      assistance.
                    </p>
                    <p>We can be reached via:</p>
                    <ul>
                      <li>Email address - support@telemedicine.com</li>
                      <li>Phone - 01-9876543</li>
                    </ul>
                    <p>
                      If you were seen by any other Board Certified Clinician,
                      you should schedule another visit to request a refill of
                      your medication.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="heading18">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse18"
                    aria-expanded="false"
                    aria-controls="collapse18"
                    style={{ color: "#1a759f" }}
                  >
                    How do I change my pharmacy with TeleMedicine?
                  </button>
                </h2>
                <div
                  id="collapse18"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading18"
                  data-bs-parent="#id3"
                >
                  <div className="accordion-body">
                    <p>Please follow these easy steps:</p>
                    <ol>
                      <li>Log into the TeleMedicine app or website</li>
                      <li>
                        Go to <strong>My Health</strong>
                      </li>
                      <li>Click on 'Pharmacies'</li>
                      <li>Select 'Add Pharmacy' or 'Edit'</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 p-5">
            <p>
              The telemedicine services made available through TeleMedicine are
              provided by licensed physicians practicing within a group of
              independently owned professional practices collectively known as
              TeleMedicine Professionals”. These professional practices provide
              services via the TeleMedicine telehealth platform. TeleMedicine,
              Inc. does not itself provide any physician, mental health or other
              healthcare provider services.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
