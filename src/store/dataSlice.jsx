import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getData = createAsyncThunk('getData', async ()=>{

         const data = await fetch('../../data.json')
         return data.json()

})


const initialState = {
    upcomingMovies:null,
    upcomingSeries:null,
    popularMovies:null,
    popularSeries:null,
    rating:null,
    search:null,

}

const dataSlice = createSlice(
    {
        name:"data",
        initialState:initialState,
        extraReducers:(builder)=>{
            builder.addCase(getData.fulfilled, (state, action)=>{
                state.upcomingMovies = action.payload
            })
        }
    }
)
export default dataSlice.reducer
