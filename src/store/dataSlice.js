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
    detailId: [],
};

const dataSlice = createSlice({
    name: "data",
    initialState: initialState,
    reducers: {
        sendDetail(state,action){
            const product = state.products.filter(item =>  action.payload == item.id);
            state.detailId.push(product)
        },
    }, 
    extraReducers: (builder) => {
        builder
            .addCase(getData.fulfilled, (state, action) => {
                state.news = action.payload.news;
                state.products = action.payload.products;
            })
            .addCase(getData.rejected, (state, action) => {
                state.error = action.error.message;
            });
    }
});

export const { sendDetail } = dataSlice.actions;

export default dataSlice.reducer;
