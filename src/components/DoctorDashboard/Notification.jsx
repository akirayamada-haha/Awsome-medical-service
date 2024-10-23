import bgImg from "../../Images/telemedicine_home_img.JPG";
import React, { useEffect, useState } from "react";
import Navbar from "../Header/Navbar";
import axios from "axios";
const Notification = () => {
  // console.log(token.userId);
  const [noti, setNoti] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/all-notifications`)
      .then((response) => {
        setNoti(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div
        className="container-fluid homeImg py-3"
        style={{
          paddingTop: 70,
          backgroundColor: "#ebebeb",
          background: `url(${bgImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "30vh",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <Navbar />
      </div>

      <div className="container py-5">
        <div className="row justify-content-center">
        <div className="col-md-8">
            {noti && noti.length > 0 ? (
              <div className="container my-4">
                <h3>
                  You Have Got{" "}
                  <span className="fst-italic text-info me-2">
                    {noti?.length}
                  </span>
                  Notifications
                </h3>
              </div>
            ) : (
              <div className="container">
                <div className="row">
                  <h3 className="text-center fw-bold mt-5">
                    There is no any notifications
                  </h3>
                </div>
              </div>
            )}

            <div className="container my-5">
              <div className="row">
                {noti &&
                  noti.map((d, _id) => {
                    return (
                      <div className="col-md-4 my-3" key={d._id}>
                        <div className="card shadow-lg py-2">
                          <h6 className=" ps-3  text-primary mt-2">
                            <p>Notice Regarding</p> <br />
                            <span className=" text-dark fw-bold">Customer Name:  <span className="fw-normal">{d.userName}</span> </span> <br />
                            <span className="fw-bold text-dark"> Email: <span className="fw-normal">{d.email}</span> </span> 
                            
                          </h6>
                          <h6 className="ps-3 fw-bold">Appointment Date: <span className="fw-normal">{d.date}</span> </h6>
                          <h6 className="fw-bold ps-3">Time: <span className="fw-normal">{d.time}</span> </h6>
                          <p className="fw-bold ps-3">Topic: <span className="fw-normal">{d.message}</span></p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>




      
    </>
  );
};

export default Notification;
