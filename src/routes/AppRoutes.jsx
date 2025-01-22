import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AppointmentHistory from "../pages/AppointmentHistory";
import LawyerDetailsPage from "../pages/LawyerDetailsPage";
import AppointmentForm from "../components/AppointmentForm";


const AppRoutes = () => {
  return (
    // <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<AppointmentHistory />} />
        <Route path="/book" element={<AppointmentForm />} />
        <Route path="/lawyer/:id" element={<LawyerDetailsPage />} />
      </Routes>
    // </Router>
  );
};

export default AppRoutes;
