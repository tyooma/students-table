import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { StudentsState } from "../interfaces/interfaces";

const initialState: StudentsState = {
  students: [],
  loading: "idle",
};

export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async ({
    searchTerm = "",
    skip = 20,
    limit = 20,
  }: {
    searchTerm?: string;
    skip?: number;
    limit?: number;
  }) => {
    try {
      const response = await axios.get("/students", {
        params: { searchTerm, limit, skip },
      });

      return response.data.students;
    } catch (error) {
      throw error;
    }
  }
);

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.students = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

export default studentsSlice.reducer;
