// import { configureStore } from "@reduxjs/toolkit";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import rootReducer from "./reducers";

// const persistConfig = {
//   key: "root",
//   storage,
// };

  
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
//     serializableCheck: false, // Tắt serializable check để tránh lỗi
//   }),
// });
// export const persistor = persistStore(store);

import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../pages/Cart/cartSlice';
import userSlice from '../components/Forms/LoginForm/userSlice';


const rootReducer = {
    cart: cartSlice,
    user: userSlice,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;