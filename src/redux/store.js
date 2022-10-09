import { configureStore,combineReducers } from '@reduxjs/toolkit';
import  commentReducer from './slices/CommentSlice';
import  tweetReducer  from './slices/tweetSlice';
import userRegister from './slices/userSlice';
import chatReducer from './slices/ChatSlice';

const store = configureStore({
    reducer: {
        userReducer: userRegister,
        tweetReducer: tweetReducer,
        commentReducer: commentReducer,
        chatReducer:chatReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export default store;