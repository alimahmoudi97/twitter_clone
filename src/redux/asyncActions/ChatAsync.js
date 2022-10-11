import {
    getMessage,
    addChatRoom,
    moreMessage,
    setLoading,
    setMeta
} from "../slices/ChatSlice";

import { axiosInstance } from "../../index";

export const getChatMessage = (username) => async (dispatch) => {
    try {
        const res = await axiosInstance.get(`chats/create/${username}`);
        dispatch(getChatMessage(res.data.data));
        dispatch(setMeta(res.data.meta));
        console.log("getChatMessage");
    } catch (error) {
        console.log(error);
    }
};
export const getRooms = (other_user) => async (dispatch) => {
    try {
        if (other_user) {
            const res = await axiosInstance.post("chats/get_rooms/", {
                other_user: other_user,
            }, {
                      headers: {
                Authorization: `JWT ${localStorage.getItem('access')}`
            }  
            });
            dispatch(addChatRoom(res.data));
        } else {
            const res = await axiosInstance.get("chats/get_rooms/", {
                      headers: {
                Authorization: `JWT ${localStorage.getItem('access')}`
            }  
            });
            dispatch(addChatRoom(res.data));
        }
    } catch (error) {
        dispatch(setLoading(false));
    }
};

export const loadMoreMessage = (nextPage) => async (dispatch) => {
    try {
        const res = await axiosInstance.get(nextPage, {
                  headers: {
                Authorization: `JWT ${localStorage.getItem('access')}`
            }  
        });
        dispatch(moreMessage(res.data.data));
        dispatch(setMeta(res.data.meta));
    } catch (error) {
        console.log(error);
    }
};