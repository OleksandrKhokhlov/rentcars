import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars;
export const selectFilter = state => state.filter;
export const selectFavorites = state => state.favorite.addCars;

export const selectVisibleCars = createSelector(
  [selectCars, selectFilter],
  (cars, filter) => cars.filter(({ make }) => make?.includes(filter))
);

export const selectVisibleCarsFavorite = createSelector(
  [selectFavorites, selectFilter],
  (cars, filter) => cars.filter(({ make }) => make?.includes(filter))
);
