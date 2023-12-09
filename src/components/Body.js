import Restaurant from "./RestaurantCard";
import resData from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {

    const [demoData,setDemoData]=useState([]);


    useEffect(()=>{
        fetchData();
    },[])

    const fetchData= async ()=>{
        let data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940499&lng=85.1376051&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        let structured=await data.json();
        
        setDemoData(structured?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        //data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants   
    }

    const btnClickHandler=()=>{
        let filterdata=demoData.filter((val)=>{
            console.log(val.info.rating.rating_text>4.0)
            return val.info.rating.rating_text>4;
        })

        setDemoData(filterdata);
    }

  
    return (
        <div className="body-container">
            <div className="server-container">
                {/* <form>
                    <label htmlFor="restaurant-name"></label>
                    <input id="restaurant-name" type="text"></input>
                    <button type="submit">Search!</button>
                </form> */}
                <button className="filter_btn" onClick={btnClickHandler}>Top Rated Restaurant</button>
            </div>
            <div className="all-restaurant">
                {demoData.map((val)=>{
                    return  <Restaurant key={val.info.resId} data={val}/>
                })}
            </div>
        </div>
    )
}

export default Body;