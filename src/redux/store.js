import { configureStore } from '@reduxjs/toolkit';
import { phonebookApi } from 'redux/api';
import { phonebookFilter } from 'redux/reducer';

const middleware = getDefaultMiddleware => {
  if (process.env.NODE_ENV === 'development') {
    return [...getDefaultMiddleware(), phonebookApi.middleware];
  }
  return [...getDefaultMiddleware(), phonebookApi.middleware];
};

const store = configureStore({
  reducer: {
    [phonebookApi.reducerPath]: phonebookApi.reducer,
    phonebookFilter,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export { store };
