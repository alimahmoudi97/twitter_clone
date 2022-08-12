import { configureStore } from '@reduxjs/toolkit';

import userRegister from './slices/userSlice';


const store = configureStore({
    reducer: {
        userReducer:userRegister
    },
})

export default store;