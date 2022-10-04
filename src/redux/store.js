import { configureStore,combineReducers } from '@reduxjs/toolkit';
import  commentReducer from './slices/CommentSlice';
import  tweetReducer  from './slices/tweetSlice';
import userRegister from './slices/userSlice';

const store = configureStore({
    reducer: {
        userReducer: userRegister,
        tweetReducer: tweetReducer,
        commentReducer:commentReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export default store;