import { createSlice } from "@reduxjs/toolkit";


const modalControl = createSlice({
    name: 'modalStates',
    initialState: {
        categories: false,
        products: false,
    },
    reducers: {
        categoriesElevate: (state) => {
            state.categories = !state.categories;
        },
        productsElevate: (state) => {
            state.products = !state.products;
        }
    },
});


export const {categoriesElevate, productsElevate} = modalControl.actions;
export default modalControl.reducer