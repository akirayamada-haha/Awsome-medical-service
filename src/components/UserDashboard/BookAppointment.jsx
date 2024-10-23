import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bgImg from "../../Images/telemedicine_home_img.JPG";
import { parseJwt } from "../utils/parseJwt";
import { toast } from "react-toastify";

const UserAddedToast = () => {
  return (
    <>
      <p className="text-dark">
        You have registered successfully, please login to continue...
      </p>
    </>
  );
};

const WarnToast = () => {
  return (
    <>
      <p className="text-warning">Something went wrong!!!</p>
    </>
  );
};

const BookAppointment = () => {
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [message, setMessage] = useState();
  const [phone, setPhone] = useState();

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
  const token_data = localStorage.getItem("token");
  const token = parseJwt(token_data);
  //   console.log(token?.user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookData = {
      userName: token?.user?.name,
      email: token?.user?.email,
      doctorName: name,
      phone: phone,
      date: date,
      time: time,
      message: message,
    };

    axios
      .post(`http://localhost:5000/book-appointment`, bookData)
      .then((response) => {
        if (response) {
          toast.success(<UserAddedToast />, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
          });
          setPhone("");
          setDate("");
          setTime("");
          setMessage("");
        }
      })
      .catch((e) => {
        toast.warn(<WarnToast />, {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: true,
        });
      });
  };
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
      ></div>

      <div className="container">
        <div className="row  justify-content-center">
          <div className="col-md-4">
            <div className="card p-4 my-5">
              <div className="card-title">
                <h1 className="text-center text-primary">Doctor Information</h1>
              </div>
              <div className="card-body">
                <div className="img">
                  <img src={bgImg} alt="" className="img-fluid" />
                </div>
                <div className="doctor-details d-flex flex-column gap-2">
                  <span>
                    {" "}
                    <strong>Doctor Name:</strong> {singleData.name}
                  </span>
                  <span className="fst-italic fw-bold">
                    Specialized in chronic diseases and urgent care
                  </span>
                  <span>
                    <strong>Phone:</strong> {singleData.phone}
                  </span>
                </div>
                <div className="bookBtn text-center pt-4">
                  <button className="btn btn-primary w-100 text-uppercase fw-bold">
                    Schedule an Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4 my-5">
              <h1 className="fs-2 text-center text-primary">
                Book an Appointment
              </h1>
              <form
                method="POST"
                action=""
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-bold">
                    Doctor Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="Enter Full Name"
                    value={singleData.name || name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label fw-bold">
                    Phone
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="contact"
                    placeholder="Enter Contact Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label fw-bold"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    aria-describedby="emailHelp"
                    placeholder="Enter appointment date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="time" className="form-label fw-bold">
                    Time
                  </label>
                  <input
                    type="time"
                    className="form-control"
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="floatingTextarea" className="fw-bold py-2">
                    Inquiry
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    cols="4"
                    rows="2"
                    className="form-control"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <button className="btn btn-primary text-uppercase w-100">
                  Book an Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAppointment;
