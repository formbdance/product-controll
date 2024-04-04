import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../api/index';

export const saveProduct = createAsyncThunk('products/saveProduct', api.saveProduct);
export const deleteProduct = createAsyncThunk('products/deleteProduct', api.deleteProduct);

const productsSlice = createSlice({
    name: 'productsState',
    initialState: {
        productCreated: false,
        error: null,
        productDeleted: false,
        errorDeleted: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(saveProduct.pending, (state) => {
            state.productCreated = false
        })
        .addCase(saveProduct.fulfilled, (state,action) => {
            console.log('create product', action.payload)
            state.productCreated = true
        })
        .addCase(deleteProduct.pending, (state) => {
            state.productDeleted = false;
        })
        .addCase(deleteProduct.fulfilled, (state) => {
            state.productDeleted = true;
        })
    }

})

export const regState = (state) => state.productsSlice;
export default productsSlice.reducer;