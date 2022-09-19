import { axiosInstance } from '../../index';
import axios from 'axios';
import {
    tweetSuccess,
    setLoading,
    tweetAdded,
    tweetFail,
    deletedMarkSuccess,
    deletedSuccess,
    tweetDetail,
    setUploading,
    likeUnlikeTweet,
    setMeta,
    setMessage,
    tweetMarkSuccess,
    loadedMore,
    resetData,
} from '../slices/tweetSlice';
const url = "https://twitterapis.herokuapp.com/";
export const load_tweet = () => async (dispatch) => {
    dispatch(setLoading(true));

    try {
        let res;
        if (localStorage.getItem("access")) {
            res = await axiosInstance.get(`tweets/explore/global/`);
        } else {
            res = await axios.get(`${url}tweets/explore/global/`);
        }
        dispatch(setLoading(false));
        dispatch(tweetSuccess(res.data.data));
        dispatch(setMeta(res.data.meta));
    } catch (error) {
        dispatch(setLoading(false));
    }
};

export const load_more = (pageLink) => async (dispatch) => {
    try {
        const res = await axios.get(`${pageLink}`);
        dispatch(loadedMore(res.data.data));
        dispatch(setMeta(res.data.data));
    } catch (error) {
        console.log(error)
    }
}

export const bookmark_list = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const res = await axiosInstance.get(`tweets/love/bookmarkList/`);
        dispatch(setLoading(false));

        dispatch(tweetMarkSuccess(res.data));
    } catch (error) {
        console.log(error);
    }
};

export const tweet_specific_user = (username) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const res = await axiosInstance.get(`tweets/specific/${username}/`);
        dispatch(setLoading(false));
        dispatch(tweetSuccess(res.data));
    } catch (error) {
        console.log(error);
    }
};

export const addTweet = (uploadData) => async (dispatch) => {
    dispatch(setUploading(true));
    try {
        const res = await axiosInstance.post(`tweets/`, uploadData, {
            headers: {
            Authorization: `JWT ${localStorage.getItem('access')}`
        }});
        dispatch(setUploading(false));
        dispatch(tweetAdded(res.data));
        dispatch(setMessage(`Tweet Added!`));
    } catch (error) {
        dispatch(tweetFail());
        console.log(error.response.data);
        dispatch(setMessage(`Somthing went Wrong!`));
    }
};

export const reTweet = (tweetId) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const res = await axiosInstance.post(`tweets/post/retweet/`, {
            tweetId: tweetId
        });
        dispatch(tweetAdded(res.data));
        dispatch(setMessage(`Re Tweeted !`));
    } catch (error) {
        dispatch(tweetFail());
        console.log(error.response.data);
        dispatch(setMessage(error.response.data.detail));
    }
};

export const deleteTweet = (pk, DeRetweet = false) => async (dispatch) => {
    try {
        await axiosInstance.delete(`tweets/${pk}`);
        dispatch(deletedSuccess(pk));
        if (DeRetweet) {
            dispatch(setMessage(`Retweet Removed!`));
        } else {
            dispatch(setMessage(`Tweet Deleted!`));
        }
    } catch (error) {
        dispatch(tweetFail());
        console.log(error);
        dispatch(setMessage(`somthing went wrong~`));
    }
};

export const editTweet = (id, title, isCheched) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const res = await axiosInstance.put(`tweets/${id}`, {
            title,
            is_private: isCheched,
            isEdited: true,
        });
        dispatch(setLoading(false));
        dispatch(tweetDetail(res.data));
        dispatch(setMessage(`Tweet Updated!`));
    } catch (error) {
        dispatch(tweetFail());
        console.log(error);
        dispatch(setMessage(`Somthing went wrong!`));
    }
};

export const likeTweet = (id) => async (dispatch) => {
    try {
        const res = await axiosInstance.post(`tweets/love/like-unlike/`, {
            pk: id
        });
        dispatch(likeUnlikeTweet({ ...res, id: id }));
    } catch (error) {
        console.log(error);
        dispatch(setMessage(`Somthing went wrong!`));
    }
};

export const bookmarkTweet = (id) => async (dispatch) => {
    try {
        const res = await axiosInstance.post(`tweets/love/bookmark/`, {
            pk: id,
        });

        if (res.data.bookmarked) {
            dispatch(setMessage(`Saved to Bookmark!`));
        } else {
            dispatch(setMessage(`Removed from Bookmark!`));
            dispatch(deletedMarkSuccess(id));
        }
    } catch (error) {
        console.log(error);
        dispatch(setMessage(`Somthing went wrong!`));
    }
};
export const resetDataTweet = () =>(dispatch) => {
    try {
        dispatch(resetData());
        console.log("Reset State");
    } catch (error) {
        console.log(error);
    }
}
// export const serachTweet = (query, isAuthenticated) => async (dispatch) => {
//     try {
//         if (query.lenght > 0) {
//             if (isAuthenticated) {
//                 const res = await axiosInstance.get(
//                     `tweets/search/custom/?search=${query}`
//                 );
//                 dispatch(setsearch(res.data));
//             } else {
//                 const res = await axios.get(`tweets/search/custom/?search=${query}`);
//                 dispatch(setsearch(res.data));
//             }
//         } else {
//             dispatch(setsearch([]));
//         }
//     } catch (error) {
//         console.log(error);
//         dispatch(setMessage(`Somthing went wrong!`));
//     }
// };