import React, { useContext, useState } from "react";
import './Navbar.css';
import {assets} from '../../assets/assets';
import {Link, useNavigate} from 'react-router-dom';
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
const Navbar=({setshowLogin})=>{

    const [menu,setMenu]=useState("Home");

    const {getTotalCartAmount,token,setToken}=useContext(StoreContext);
     
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }

    return(
        <>
        <div className="navbar">
        <h1>Food App</h1>   
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("Home")}className={menu==="Home"?"active":""}>Home</Link>
            <a href="#explore-menu" onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
            <a href="#footer" onClick={()=>setMenu("Contact-us")} className={menu==="Contact-us"?"active":""}>Contact-us</a>
        </ul>
        <div className="navbar-right">
            <div className="navbar-search-icon">
                <Link to="/cart"><img src={assets.basket_icon} alt=""/></Link>
                <div className="dot"></div>
            </div>
            {!token? <button onClick={()=>setshowLogin(true)}>Sign-in</button>
            :<div className="navbar-profile">
             <img src={assets.profile_icon} alt=""/>
             <ul className="nav-profile-dropdown">
                <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon}/>Orders</li>
                <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
             </ul>
            </div>}
        </div>
        </div>
        </>
    )
}
export default Navbar;