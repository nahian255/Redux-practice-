import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/features/counter/counterSlice'
import { realApi } from './features/dataFacth/realApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { cartApi } from './features/dataFacth/CartApi';

export const store = configureStore({
    reducer: {
        // counter: counterReducer,
        [realApi.reducerPath]: realApi.reducer,
        [cartApi.reducerPath]: cartApi.reducer
    },


    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(realApi.middleware),

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(realApi.middleware, cartApi.middleware), // Add cartApi m
});

setupListeners(store.dispatch)
