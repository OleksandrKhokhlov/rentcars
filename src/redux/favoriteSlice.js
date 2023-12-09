import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    addCars: [],
  },

  reducers: {
    addFavorite(state, action) {
      state.addCars.push(action.payload);
    },

    removeFavorite(state, action) {
      const index = state.addCars.findIndex(car => car.id === action.payload);
      state.addCars.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'favorites',
  storage,
};
export const favoriteReducer = persistReducer(
  persistConfig,
  favoritesSlice.reducer
);

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
