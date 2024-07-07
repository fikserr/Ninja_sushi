import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basket: [],
  total: 0,
};

const calculateTotalPrice = (basket) => {
  return basket.reduce((total, item) => total + item.price, 0);
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
      state.total = calculateTotalPrice(state.basket);
    },
    deleteProducts(state,action){
      state.basket = state.basket.filter(item => item.id !== action.payload)
      state.total = calculateTotalPrice(state.basket);
    },
    addOne(state, action) {
      state.basket = state.basket.map(item => {
        if (item.id === action.payload) {
          const newQuantity = item.quantity + 1;
          return { ...item, quantity: newQuantity, price: item.price / item.quantity * newQuantity };
        }

        return item;
      });
      state.total = calculateTotalPrice(state.basket);

    },
    removeOne(state, action) {
      state.basket = state.basket.map(item => {
        if (item.id === action.payload && item.quantity > 1) {
          const newQuantity = item.quantity - 1;
          return { ...item, quantity: newQuantity, price: item.price / item.quantity * newQuantity };
        }
        return item;
      });
      state.total = calculateTotalPrice(state.basket);
    },
    
  },
});

export const { setProducts,deleteProducts,addOne,removeOne } = basketSlice.actions;

export default basketSlice.reducer;


