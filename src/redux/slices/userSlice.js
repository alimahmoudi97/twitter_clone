import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isLoading: null,
    error: null,
    isAuthenticated: false,
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    message: null,
    profileUser: null,
    followState: null,
    followers: null,
    userList:[]
}

export const userRegister = createSlice({
    name: "userRegister",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
        loginSuccess: (state, { payload }) => {
            state.access = localStorage.setItem('access', payload.access);
            state.refresh = localStorage.setItem('refresh', payload.refresh);
            state.isAuthenticated = true;
            state.message="login success!."
            console.log(payload.access);
            console.log("access is ", localStorage.getItem('access'));
        },
        userSuccess: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        profileUserSuccess: (state, action) => {
            state.profileUser = action.payload;
            state.isAuthenticated = true;
        },
        followedUnfollowed: (state, { payload }) => {
            state.followState = payload.state;
            state.followers = payload.followers;
            state.profileUser.i_follow = payload.follow;
            state.profileUser.followers = payload.followers
        },
        removeMessage: (state) => {
            state.message = null;
        },
        userRegisterSuccess: (state, {payload}) => {
            state.message = "Successfully registered!.";
            state.isAuthenticated = true;
            console.log(`authenticate:${state.isAuthenticated}`)
        },
        userFail: (state, { payload }) => {
            state.user = null;
            state.error = payload;
            state.isAuthenticated = false;
        },
        authSuccess: (state) => {
            state.isAuthenticated = true;
            state.access = localStorage.setItem('access', state.access);
            state.refresh = localStorage.setItem('refresh', state.refresh);
        },
        recommendUser: (state, { payload }) => {
            state.recommendUser = payload;
        },
        followuserList: (state, { payload }) => {
            state.userList = payload;
        },
        followRecommendUser: (state, { payload }) => {
            const user = state.recommendUser.find(user => user.username === payload.username);
            user.i_follow = payload.follow;
        },
        followList: (state, { payload }) => {
            state.userList = state.userList.filter(user => user.username !== payload)
        },
        setMeta: (state, { payload }) => {
            state.meta = payload;
        },
        logMeOut: (state) => {
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            state.user = null;
            state.access = null;
            state.refresh = null;
            state.isAuthenticated = false;
            state.message = "successfully logout!.";
        },
        loadedMoreUser: (state, { payload }) => {
            state.userList.push(...payload);
        },
    },
});

export const {
    setLoading,
    loginSuccess,
    followList,
    userSuccess,
    followuserList,
    loadedMoreUser,
    authFail,
    userFail,
    setMeta,
    removeMessage,
    authSuccess,
    userRegisterSuccess,
    logMeOut,
    profileUserSuccess,
    refreshSuccess,
    followedUnfollowed,
    recommendUser,
    followRecommendUser
} = userRegister.actions;

export default userRegister.reducer;