import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../api/index';

export const createClient = createAsyncThunk('client/createClient', api.createClient);
export const deleteClient = createAsyncThunk('client/deleteClient', api.deleteClient);
export const getClient = createAsyncThunk('client/getClient', api.getClient);

const clientSlice = createSlice({
    name: 'clientState',
    initialState: {
        clientCreateStatus: false,
        errorCreation: null,
        clientLoaded: false,
        clientError: false,
        clientCategories: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(createClient.pending, (state) => {
            state.clientCreateStatus = false
        })
        .addCase(createClient.fulfilled, (state,action) => {
            console.log('create ', action.payload)
            state.clientCreateStatus = true
        })
        .addCase(getClient.pending, (state) => {
            state.clientLoaded = false;
            state.clientError = false;
        })
        .addCase(getClient.fulfilled, (state, action) => {
            state.clientLoaded = true;
            state.clientCategories = action.payload[0].categories
            console.log(action.payload[0].categories)
        })
        .addCase(getClient.rejected, (state) => {
            state.clientLoaded = false;
            state.clientError = true;
        })
    }

})

export const regState = (state) => state.clientSlice;
export default clientSlice.reducer;