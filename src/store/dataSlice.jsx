import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getData = createAsyncThunk('getData', async ()=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_DB_TOKEN}`
        }
        };   
         const data = await fetch('https://fayzullaev99.github.io/sushi-data/data.json',options)
         return data.json()

})


const initialState = {
    news: null,
    products:null
}

const dataSlice = createSlice(
    {
        name:"data",
        initialState:initialState,
        extraReducers:(builder)=>{
            builder.addCase(getData.fulfilled, (state, action)=>{
                state.news = action.payload
            })
        }
    }
)
export default dataSlice.reducer
