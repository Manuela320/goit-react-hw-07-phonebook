import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api';

// Obținerea contactelor (GET)
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/');
      return response.data; // Returnează lista de contacte
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Adăugarea unui contact (POST)
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const response = await api.post('/', newContact);
      return response.data; // Returnează contactul adăugat
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Ștergerea unui contact (DELETE)
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      await api.delete(`/${contactId}`);
      return contactId; // Returnează ID-ul contactului șters
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);