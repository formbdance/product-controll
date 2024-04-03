import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../api/index';

export const saveProduct = createAsyncThunk('products/saveProduct', api.saveProduct);

const productsSlice = createSlice({
    name: 'productsState',
    initialState: {
        productCreated: false,
        error: null,
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
    }

})

export const regState = (state) => state.productsSlice;
export default productsSlice.reducer;