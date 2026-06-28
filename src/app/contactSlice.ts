import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi.ts";

interface Contact {
  id: string;
  img: string;
  mail: string;
  number: number;
  name: string
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

export const fetchContact = createAsyncThunk("contacts/fetchAll", async () => {
  const response = await axiosApi.get<Record<string, Contact>>("/contacts.json");
  const data = response.data;

  if (!data){
    return;
  }

  const result = Object.keys(data).map((id) => {
    return {
      id,
      ...data[id],
    };
  });  

  return result;
});

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
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
  },
});

export const contactReducer = contactSlice.reducer;
export const {  } = contactSlice.actions;
