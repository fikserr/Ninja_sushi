// store/dataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    basket: [],
  },
  reducers: {
    
    setProducts(state, action) {
      console.log(state.basket);
      state.basket = action.payload.id;
    },
  },
});

export const { setProducts } = basketSlice.actions;

export default basketSlice.reducer;
