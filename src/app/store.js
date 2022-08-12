import { configureStore } from '@reduxjs/toolkit';
import TweetsUser from './TweetsUserSlice';


export const store = configureStore({
    reducer: {
        tweet:TweetsUser,
    },
});