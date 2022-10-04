import {
    setLoading,
    commentSuccess,
    commentAdded,
    commentEdite,
    setMeta,
    replyAdded,
    commentDeleted,
    loadMoreComment,
    commentUploading,
    likeUnlikeComment,
} from "./../slices/CommentSlice";
import { axiosInstance } from './../../index';
import { setMessage } from "../slices/tweetSlice";
import axios from "axios";
const url = "https://twitterapis.herokuapp.com/";

export const tweet_comments = (id) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        if (localStorage.getItem("access")) {
            const res = await axiosInstance.get(`${url}tweets/comments/${id}/`, {
                headers: {
                Authorization: `JWT ${localStorage.getItem('access')}`
            }
            });
            dispatch(setLoading(false));
            dispatch(setMeta(res.data.meta));
            dispatch(commentSuccess(res.data.data));
        } else {
            await axios.get(`${url}tweets/comments/${id}/`);
        }
    } catch (error) {
        
    }
};
export const load_more_comment = (id, nextPage) => async (dispatch) => {
    try {
        const res = await axios.get(
            `tweets/comments/${id}/?page=${nextPage}`
        );
        dispatch(loadMoreComment(res.data.data));
        dispatch(setMeta(res.data.meta));
    } catch (error) {
        
    }
};

export const addComment = (id, body, comid, reply = false) => async (dispatch) => {
    dispatch(commentUploading(true));
    try {
        if (reply) {
            const res = await axiosInstance.post(`tweets/comments/reply/${id}/`, {
                body,
                comId: comid,
            },{
                headers: {
                    Authorization: `JWT ${localStorage.getItem('access')}`
                }
            });
            console.log(res.data);
            dispatch(commentUploading(false));
            dispatch(replyAdded(res.data));
            dispatch(setMessage("Reply Added!"));
        } else {
            const res = await axiosInstance.post(`tweets/comments/${id}/`, {
                body,
            }, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('access')}`
                }
            });
            // console.log(res.data);
            dispatch(commentUploading(false));
            dispatch(commentAdded(res.data));
            dispatch(setMessage("Reply Added!"));
        }
    } catch (error) {
        dispatch(commentUploading(false));
    };
};

export const delComment = (id) => async (dispatch) => {
    try {
        await axiosInstance.delete(`tweets/comment_detail/${id}/`);
        dispatch(commentDeleted(id));
        dispatch(setMessage("Reply Deleted!"));
    } catch (error) {
        dispatch(setMessage("Something went wrong!"));
    }
};

export const likeComment = (id) => async (dispatch) => {
    try {
        const res = await axiosInstance.post(`tweets/love/like-unlike-comment/`, {
            pk: id,
        });
        dispatch(likeUnlikeComment({ ...res.data, id: parseInt(id) }));
    } catch (error) {
        dispatch(setMessage('Something went wrong!'));
    }
};

export const editeComment = (id, body) => async (dispatch) => {
    try {
        await axiosInstance.put(`tweets/comment_detail/${id}/`, {
            body,
            isEdited: true,
        });
        dispatch(commentEdite({ id, body }));
        dispatch(setMessage("Reply Updated!"));
    } catch (error) {
        dispatch(setMessage("Something went wrong!"));
    }
};