import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../About/About";
import Contact from "../About/Contact";
import ChatPanel from "../ChatPanel/ChatPanel";
import Inbox from "../ChatPanel/Inbox";
import { UserProvider } from "../Context/userContext";
import DoctorDashboard from "../DoctorDashboard/DoctorDashboard";
import Notification from "../DoctorDashboard/Notification";
import Faq from "../FAQ/Faq";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Medicare from "../Medicare/Medicare";
import Register from "../Register/Register";
import Solution from "../Solutions/Solution";
import BookAppointment from "../UserDashboard/BookAppointment";
import SingleDoctor from "../UserDashboard/SingleDoctor";
import UserDashboard from "../UserDashboard/UserDashboard";
import { parseJwt } from "../utils/parseJwt";
import ChronicCare from "../WhatWeTreat/ChronicCare/ChronicCare";
import Diabetes from "../WhatWeTreat/ChronicCare/Diabetes";
import HighBloodPressure from "../WhatWeTreat/ChronicCare/HighBloodPressure";
import HighCholestrol from "../WhatWeTreat/ChronicCare/HighCholestrol";
import ThyroidIssue from "../WhatWeTreat/ChronicCare/ThyroidIssue";
import WeightManagement from "../WhatWeTreat/ChronicCare/WeightManagement";
import Anxiety from "../WhatWeTreat/MentalHealth/Anxiety";
import Depression from "../WhatWeTreat/MentalHealth/Depression";
import MentalHealth from "../WhatWeTreat/MentalHealth/MentalHealth";
import Postpartum from "../WhatWeTreat/MentalHealth/Postpartum";
import Relationship from "../WhatWeTreat/MentalHealth/Relationship";
import Screening from "../WhatWeTreat/MentalHealth/Screening";
import Trauma from "../WhatWeTreat/MentalHealth/Trauma";
import DietNutrition from "../WhatWeTreat/PreventiveHealth/DietNutrition";
import FamilyMedicine from "../WhatWeTreat/PreventiveHealth/FamilyMedicine";
import Medication from "../WhatWeTreat/PreventiveHealth/Medication";
import MenWellness from "../WhatWeTreat/PreventiveHealth/MenWellness";
import PreventiveHealth from "../WhatWeTreat/PreventiveHealth/PreventiveHealth";
import WomenWellness from "../WhatWeTreat/PreventiveHealth/WomenWellness";
import Allergy from "../WhatWeTreat/UrgentCare/Allergy";
import Headache from "../WhatWeTreat/UrgentCare/Headache";
import MenHealth from "../WhatWeTreat/UrgentCare/MenHealth";
import SkinCondition from "../WhatWeTreat/UrgentCare/SkinCondition";
import UrgentCare from "../WhatWeTreat/UrgentCare/UrgentCare";
import WomenHealth from "../WhatWeTreat/UrgentCare/WomenHealth";

const Container = () => {
  const token_data = localStorage.getItem("token");
  const token = parseJwt(token_data);
  return (
    <>
      <UserProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Messaging */}
          <Route path="/inbox/:roomId" element={<Inbox />} />
          <Route path="/messages" element={<ChatPanel />} />

          {/* for urgent care section */}
          <Route path="/urgent-care" element={<UrgentCare />} />
          <Route path="/skin-condition" element={<SkinCondition />} />
          <Route path="/women-health" element={<WomenHealth />} />
          <Route path="/men-health" element={<MenHealth />} />
          <Route path="/allergies" element={<Allergy />} />
          <Route path="/headaches" element={<Headache />} />

          {/* for mental health section */}
          <Route path="/mental-health" element={<MentalHealth />} />
          <Route path="/anxiety" element={<Anxiety />} />
          <Route path="/depression" element={<Depression />} />
          <Route path="/postpartum" element={<Postpartum />} />
          <Route path="/relationships" element={<Relationship />} />
          <Route path="/trauma-loss" element={<Trauma />} />
          <Route path="/screenings" element={<Screening />} />

          {/* for preventive health section */}
          <Route path="/preventive-health" element={<PreventiveHealth />} />
          <Route path="/family-medicine" element={<FamilyMedicine />} />
          <Route path="/women-wellness" element={<WomenWellness />} />
          <Route path="/men-wellness" element={<MenWellness />} />
          <Route path="/diet-nutrition" element={<DietNutrition />} />
          <Route path="/medication-management" element={<Medication />} />

          {/* for chronic care section */}
          <Route path="/chronic-care" element={<ChronicCare />} />
          <Route path="/high-cholesterol" element={<HighCholestrol />} />
          <Route path="/high-blood-pressure" element={<HighBloodPressure />} />
          <Route path="/weight-management" element={<WeightManagement />} />
          <Route path="/diabetes" element={<Diabetes />} />
          <Route path="/thyroid-issues" element={<ThyroidIssue />} />

          {/* for solutions section */}
          <Route path="/solutions" element={<Solution />} />

          {/* for medicare section */}
          <Route path="/medicare" element={<Medicare />} />

          {/* for about section */}
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />

          {/* for user purpose only */}
          {token?.user?.role === "user" && (
            <>
              <Route path="/user-dashboard" element={<UserDashboard />} />
              <Route path="/single-doctor/:did" element={<SingleDoctor />} />
              <Route path="/book-appointment/:did" element={<BookAppointment />} />

            </>
          )}
           {token?.user?.role === "doctor" && (
            <>
              <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
              <Route path="/all-notifications" element={<Notification />} />

            </>
          )}
        </Routes>
      </UserProvider>
    </>
  );
};

export default Container;
