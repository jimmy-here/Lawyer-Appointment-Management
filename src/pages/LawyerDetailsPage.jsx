// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { bookAppointment } from "../features/appointments/appointmentSlice";

// const LawyerDetailsPage = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const lawyers = useSelector((state) => state.lawyers.lawyers);
//   const appointments = useSelector((state) => state.appointments.appointments);
//   const [lawyer, setLawyer] = useState(null);

//   useEffect(() => {
//     // Find the lawyer by ID
//     const selectedLawyer = lawyers.find((lawyer) => lawyer.id === parseInt(id));
//     setLawyer(selectedLawyer);
//   }, [id, lawyers]);

//   const handleBookAppointment = (time) => {
//     // Check if the time slot is already booked
//     const isBooked = appointments.some(
//       (appointment) =>
//         appointment.lawyerId === lawyer.id && appointment.time === time
//     );

//     if (isBooked) {
//       alert("Appointment not available");
//     } else {
//       dispatch(
//         bookAppointment({
//           id: new Date().getTime(), // Generate a unique ID
//           lawyerId: lawyer.id,
//           time: time,
//           clientName: "Anonymous Client", // Change as per your requirement
//           cost: lawyer.costPerAppointment,
//         })
//       );
//       alert("Appointment booked successfully!");
//     }
//   };

//   // if (!lawyer) {
//   //   return <div className="container my-4">Loading...</div>;
//   // }

//   return (
//     <div className="container my-4">
//       <h1>{lawyer.name}</h1>
//       <p>Specialty: {lawyer.specialty}</p>
//       <p>Cost per Appointment: ${lawyer.costPerAppointment}</p>
//       <h2>Available Slots</h2>
//       <div className="d-flex flex-wrap">
//         {lawyer.availability.map((time, index) => (
//           <button
//             key={index}
//             className="btn btn-outline-primary m-2"
//             onClick={() => handleBookAppointment(time)}
//           >
//             {time}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LawyerDetailsPage;



// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { bookAppointment } from "../features/appointments/appointmentSlice";

// const LawyerDetailsPage = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const lawyers = useSelector((state) => state.lawyers.lawyers);
//   const appointments = useSelector((state) => state.appointments.appointments);
//   const [lawyer, setLawyer] = useState(null);
//   const [lawyerAppointments, setLawyerAppointments] = useState([]);

//   useEffect(() => {
//     // Find the lawyer by ID
//     const selectedLawyer = lawyers.find((lawyer) => lawyer.id === parseInt(id));
//     setLawyer(selectedLawyer);

//     // Filter appointments for this lawyer
//     const filteredAppointments = appointments.filter(
//       (appointment) => appointment.lawyerId === parseInt(id)
//     );
//     setLawyerAppointments(filteredAppointments);
//   }, [id, lawyers, appointments]);

//   const handleBookAppointment = (time) => {
//     // Check if the time slot is already booked
//     const isBooked = appointments.some(
//       (appointment) =>
//         appointment.lawyerId === lawyer.id && appointment.time === time
//     );

//     if (isBooked) {
//       alert("Appointment not available");
//     } else {
//       dispatch(
//         bookAppointment({
//           id: new Date().getTime(), // Generate a unique ID
//           lawyerId: lawyer.id,
//           time: time,
//           clientName: "Anonymous Client", // Change as per your requirement
//           cost: lawyer.costPerAppointment,
//         })
//       );
//       alert("Appointment booked successfully!");
//     }
//   };

//   if (!lawyer) {
//     return <div className="container my-4">Loading...</div>;
//   }

//   return (
//     <div className="container my-4">
//       <h1>{lawyer.name}</h1>
//       <p>Specialty: {lawyer.specialty}</p>
//       <p>Cost per Appointment: ${lawyer.costPerAppointment}</p>
      
//       <h2>Available Slots</h2>
//       <div className="d-flex flex-wrap">
//         {lawyer.availability.map((time, index) => (
//           <button
//             key={index}
//             className="btn btn-outline-primary m-2"
//             onClick={() => handleBookAppointment(time)}
//           >
//             {time}
//           </button>
//         ))}
//       </div>

//       <h2 className="mt-4">Appointment History</h2>
//       {lawyerAppointments.length > 0 ? (
//         <ul className="list-group">
//           {lawyerAppointments.map((appointment) => (
//             <li key={appointment.id} className="list-group-item">
//               <strong>Time:</strong> {appointment.time} | 
//               <strong> Client:</strong> {appointment.clientName} | 
//               <strong> Cost:</strong> ${appointment.cost}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No appointments yet.</p>
//       )}
//     </div>
//   );
// };

// export default LawyerDetailsPage;


import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const LawyerDetailsPage = () => {
  const { id } = useParams();
  const appointments = useSelector((state) => state.appointments.appointments);

  // Filter appointments by lawyerId matching the route parameter
  const filteredAppointments = appointments.filter(
    (appointment) => appointment.lawyerId === parseInt(id)
  );

  return (
    <div className="container my-4">
      <h1>Appointments for Lawyer ID: {id}</h1>
      {filteredAppointments.length > 0 ? (
        <ul className="list-group">
          {filteredAppointments.map((appointment) => (
            <li key={appointment.id} className="list-group-item">
              <strong>Time:</strong> {appointment.time} | 
              <strong> Client:</strong> {appointment.clientName} | 
              <strong> Cost:</strong> ${appointment.cost}
            </li>
          ))}
        </ul>
      ) : (
        <p>No appointments available for this lawyer.</p>
      )}
    </div>
  );
};

export default LawyerDetailsPage;
