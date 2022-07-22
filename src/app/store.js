import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/userRedux/authSlice';
import cartReducer from '../features/cartRedux/cartSlice';
import foodReducer from '../features/foods/foodSlice';
import orderReducer from '../features/ordersCheckoutRedux/orderSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    authoslice:authReducer,
    cart:cartReducer,
    myfoods:foodReducer,
    myorderslice:orderReducer
    
  },
});
