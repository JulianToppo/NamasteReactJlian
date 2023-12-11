import React, {lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import '../index.css'
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import Error from './components/Error'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";


const Grocery=lazy(()=>(import ('./components/Grocery')))

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
            <Outlet />
            <Footer></Footer>
        </div>

    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [{
            path: "/",
            element: <Body />,
            errorElement: <Error />
        }, {
            path: "/about",
            element: <About />,
            errorElement: <Error />
        },
        {
            path: "/contactus",
            element: <ContactUs />,
            errorElement: <Error />
        },
        {
            path: "/restaurant/:resID",
            element: <RestaurantMenu />,
            errorElement: <Error />

        },
        {
            path:'/grocery',
            element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
        }
        ],
        errorElement: <Error />
    }

])

const root = document.getElementById("root")

ReactDOM.render(<RouterProvider router={appRouter} />, root);