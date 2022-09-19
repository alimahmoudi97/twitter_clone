import { configureStore } from '@reduxjs/toolkit';
import  tweetReducer  from './slices/tweetSlice';
import userRegister from './slices/userSlice';

const store = configureStore({
    reducer: {
        userReducer: userRegister,
        tweetReducer:tweetReducer,
    },
})

export default store;