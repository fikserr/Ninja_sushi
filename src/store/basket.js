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
  },
});

export const { setProducts } = basketSlice.actions;

export default basketSlice.reducer;
