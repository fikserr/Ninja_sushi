import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basket: []
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    
    setProducts(state, action) {
      const existingItem = state.basket.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.basket.push({...action.payload,quantity:1})
      } else {
        state.basket
      }
    },
    deleteProducts(state,action){
      state.basket = state.basket.filter(item => item.id !== action.payload)
    },
    addOne(state,action) {
      state.basket.forEach(item => {
        if (item.id === action.payload ) {
          item.quantity++ ;
        }
      });
    },
    removeOne(state,action) {
      state.basket.forEach(item => {
        if (item.id === action.payload && item.quantity > 1) {
          item.quantity-- ;
        }
      });
    },
    
  },
});

export const { setProducts,deleteProducts,addOne,removeOne } = basketSlice.actions;

export default basketSlice.reducer;


