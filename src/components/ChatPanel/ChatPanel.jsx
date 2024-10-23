import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/userContext";

const ChatPanel = () => {
  const [user] = useContext(UserContext);
  const [rooms, setRooms] = useState([]);
  const [docs, setDocs] = useState([]);

  const navigate = useNavigate();

  const chat = (userId) => {
    const data = { user: userId };
    axios.post("http://localhost:5000/create-room", data).then(function (res) {
      console.log(res.data);
      if (res.data.success) {
        navigate(`/inbox/${res.data.roomId}`);
      }
    });
  };

  useEffect(() => {
    axios.get("http://localhost:5000/rooms").then(function (res) {
      setRooms(res.data.rooms);
    });
  }, []);

  useEffect(() => {
    console.log(user);
    axios.get("http://localhost:5000/all-doctors").then(function (res) {
      setDocs(res.data);
    });
  }, []);

  return (
    <>
      <div className="container mx-auto col-md-9 px-5 my-4">
        <div
          className="border rounded"
          style={{ background: "#f1f1f1", height: "70ch", marginTop: "12ch" }}
        >
          <div className="row h-100">
            <div className="col-md-3 my-4">
              <p className="text-xl fw-bold mx-3">Chats</p>

              <div className="chat-list">
                {rooms.length > 0 ? (
                  <>
                    {rooms.map((val, ind) => {
                      return (
                        <div key={ind}>
                          <Link
                            style={{ textDecoration: "none" }}
                            className=""
                            to={`/inbox/${val._id}`}
                          >
                            <div
                              className="d-flex mx-3 my-3 py-2 px-3 rounded hover"
                              style={{ background: "#ffffff" }}
                            >
                              <div className="">
                                <img
                                  className="rounded-circle"
                                  style={{
                                    height: "4ch",
                                    width: "4ch",
                                    objectFit: "cover",
                                  }}
                                  src={`http://localhost:5000/${
                                    val.user._id === user?._id
                                      ? val.creater.image
                                      : val.user.image
                                  }`}
                                  alt=""
                                />
                              </div>
                              <div className="mx-2">
                                <small className="text-xs">
                                  {val.user._id === user?._id
                                    ? val.creater.name
                                    : val.user.name}
                                </small>
                                <small className="d-block fw-bold">
                                  <small className="d-block fw-bold">
                                    {val.user._id === user?._id
                                      ? val.creater.role
                                      : val.user.role}
                                  </small>
                                </small>
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <>Loading...</>
                )}
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div
                className="h-100"
                style={{ width: "1px", background: "#e0e0e0" }}
              ></div>
              <div className="d-flex w-100 align-items-center justify-content-center">
                <p className="d-block text-sm">
                  Select a conversation to chat.
                </p>
              </div>
            </div>
            <div className="col-md-3 pt-5" style={{ marginTop: "2ch" }}>
              <p>Chat with our professionals</p>
              <div className="">
                {docs.length > 0 ? (
                  <>
                    {docs.map((val, ind) => {
                      return (
                        <div key={ind}>
                          <button className="btn" onClick={() => chat(val._id)}>
                            <div
                              className="d-flex py-2 px-3 rounded hover"
                              style={{ background: "#ffffff" }}
                            >
                              <div className="">
                                <img
                                  className="rounded-circle"
                                  style={{
                                    height: "4ch",
                                    width: "4ch",
                                    objectFit: "cover",
                                  }}
                                  src={`http://localhost:5000/${
                                    val._id === user?._id
                                      ? val.image
                                      : val.image
                                  }`}
                                  alt=""
                                />
                              </div>
                              <div className="mx-2">
                                <small className="text-xs">
                                  {val._id === user?._id ? val.name : val.name}
                                </small>
                                <small className="d-block fw-bold">
                                  {val.role}
                                </small>
                              </div>
                            </div>
                          </button>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <>Loading...</>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatPanel;
