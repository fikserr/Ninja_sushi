import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getData = createAsyncThunk('data/getData', async (path) => {
    try {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
            }
        };
        const response = await fetch(path, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        throw error;
    }
});

const initialState = {
    news: null,
    products: null,
    error: null,
    basket: [],
};

const dataSlice = createSlice({
    name: "data",
    initialState: initialState,
    reducers: {}, 
    extraReducers: (builder) => {
        builder
            .addCase(getData.fulfilled, (state, action) => {
                state.news = action.payload.news;
                state.products = action.payload.products;
                // Update basket based on payload or any other logic
                if (action.payload.id) {
                    state.basket = state.products.filter(item => item.id === action.payload.id);
                }
            })
            .addCase(getData.rejected, (state, action) => {
                state.error = action.error.message;
            });
    }
});

export default dataSlice.reducer;
