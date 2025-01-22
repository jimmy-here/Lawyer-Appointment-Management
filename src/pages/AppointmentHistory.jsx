// import React from "react";
// import { useSelector } from "react-redux";

// const AppointmentHistory = () => {
//   const appointments = useSelector((state) => state.appointments.appointments);
//   const lawyers = useSelector((state) => state.lawyers.lawyers);

//   const getLawyerName = (lawyerId) => {
//     const lawyer = lawyers.find((lawyer) => lawyer.id === lawyerId);
//     return lawyer ? lawyer.name : "Unknown Lawyer";
//   };

//   return (
//     <div className="container my-4">
//       <h1>Appointment History</h1>
//       {appointments.length === 0 ? (
//         <p>No appointments found.</p>
//       ) : (
//         <table className="table">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Lawyer</th>
//               <th>Time</th>
//               <th>Client</th>
//               <th>Cost</th>
//             </tr>
//           </thead>
//           <tbody>
//             {appointments.map((appointment, index) => (
//               <tr key={appointment.id}>
//                 <td>{index + 1}</td>
//                 <td>{getLawyerName(appointment.lawyerId)}</td>
//                 <td>{appointment.time}</td>
//                 <td>{appointment.clientName}</td>
//                 <td>${appointment.cost}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AppointmentHistory;


import React from "react";
import { useSelector } from "react-redux";
import AppointmentCard from "../components/AppointmentCard";

const AppointmentHistory = () => {
  const appointments = useSelector((state) => state.appointments.appointments);
  const lawyers = useSelector((state) => state.lawyers.lawyers);

  const getLawyerName = (lawyerId) => {
    const lawyer = lawyers.find((lawyer) => lawyer.id === lawyerId);
    return lawyer ? lawyer.name : "Unknown Lawyer";
  };

  return (
    <div className="container my-4">
      <h1>Appointment History</h1>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <div className="row">
          {appointments.map((appointment) => (
            <div className="col-md-4" key={appointment.id}>
              <AppointmentCard
                appointment={{
                  ...appointment,
                  lawyerName: getLawyerName(appointment.lawyerId),
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppointmentHistory;
