import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice.js';
 
export const store = configureStore({
    reducer:{user:userReducer},
    devTools: process.env.NODE_ENV !== 'production',
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck:false,
    }),
});