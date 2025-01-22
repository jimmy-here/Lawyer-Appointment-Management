import { createSlice } from "@reduxjs/toolkit";

const appointmentSlice = createSlice({
  name: "appointments",
  initialState: {
    appointments: [], // Array of appointment objects
  },
  reducers: {
    bookAppointment(state, action) {
      // Add appointment
      state.appointments.push(action.payload);
    },
    cancelAppointment(state, action) {
      // Remove appointment by ID
      state.appointments = state.appointments.filter(
        (appointment) => appointment.id !== action.payload
      );
    },
    setAppointments(state, action) {
      state.appointments = action.payload;
    },
  },
});

export const { bookAppointment, cancelAppointment, setAppointments } =
  appointmentSlice.actions;
export default appointmentSlice.reducer;
