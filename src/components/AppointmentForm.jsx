import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookAppointment } from "../features/appointments/appointmentSlice";

const AppointmentForm = () => {
  const dispatch = useDispatch();
  const lawyers = useSelector((state) => state.lawyers.lawyers);
  const appointments = useSelector((state) => state.appointments.appointments);

  const [lawyerId, setLawyerId] = useState("");
  const [clientName, setClientName] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check lawyer availability
    const selectedLawyer = lawyers.find((lawyer) => lawyer.id === parseInt(lawyerId));
    const lawyerAppointments = appointments.filter(
      (appointment) => appointment.lawyerId === parseInt(lawyerId)
    );

    if (lawyerAppointments.length >= selectedLawyer.availability) {
      alert("Appointment not available");
      return;
    }

    // Dispatch the booking action
    dispatch(
      bookAppointment({
        lawyerId: parseInt(lawyerId),
        clientName,
        time,
        cost: selectedLawyer.costPerAppointment,
      })
    );
    console.log({
      lawyerId: parseInt(lawyerId),
      clientName,
      time,
      cost: selectedLawyer.costPerAppointment,
    });
    

    // Reset the form
    setLawyerId("");
    setClientName("");
    setTime("");
    alert("Appointment booked successfully!");
  };

  return (
    <div className="container my-4">
      <h1>Book an Appointment</h1>
      {/* <form> */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Select Lawyer</label>
          <select
            className="form-select"
            value={lawyerId}
            onChange={(e) => setLawyerId(e.target.value)}
            required
          >
            <option value="">-- Select Lawyer --</option>
            {lawyers.map((lawyer) => (
              <option key={lawyer.id} value={lawyer.id}>
                {lawyer.name} ({lawyer.specialty})
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Client Name</label>
          <input
            type="text"
            className="form-control"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Time</label>
          <input
            type="text"
            className="form-control"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="e.g., 10:30 AM"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
