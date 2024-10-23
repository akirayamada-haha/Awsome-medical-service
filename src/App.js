import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./components/Context/userContext";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import Container from "./components/Routers/Container";

function App() {
  const [dismiss, setDismiss] = useState(false);
  setInterval(() => {
    setDismiss(false);
  }, 1000);
  return (
    <div className="App">
      <BrowserRouter>
        {dismiss ? (
          <>
            <div
              className="alert  alert-dismissible fade show m-2"
              style={{ backgroundColor: "#0077b6", color: "#ffffff" }}
              role="alert"
            >
              Due to increased volumes, you may experience higher than normal
              wait times for on-demand visits.
              <br />
              You can still schedule an appointment for a future date.
              <button
                type="button"
                className="btn-close mt-2"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          </>
        ) : (
          <></>
        )}

        <UserProvider>
          <Navbar />
        </UserProvider>
        <Container />
      </BrowserRouter>
    </div>
  );
}

export default App;
