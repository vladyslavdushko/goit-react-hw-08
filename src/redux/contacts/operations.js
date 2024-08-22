import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { api } from '../../config/api';

axios.defaults.baseURL = 'https://connections-api.goit.global';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await api.get('/contacts');
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts',
  async (newContact, thunkAPI) => {
    try {
      const data = await api.post('/contacts', newContact);
      return data.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const data = await api.delete(`contacts/${id}`);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
