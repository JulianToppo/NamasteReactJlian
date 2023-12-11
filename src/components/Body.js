import Restaurant from "./RestaurantCard";
import resData from "../utils/mockData";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
    console.log("body render")
    const [demoData,setDemoData]=useState([]);

    const [searchElem,setSearchElem]=useState("");

    const [filteredData,setFilteredData]=useState(demoData);

    useEffect(()=>{
        console.log("use Effect for body called")
        fetchData();
        console.log("after fetch data")
        const set=setInterval(()=>{
            console.log("setInterval called")
        },1000)

        return ()=>{
            clearInterval(set)
        }
    },[])

    const fetchData= async ()=>{
        console.log("fetch data called")
        let data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940499&lng=85.1376051&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        let structured=await data.json();
        
        setDemoData(structured?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        //data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        
        setFilteredData(structured?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)   
        console.log("data fetched");
    }

    const btnClickHandler=()=>{
        let filterdata=demoData.filter((val)=>{
            console.log(val.info.rating.rating_text>4.0)
            return val.info.rating.rating_text>4;
        })

        setDemoData(filterdata);
    }

    const onSearchHandler=()=>{4
        let filteredDemoData=demoData.filter((val)=>{
            return val.info.name.toUpperCase().includes(searchElem.toUpperCase());
        })

        setFilteredData(filteredDemoData)
    }
  
    return (

        <div className="body-container">
            <div className="server-container">
            
                <input type="text" value={searchElem} onChange={(e)=>{
                    setSearchElem(e.target.value)
                }}></input>

                <button onClick={onSearchHandler}>Search</button>

                <button className="filter_btn" onClick={btnClickHandler}>Top Rated Restaurant</button>
            </div>
            <div className="all-restaurant">
                {filteredData.map((val)=>{
                    // console.log("val",val)
                    return  <Link key={val.info.id} to={"/restaurant/"+ val.info.id}><Restaurant  data={val}/>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default Body;