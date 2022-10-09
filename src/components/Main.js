import React,{useState,useRef,useEffect,createContext} from 'react';
import Trends from './Trends';
import SidebarMenu from './SidebarMenu';
import {Outlet, Route,Routes, useNavigate} from 'react-router-dom';
import Search from './Search';
import { useSelector } from 'react-redux';

export const MessagePage = createContext({
    value: false,
    page:'messages'
});

function Main() {
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.userReducer.isAuthenticated);
    const [isMessagePage, setIsMessagePage] = useState({
        value: false,
        page:''
    })
    useEffect(() => {
        console.log("is not authenticate!");
        if (!isAuthenticated) {
            navigate("/register");
            console.log("is not authenticate!");
        }
    }, [isAuthenticated, navigate]);
    return (
        <MessagePage.Provider value={{isMessagePage,setIsMessagePage}}>
        <>
            <div className='home-container'>
                
                    <div className='sidebar-menu'>
                        <SidebarMenu/>
                    </div>
            <div className='feed-conatiner'>
                <Outlet/>
            </div>
            {
                ((isMessagePage.page!=='messages')) &&
                <div className='trend-sidebar'>
                    <Search/>
                    <Trends/>
                </div>
            }
        </div>
        </>
        </MessagePage.Provider>
    )
}

export default Main;