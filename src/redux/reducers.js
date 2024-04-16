import userSlice from "../components/Forms/LoginForm/userSlice";
import cartSlice from "../pages/Cart/cartSlice";
import { combineReducers } from '@reduxjs/toolkit';

 const rootReducer = combineReducers({
    user: userSlice,
    cart: cartSlice,
  }) ;
  export default rootReducer;