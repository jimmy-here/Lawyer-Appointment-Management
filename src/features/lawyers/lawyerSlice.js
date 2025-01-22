import { createSlice } from "@reduxjs/toolkit";

const lawyerSlice = createSlice({
  name: "lawyers",
  initialState: {
    lawyers: [], // Array of lawyer objects
  },
  reducers: {
    setLawyers(state, action) {
      state.lawyers = action.payload;
    },
  },
});

export const { setLawyers } = lawyerSlice.actions;
export default lawyerSlice.reducer;
