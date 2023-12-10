import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [sessionState,setSessionState]=useState("login")

    const onClickSessionStateHandler=(e)=>{
        console.log("clciked")
        if(sessionState==="login"){
            
            setSessionState("logout");
            
        }else{
            setSessionState("login")
            
        }
    }
    return (
        <div className="header-container">
            <div className="logo-container">
                <img className="logo" src="https://png.pngtree.com/element_our/png/20180930/food-icon-design-vector-png_120564.jpg"></img>
            </div>

            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>Restaurants</li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contactus">Contact</Link></li>
                    <li><button className="sessionBtn" value={sessionState} onClick={onClickSessionStateHandler}>{sessionState}</button></li>

                    {/* logout login */}
                </ul>
            </div>

        </div >
    )
}

export default Header;