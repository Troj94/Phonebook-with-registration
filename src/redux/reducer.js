import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'phonebook',
  initialState: { filter: '' },
  reducers: {
    changeFilter(state, actions) {
      state.filter = actions.payload;
    },
  },
});

export const phonebookFilter = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
export const fetchContacts = state => state.contacts;
export const getFilter = state => state.phonebookFilter.filter;
