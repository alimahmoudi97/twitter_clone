import { createSlice } from '@reduxjs/toolkit';
import TweetUser from '../components/TWEETUSER';

const initialState = {
    tweets:[],
};

export const TweetsUser = createSlice({
    name: 'tweets',
    initialState,
    reducers: {
        addTweet: (state,action) => {
            state.tweets.unshift(action.payload);
            // console.log(initialState);
        }
    }
})

export const { addTweet } = TweetsUser.actions;
export default TweetsUser.reducer;