import React from "react";
import { Link } from "react-router-dom";

const LawyerCard = ({ lawyer }) => {
  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <h5 className="card-title">{lawyer.name}</h5>
        <p className="card-text">
          Specialty: {lawyer.specialty} <br />
          Cost per Appointment: ${lawyer.costPerAppointment}
        </p>
        <Link to={`/lawyer/${lawyer.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default LawyerCard;
