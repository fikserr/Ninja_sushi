import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basket: []
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    
    setProducts(state, action) {
      state.basket.push({...action.payload,quantity:1,like:false})
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
    setLike(state,action){
      state.basket = state.basket.map(item => item.id === action.payload ? {...item, like: !item.like} : {...item});
    },
    
  },
});

export const { setProducts,deleteProducts,addOne,removeOne,setLike } = basketSlice.actions;

export default basketSlice.reducer;


