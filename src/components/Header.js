import { useState } from "react";

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
                    <li>Home</li>
                    <li>Restaurants</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li><button className="sessionBtn" value={sessionState} onClick={onClickSessionStateHandler}>{sessionState}</button></li>

                    {/* logout login */}
                </ul>
            </div>

        </div >
    )
}

export default Header;