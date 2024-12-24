import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/features/counter/counterSlice'
import { realApi } from './features/dataFacth/realApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { cartApi } from './features/dataFacth/CartApi';
import cartReducer from '../redux/features/cartSlice/cartSlice'
import userReducer from './features/users/usersSlice'
import expenseReducer from './features/expenseTracker/expenseSlice'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
        users: userReducer,
        expense: expenseReducer,


        [realApi.reducerPath]: realApi.reducer,
        [cartApi.reducerPath]: cartApi.reducer
    },


    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(realApi.middleware),

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(realApi.middleware, cartApi.middleware), // Add cartApi m
});

setupListeners(store.dispatch)
