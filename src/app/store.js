import { configureStore } from "@reduxjs/toolkit";
import lawyerReducer from "../features/lawyers/lawyerSlice";
import appointmentReducer from "../features/appointments/appointmentSlice";

const store = configureStore({
  reducer: {
    lawyers: lawyerReducer,
    appointments: appointmentReducer,
  },
});

export default store;
