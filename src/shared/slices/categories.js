import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../api/index';

export const saveCategory = createAsyncThunk('category/saveCategory', api.saveCategory);

const categoriesSlice = createSlice({
    name: 'categoriesState',
    initialState: {
        categoryStatus: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(saveCategory.pending, (state) => {
            state.categoryStatus = false
        })
        .addCase(saveCategory.fulfilled, (state,action) => {
            console.log('create ', action.payload)
            state.categoryStatus = true
        })
    }

})

export const regState = (state) => state.categoriesSlice;
export default categoriesSlice.reducer;