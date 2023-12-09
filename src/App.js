import React from "react";
import ReactDOM from "react-dom";
import '../index.css'
import Header from './components/Header'
import Body from './components/Body'




const Footer = () => {
    return (
        <div className="footer-container">

        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app-container">
            <Header />
            <Body></Body>
            <Footer></Footer>
        </div>

    )
}

const root = document.getElementById("root")

ReactDOM.render(<AppLayout />, root);