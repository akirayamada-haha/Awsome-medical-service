import bgImg from "../../Images/telemedicine_home_img.JPG";
import React, { useEffect, useState } from "react";
import { parseJwt } from "../utils/parseJwt";
import Navbar from "../Header/Navbar";
import axios from "axios";
import img from "../../Images/doctor.jpg";
import { Link } from "react-router-dom";
const DoctorDashboard = () => {
  // get user form the token
  const token_data = localStorage.getItem("token");
  const token = parseJwt(token_data);
  // console.log(token.userId);
  const [data, setData] = useState([]);
  const [noti, setNoti] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/user-data/" + token.userId)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
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
      <div className="bg-light container-fluid p-0">
        <div className="container col-md-8 py-4 mb-4">
          <p className="text text-center text-secondary fs-3 fw-bold">
            Doctor Dashboard
          </p>
          <div className="d-flex justify-content-between align-items-center border p-3 rounded bg-white mb-3">
            <div className="desc">
              <p className="text text-primary fs-5">{data?.name}</p>
              <small className="d-block text-secondary mb-3">
                {data?.email}
              </small>
            </div>
            <div className="">
              <div>
                {data?.image ? (
                  <>
                    <img
                      src={`http://localhost:5000/${data?.image}`}
                      alt=""
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        backgroundSize: "cover",
                      }}
                    />
                  </>
                ) : (
                  <>
                    <img
                      src="https://cdn.pixabay.com/photo/2018/01/29/17/01/woman-3116587__340.jpg"
                      alt=""
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        backgroundSize: "cover",
                      }}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default DoctorDashboard;
