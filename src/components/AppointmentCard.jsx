import React from "react";

const AppointmentCard = ({ appointment }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Client: {appointment.clientName}</h5>
        <p className="card-text">
          Time: {appointment.time} <br />
          Lawyer ID: {appointment.lawyerId} <br />
          Cost: ${appointment.cost}
        </p>
      </div>
    </div>
  );
};

export default AppointmentCard;
