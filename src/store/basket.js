// store/dataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basket: []
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    
    setProducts(state, action) {
      state.basket.push({...action.payload,quanity:1,like:false})
    },
    deleteProducts(state,action){

    },
  },
});

export const { setProducts,deleteProducts } = basketSlice.actions;

export default basketSlice.reducer;
