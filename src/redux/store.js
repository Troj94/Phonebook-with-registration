import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import * as phonebookReducer from 'redux/phonebook/phonebook-reducer';
import * as authReducer from 'redux/auth/auth-reducer';

const middleware = getDefaultMiddleware => {
  return [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          'auth/registration/fulfilled',
          'auth/registration/rejected',
          'auth/login/fulfilled',
          'auth/login/rejected',
          'auth/refresh/fulfilled',
          'auth/refresh/rejected',
          'auth/getCurrentUser/fulfilled',
        ],
      },
    }),
  ];
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer.authReducer),
    phonebook: phonebookReducer.phonebookReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export const persistor = persistStore(store);
