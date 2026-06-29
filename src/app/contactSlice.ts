import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi.ts";

export interface Contact {
  id: string;
  img: string;
  mail: string;
  number: number;
  name: string;
}

interface ContactsState {
  contacts: Contact[];
  loading: boolean;
  error: boolean;
}

const initialState: ContactsState = {
  contacts: [],
  loading: false,
  error: false,
};

export const fetchContact = createAsyncThunk(
  "contacts/fetchAll", 
  async () => {
  const response = await axiosApi.get<Record<string, Contact>>("/contacts.json");
  const data = response.data;

  if (!data){
    return [];
  }

  const result = Object.keys(data).map((id) => {
    return {
      id,
      ...data[id],
    };
  });  

  return result;
});

export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async (id: string) => {
    await axiosApi.delete<Record<string, Contact>>(`/contacts/${id}.json`);
    return id;
  }
  );

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchContact.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchContact.fulfilled, (state, action) => {
      state.contacts = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchContact.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(deleteContact.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.contacts = state.contacts.filter(c => c.id !== action.payload)
      state.loading = false;
    });

    builder.addCase(deleteContact.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const contactReducer = contactSlice.reducer;
export const {  } = contactSlice.actions;
