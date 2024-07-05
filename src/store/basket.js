import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basket: []
};

const basketSlice = createSlice({
  name: 'basket',
  initialState: initialState,
  reducers: {
    
    setProducts(state, action) {
      state.basket.push({...action.payload,quanity:1,like:false})
    },
    deleteProducts(state,action){
      state.basket = state.basket.filter(item => item.id !== action.payload)
    },
    addOne(state,action) {
      state.forEach(item => {
        if (item.id === action.payload && item.quantity > 1) {
          item.quantity += 1;
        }
      });
    },
});

export const { setProducts,deleteProducts,addOne } = basketSlice.actions;

export default basketSlice.reducer;
