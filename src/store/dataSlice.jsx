import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// Pathni argument sifatida qabul qilish
export const getData = createAsyncThunk('getData', async (path) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        }
    };
    const response = await fetch(path, options)
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    return response.json()
})

const initialState = {
    news: null,
    products: null,
    error: null
}

const dataSlice = createSlice({
    name: "data",
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getData.fulfilled, (state, action) => {
                state.news = action.payload.news; // payload tarkibini news deb faraz qilaylik
                state.products = action.payload.products; // payload tarkibini products deb faraz qilaylik
            })
            .addCase(getData.rejected, (state, action) => {
                state.error = action.error.message;
            })
    }
})

export default dataSlice.reducer
