  import React, { useEffect, useState } from "react";
  import bgImg from "../../Images/telemedicine_home_img.JPG";
  import { useParams, Link } from "react-router-dom";
  import axios from "axios";
  import { parseJwt } from "../utils/parseJwt";

  const SingleDoctor = () => {
    const { did } = useParams();
    const [singleData, setSingleData] = useState([]);

    useEffect(() => {
      axios
        .get(`http://localhost:5000/get-single-doctor/${did}`)
        .then((result) => {
          setSingleData(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);


    // for token 
    const token_data = localStorage.getItem("token")
    const token = parseJwt(token_data)
    console.log(token)

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
            height: "50vh",
            backgroundSize: "cover",
            position: "relative",
          }}
        >

        </div>

        <div className="container">
          <div className="row  justify-content-center">
            <div className="col-md-4">
                <div className="card p-4 my-5">
                  <div className="card-title">
                    <h1 className="text-center">Doctor Information</h1>
                  </div>
                  <div className="card-body">
                    <div className="img">
                      <img src={bgImg} alt="" className="img-fluid" />
                    </div>
                    <div className="doctor-details d-flex flex-column gap-2">
                      <span> <strong>Doctor Name:</strong>  {singleData.name}</span>
                      <span className="fst-italic fw-bold">Specialized in chronic diseases and urgent care</span>
                      <span><strong>Phone:</strong> {singleData.phone}</span>
                    </div>
                    <div className="bookBtn text-center pt-4">

                    <Link to={`/book-appointment/${did}`} className="btn btn-primary w-100 text-uppercase fw-bold">Schedule an Appointment</Link>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default SingleDoctor;
