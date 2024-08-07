import { createSlice } from '@reduxjs/toolkit';

import { IFiltersState } from '../utils/types';

const initialState: IFiltersState = {
  filter: 'all',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (_, action) => {
      return { filter: action.payload };
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
