import { createSlice } from '@reduxjs/toolkit';

const carsSlice = createSlice({
  name: 'cars',
  initialState: [],

  reducers: {
    addCars(state, action) {
      return (state = action.payload);
    },
    loadMoreCars(state, action) {
      return (state = [...state, ...action.payload]);
    },
  },
});

export const carReducer = carsSlice.reducer;

export const { addCars, loadMoreCars } = carsSlice.actions;
