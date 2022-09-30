import React,{useState,useRef,useEffect} from 'react';
import Trends from './Trends';
import SidebarMenu from './SidebarMenu';
import {Outlet, Route,Routes, useNavigate} from 'react-router-dom';
import Search from './Search';
import { useSelector } from 'react-redux';

function Main() {
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.userReducer.isAuthenticated);
    useEffect(() => {
        console.log("is not authenticate!");
        if (!isAuthenticated) {
            navigate("/register");
            console.log("is not authenticate!");
        }
    }, [isAuthenticated, navigate]);
    return (
        <>
        <div className='home-container'>
            <div className='sidebar-menu'>
                <SidebarMenu/>
            </div>
            <div className='feed-conatiner'>
                <Outlet/>
            </div>
            {/* <Home/> */}
            <div className='trend-sidebar'>
                <Search/>
                <Trends/>
            </div>
        </div>
        </>
    )
}

export default Main;