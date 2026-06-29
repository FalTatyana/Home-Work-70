import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi.ts";
import { toast } from "react-toastify";

export interface Contact {
  id: string;
  img: string;
  mail: string;
  number: string;
  name: string;
}

interface ContactsState {
  contacts: Contact[];
  loading: boolean;
}

const initialState: ContactsState = {
  contacts: [],
  loading: false,
};

export const fetchContact = createAsyncThunk("contacts/fetchAll", async () => {
  const response = await axiosApi.get<Record<string, Contact>>(
    "/contacts.json"
  );
  const data = response.data;

  if (!data) {
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
    await axiosApi.delete(`/contacts/${id}.json`);
    return id;
  }
);

export const addContact = createAsyncThunk(
  "contact/addContact",
  async (contact: Omit<Contact, "id">) => {
    await axiosApi.post(`/contacts.json`, contact);
    return contact;
  }
);

export const editContact = createAsyncThunk(
  "contact/editContact",
  async (contact: Contact) => {
    const { id, ...contactData } = contact;

    await axiosApi.put(`/contacts/${id}.json`, contactData);

    return contact;
  }
);

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
    });
    builder.addCase(deleteContact.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.contacts = state.contacts.filter((c) => c.id !== action.payload);
      state.loading = false;
      toast.info("Success deleted");
    });
    builder.addCase(deleteContact.rejected, (state) => {
      state.loading = false;
      toast.error("Success Denied");
    });
    builder.addCase(addContact.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addContact.fulfilled, (state) => {
      state.loading = false;
      toast.success("Added new contact");
    });
    builder.addCase(addContact.rejected, (state) => {
      state.loading = false;
      toast.error("Success Denied");
    });
    builder.addCase(editContact.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editContact.fulfilled, (state, action) => {
      state.loading = false;

      state.contacts = state.contacts.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );

      toast.success("Contact updated");
    });
    builder.addCase(editContact.rejected, (state) => {
      state.loading = false;
      toast.error("Success Denied");
    });
  },
});

export const contactReducer = contactSlice.reducer;
export const {} = contactSlice.actions;
