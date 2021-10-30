import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registration = createAsyncThunk(
  'auth/registration',
  async (newUser, { rejectWithValue }) => {
    try {
      const data = await axios.post('/users/signup', newUser);
      token.set(data.data.token);
      return data;
    } catch (error) {
      Notiflix.Notify.failure('Something wrong, try again');
      return rejectWithValue(error);
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const data = await axios.post('/users/login', user);
      token.set(data.data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (user, { rejectWithValue }) => {
    try {
      return await axios.get('/users/current', user);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
