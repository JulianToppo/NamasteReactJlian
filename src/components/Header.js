import {lazy, useContext, useState } from 'react';
import { Link } from "react-router-dom";
import userContext from "../utils/context";
import { useDispatch, useSelector } from 'react-redux';
import appStore from '../utils/appStore';


const Header = () => {
    const [sessionState,setSessionState]=useState("login")

    const onClickSessionStateHandler=(e)=>{
        console.log("clicked")
        if(sessionState==="login"){
            
            setSessionState("logout");
            
        }else{
            setSessionState("login")
            
        }
    }

    let userLoggedIn=useContext(userContext);

    //console.log(userLoggedIn)

    //let dispatch=useDispatch();

    const  cart=useSelector((store)=>store.cart.items)

    console.log("cart",cart)



    return (
        <div className="header-container flex justify-around bg-slate-200">
            <div className="logo-container w-20">
                <img className="logo" src="https://png.pngtree.com/element_our/png/20180930/food-icon-design-vector-png_120564.jpg"></img>
            </div>

            <div className="nav-items flex items-center">
                <ul className="flex">
                    <li className="m-7"><Link to="/">Home</Link></li>
                    <li className="m-7">Restaurants</li>
                    <li className="m-7"> <Link to="/grocery">Grocery</Link></li>
                    <li className="m-7"><Link to="/about">About</Link></li>
                    <li className="m-7"><Link to="/contactus">Contact</Link></li>  
                   
                    <li className="m-7"><Link to="/cart">Cart-{cart.length==0?"":cart.length}</Link></li> 
                    <li className="m-7">{userLoggedIn.loggedInUser}</li>                    
                
                    {/* logout login */}
                </ul>
            </div>

            <div className="flex items-center justify-start">
            <button className="sessionBtn p-2 rounded-lg  bg-orange-300" value={sessionState} onClick={onClickSessionStateHandler}>{sessionState}</button>
            </div>

        </div >
    )
}

export default Header;