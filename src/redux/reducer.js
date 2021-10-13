import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts } from 'redux/actions';
import { combineReducers } from 'redux';

const items = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [filterContacts]: (state, { payload }) => payload,
});

export const contacts = combineReducers({
  items,
  filter,
});
